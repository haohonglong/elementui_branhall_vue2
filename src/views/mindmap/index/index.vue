<template>
    <div>
     <el-button v-on:click="action(1)" type="primary">添加思维导图</el-button>
      <el-row :gutter="10">
          <el-col :span="6" v-for="(item, index) in list" :class="{ line: (index + 1) % 4 != 0 }" style="margin:5px 0px;" :key="index">
              <div class="grid-content bg-purple">
                  <el-card class="box-card" >
                      <div slot="header" class="clearfix">
                          <el-button type="text" style="font-size: 24px" v-on:click="detail(item.key)">{{ item.name }}</el-button>
                          <el-button style="float: right; padding: 3px 0" v-on:click="action(2, item)" type="text">修改</el-button>
                          <el-button style="float: right; padding: 3px 0" v-on:click="remove(item.id)" type="text">删除</el-button>
                      </div>
                  </el-card>
              </div>
          </el-col>
      </el-row>

      <el-dialog
        :title="dialogTitle"
        :visible.sync="dialogVisible"
        width="">
        <form-component :data="form" :error="formError"></form-component>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="submit()">提 交</el-button>
        </span>
      </el-dialog>
    
    </div>
</template>

<script>

import FormComponent from './components/FormComponent';
import { Mindmaps } from '@/api/api.js'

export default {
  components: {
    FormComponent
  },
  data(){
    return {
      dialogTitle: "添加思维导图",
      dialogVisible: false,
      list: [],
      form: {
        active: "",
        id: -1,
        key: "",
        name: "",
        thumbnail: ""
      },
      formError:{
        key: "",
        name: ""
      }
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    detail(key){
      this.$router.push(`/mindmap/detail/${key}`);
    },
    init() {
        this.form.id = -1;
        this.form.active = "";
        this.form.key = '';
        this.form.name = '';
        this.form.thumbnail = '';
        this.initError();
    },
    initError() {
        this.formError.key = "";
        this.formError.name = "";
    },
    loadData() {
      this.init();
      Mindmaps.list().then(res => {
              if(res.status){
                    this.list = res.data;
                    const message = "数据加载成功";
                              this.$message({
                                  message,
                                  type: 'success'
                                  });
              }

      });
    },
    submit() {
        this.initError();
        
        switch(this.form.active) {
            case 1:
              this.add();
              break;
            case 2:
              this.modify(this.form.id);
              break;
        }

    },
    ok() {
        this.dialogVisible = false
    },
    action(active, item) {
        this.init();
        this.form.active = active;

        switch(active) {
            case 1:
              this.dialogTitle = "新增";
              break;
            case 2:
              this.dialogTitle = "修改";
              this.form.id = item.id;
              break;
        }
        
        this.dialogVisible = true

        if(item) {
            this.form.key = item.key;
            this.form.name = item.name;
        }
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
        // this.$message('已取消删除')  
      })
    },
    remove(id){
      this.confirm(()=> {
        Mindmaps.delete(id).then(res => {
          if(res.status){
            this.loadData();
            this.ok();
            
          }
        })
      })
      
    },
    modify(id){
        const key  = this.form.key;
        const name = this.form.name;
        const thumbnail = this.form.thumbnail;
        const data = {
            id,
            key,
            name,
            thumbnail
        };
        Mindmaps.edit(data).then(res => {
          if(res.status){
            this.loadData();
            this.ok();
            this.$message({ message: '修改成功', type: 'success' });
          } else {
            this.$message.error('修改失败');
          }

      });

        
    },
    add() {
      const key = this.form.key;
      const name= this.form.name;
      const thumbnail = this.form.thumbnail;
      const content = [{name}];
      const data = { key, name, thumbnail, content: JSON.stringify(content) };
      
      Mindmaps.add(data).then(res => {
        if(res.status){
          this.loadData();
          this.ok();
          this.$message({ message: '添加成功', type: 'success' });
        }

    });

    }
  }
}
</script>