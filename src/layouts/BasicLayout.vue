<template>
    <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">
            <menuComponent title="xxxx"></menuComponent>
          </el-aside>
          <el-container>
            <el-main>
                <router-view/>
                <el-backtop></el-backtop>
            </el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
      </el-container>
</template>

<script>
import menuComponent from '@/components/menu'

export default {
	name: 'BasicLayout',
  components: {
    menuComponent
  }
}
</script>
<style scoped>


</style>
