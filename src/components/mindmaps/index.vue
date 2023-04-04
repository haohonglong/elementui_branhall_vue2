<template>
  <div>
    <el-button @click="edit()">保存</el-button>
    <mindmap v-model="data" height="500"></mindmap>
  </div>
  
</template>

<script>
import mindmap from '@hellowuxin/mindmap'
import { Mindmaps } from '@/api/api.js'

export default {
  name: "MindmapsComponent",
  components: { mindmap },
  props: {
	"keyword": {
		type: String,
		require: true
	}
  },
  data(){
    return {
      data: []
    };
  },
  created(){
    
	const key = this.keyword;
    Mindmaps.show({ key }).then(res => {
            if(res.status){
                   
                try {
                    const content = res.data.content;
                    this.data = JSON.parse(content);
                    const message = "数据加载成功";
                            this.$message({
                                message,
                                type: 'success'
                                });
                } catch (err) {
                  console.log('Error: ', err.message);
                }
                   
            }

    });
  },
  methods: {
    edit() {
		const key = this.keyword;
        const content = this.data;
                const data = {
                    key,
                    "content": JSON.stringify(content)

                };
        Mindmaps.editByKey(data).then(res => {
                if(res.status){
                    const message = "保存成功";
                    this.$message({
                        message,
                        type: 'success'
                        });
                }

        });
    }
  }
}
</script>