
<template>
	<el-form :model="data" :rules="rules" ref="data" label-width="120px" class="demo-ruleForm">
        <el-form-item label="key：" prop="key">
            <el-input v-model="data.key"></el-input>
        </el-form-item>
        <el-form-item label="名称：" prop="name">
            <el-input v-model="data.name"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
	export default {
		name: "FormComponent",
		props: {
            list: Array,
            data: Object,
            error: Object,
        },
		components: { },
		data() {
            return {
                rules: {
                    name: [
                        { required: true, message: '请输入名称', trigger: 'blur' }
                    ],
                    key: [
                        { required: true, message: '请输入key', trigger: 'blur' }
                    ]
                }
            }
          },
		methods: {}
	}
</script>

<style lang="scss" scoped>
	
</style>