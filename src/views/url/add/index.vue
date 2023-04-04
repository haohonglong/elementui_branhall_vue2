<template>
	<form class="form-horizontal">
    <div class="sectionWrap-A5">
        <div class="p15">
            <div class="sectionForm-A1 sectionForm-A1-1 sectionForm-A1-1-1 mb15">
                <ul>
                    <li class="clear mb5">
                        <label class="L">类别：<span class="warning">*</span></label>
                        <select-box-component :sid="sid" v-on:setSid="setSid" v-on:setSortName="setSortName" :sortName="sortName" :list="list"></select-box-component>
                        
                    </li>
                    <li class="clear mb5">
                        <label class="L">名称：<span class="warning">*</span></label>
                        <input type="text" v-model="name"  class="text name L">
                        
                    </li>

                    <li class="clear mb5">
                        <label class="L">url：<span class="warning">*</span></label>
                        <input type="text" v-model="url" class="text name L">
                    </li>
                    <li class="textarea clear">
                        <label class="L">简介：<span class="warning">*</span></label>
                        <textarea class="L" v-model="info"></textarea>
                    </li>
                </ul>
            </div>
            <div class="clear mb10 sectionForm-A1 sectionForm-A1-1-1 sectionForm-A2 ml50">
                <button type="button" v-on:click="submit()" class="btn save L mr15">提交</button>
                <button type="reset" class="btn btn-cancel L">恢复</button>
            </div>
        </div>
    </div>
</form>
</template>

<script>
	import SelectBoxComponent from '@/components/SelectBoxComponent';
	import { addUrl, getSortsList, detailSort } from '@/api/api';
	export default {
		components: {
			SelectBoxComponent
		},
		data() {
			return {
					list: [],
					sid: -1,
					sortName: "",
					name: "",
					url: "",
					info: ""
			}
		},
		created() {
			this.sid = this.$route.params.sid || -1;

			getSortsList().then(res => this.list = res)
			if(this.sid > -1) {
				detailSort(this.sid).then(res => {
					if(res.status) {
						this.sortName = res.data.name;
					}
				})
			}
			

		},
		methods: {
			setSid(sid){
					this.sid = sid;
			},
			setSortName(name) {
					this.sortName = name;
			},
			submit(){
					const sid = this.sid;
					const name = this.name;
					const url = this.url;
					const info = this.info;

					const data = { 
							sid,
							name,
							url,
							info
					};

					addUrl(data).then(res => {
							if(res.status){
									this.$router.push('/url/list/' + sid);
							}

					});
						

			}
		}
	}
</script>

<style lang="scss" scoped>

</style>