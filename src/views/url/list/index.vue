<template>
	<div class="sectionWrap-A7 p-rel">
    <div class="sectionMenu-A1">
        <el-input
            placeholder="输入关键字进行过滤"
            v-model="filterText">
        </el-input>

        <el-tree
            :expand-on-click-node="false"
            :current-node-key="currentNodeKey"
            @node-click="handleNodeClick"
            class="filter-tree mCustomScrollbar _mCS_1 mCS_no_scrollbar"
            :data="data"
            :props="defaultProps"
            :filter-node-method="filterNode"
            ref="tree">
        </el-tree>
    </div>

    <div class="sectionWrap-A6">
        <div class="j_sectionBlock p-rel sectionBorder-A4 ">
            <div class="p25">

                <ul class="sectionTitle-A5 sectionTitle-A5-p0 clear mb10 sectionForm-A1 sectionForm-A1-1 sectionForm-A1-2 sectionFloat">
                    
                    <li class="mr20">
                        <label class="L w-auto">筛选：</label>
                        <input type="text" v-model="keyword" class="text w-160 L" placeholder="请输入关键字">
                    </li>
                    <li class="R sectionButton-B1">
												<router-link :to="`/sorts/add/${sid}`"><button type="button" class="btn">添加类别</button></router-link>
												<router-link :to="`/url/add/${sid}`"><button type="button" class="btn ml10">添加地址</button></router-link>
                    </li>
                </ul>
                <div class="sectionFloat sectionWrap-A17 mb10">
                    <ul class="clear">
                        <li v-for="(item, index) in contents" :key="index" class="L mr5 mb10 sectionButton-B1 sectionButton-B1-big">
                            <div class="btn">
                                <a :href="item.url" target="_blank">{{ item.name }}</a>
                                <a class="ml5" v-on:click="modify(item.id)">修改</a>
                                <a class="ml5" v-on:click="remove(item.id)" href="javascript:void(0)">删除</a>
                            </div>
                        </li>
                    </ul>
                </div>


                <div class="sectionPageing-A2 clear mb20">
                    <div class="R">
                        
                        <paging-component></paging-component>
                    </div>
                </div>

                <div class="sectionTitle-A5 sectionTitle-A5-p0 clear">
                    <div class="L">
                        <span class="mr5"><input class="v-negative3 js_allcheckbok" type="checkbox"></span>
                        <span>全选当前商品</span>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import { getSortsList, searchUrl, getlUrl, deleteUrl, detailSort } from '@/api/api.js'
import PagingComponent from '@/components/PagingComponent.vue'
	export default {
		data(){
				return {
						'contents': [],
						'currentNodeKey': '',
						'keyword': "",
						'title': "",
						'sid': 0,
						filterText: '',
						data: [],
						defaultProps: {
								children: 'child',
								label: 'name'
						}

				};
		},
		created() {
			this.sid = this.$route.params.sid || 0;
			if(this.sid > 0){
				detailSort(this.sid).then(res => {
					if(res.status) {
						this.filterText = res.data.name
						this.getContent(this.sid, this.filterText)
					}
				})
			}
			
		},
		'components': {
			PagingComponent
		},
		beforeCreate() {
			getSortsList().then(res => this.data = res);
		},
		'methods': {
				search() {
						let sid = this.sid;
						let name = this.keyword;
						
						if(sid > 0) {
								searchUrl({ sid, name }).then(res => {
										if(res.status){
												this.contents = res.data;
										}
								});
								
						}

				},
				getContent(sid, title){
						this.sid = sid;
						this.title = title;
						getlUrl(sid).then(res =>{
								if(res.status){
										this.contents = res.data;
								}
						});
						
				},
				confirm(func){
					this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						this.$message({
							type: 'success',
							message: '删除成功!'
						});
						func()
					}).catch(() => {
						this.$message({
							type: 'info',
							message: '已取消删除'
						})        
					})
				},
				remove(id){
					this.confirm(()=> {
						deleteUrl(id).then(res => {
							if(res.status){
									this.contents = this.contents.filter(item => item.id != id)
							}
						})
					})
					
				},
				modify(id){
						this.$router.push(`/url/edit/${id}`);
				},
				filterNode(value, data) {
						if (!value) return true;
						return data.name.indexOf(value) !== -1;
				},
				handleNodeClick(data) {
						this.getContent(data.id, data.name);
				}
		},
		'watch': {
				'keyword': function() { this.search();},
				filterText(val) {
						this.$refs.tree.filter(val);
				}
		}
}
</script>

<style lang="scss" scoped>
	a, a:link, a:visited {
		color: #fff;
	}
</style>