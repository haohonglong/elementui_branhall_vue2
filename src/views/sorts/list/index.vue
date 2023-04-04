<template>
<div class="clearfix">
	<div v-for="v in list" :key="v.id" class="L mr5 mb30 sectionButton-B1 sectionButton-B1-big" style="border: 3px solid rgba(127, 199, 251, 0.341); padding: 10px;">
		<div class="btn">
	        <span @click="modify(v.id, v.pid)">{{ v.name }}</span>
	        <span class="ml20" @click="remove(v.id)">删除</span>
	    </div>
		<ul v-if="isArray(v.child)" class="ml10"><child-component v-on:remove="remove" v-on:modify="modify" :list="v.child"></child-component></ul>
	</div>
	<div></div>
</div>
</template>

<script>
import { deleteSort, getSortsList } from '@/api/api';
import ChildComponent from './components/ChildComponent'
	export default {
		'name': 'ContentComponent',
		data(){
				return {
					list: []
				};
		},
		'components': {
			ChildComponent
		},
		beforeCreate(){
			getSortsList().then(res => this.list = res)
		},
		'methods': {
				modify(id, pid) {
					this.$router.push(`/sorts/edit/${id}`)
				},
				remove(id) {
					deleteSort(id)(res => {
							
					})
				},
				isArray(value) {
						return Array.isArray(value);
				}
		}
	}
</script>

<style lang="scss" scoped>
		.sectionButton-B1{
			.btn{
				a{
					color:#fff;
				}
			}
		} 
    
</style>