<template>
<div class="clearfix">
	<li class="mt5" v-for="v in list" :key="v.id">
		<div class="btn">
				<span class="ml5" @click="modify(v.id, v.pid)">{{ v.name }}</span>
				<span class="ml20" @click="remove(v.id)">删除</span>
		</div>
		<ul v-if="isArray(v.child)" class="ml15"><child-component v-on:modify="modify" v-on:remove="remove" :list="v.child"></child-component></ul>
	</li>
</div>
</template>

<script>
	export default {
		name: 'ChildComponent',
		props: {
			'list': Array
		},
		data: function () {
			return {
			}
		},
		methods: {
			modify(id, pid) {
				this.$emit('modify', id, pid);
			},
			remove(id) {
				this.$emit('remove', id);
			},
			isArray(value) {
					return Array.isArray(value);
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>