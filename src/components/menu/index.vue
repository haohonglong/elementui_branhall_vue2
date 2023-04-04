<template>
	<div>
		<el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu class="el-menu-vertical-demo">
            <el-submenu v-for="(v1, i) in menu" :key="i" :index="i + ''">
              <template slot="title"><i class="el-icon-message"></i>{{ v1.title }}</template>
              <el-menu-item-group v-if="v1.ul">
                <el-menu-item v-for="(v2, j) in v1.ul" :key="j" :index="i + '-' + j">
									<router-link tag="div" active-class="is-active" :to="v2.href">{{ v2.title }}</router-link>
								</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
    </el-container>
	</div>
</template>

<script>
import DATA from '@/datas/data.js'
const { menu } = DATA
	export default {
		name: "menuComponent",
		props: {
			"title": String
		},
		data: function () {
			return {
				menu
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>

</style>