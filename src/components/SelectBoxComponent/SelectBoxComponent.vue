<template>
	<div>
    <select id="select" class="L" v-on:click="arrowDown">
        <option v-if="0 == sid" value="0" class="none">请选择</option>
        <option v-else :value="sid" class="none"> {{ sortName }} </option>
    </select>
    <div id="selectBox" v-show="isShow" @mouseleave="mouseleave">
      <div class="mCustomScrollbar">
        <el-tree :data="getList" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </div>
    </div>    
</div>
</template>

<script>
	export default {
		name: "SelectBoxComponent",
		props: {
			"list": {
				type: Array,
				require: true,
			}, 
			"sid": {
				type: [String, Number],
			},
			"sortName": {
				type: String
			},
			"id": {
				type: String,
				default: null
			}
		},
		components: { },
		data() {
			return {
				isShow: false,
				defaultProps: {
					children: 'child',
					label: 'name'
				}
			}
		},
		computed:{
			getList(){
				const arr = [{id: "-1", name: "请选择", pid : "0"}, ...this.list];
				return arr;
			}
		},

		methods: {
			setSid(id){
				this.$emit('setSid', id);
			},
			setSortName(name) {
				this.$emit('setSortName', name);
			},
			hideSelectBox() {
				this.isShow = false;
			},
			mouseleave(){
				this.hideSelectBox()
			},
			arrowDown(){
				this.isShow = !this.isShow;
			},
			select(item) {
				alert(item.id);
			},
			handleNodeClick(data) {
				if (this.id && data.id == this.id) {
					alert("当前的类名称不能选择自己为父类");
					return;
				}
				this.setSid(data.id);
				this.setSortName(data.name);
				this.hideSelectBox();
			}

		}
	}
</script>

<style lang="scss" scoped>
	#selectBox{
		width: 165px;
		padding: 10px; 
		border: 1px solid #ccc; 
		position: absolute;
		top:23px; left:85px; 
		background: #fff; 
		z-index: 9999;
		li{
			padding: 2px; 
			cursor: pointer;
		}
	}
  .selected{
		font-weight: bold;
		color:red;
	}
</style>