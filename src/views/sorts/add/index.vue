<template>
<form class="form-horizontal">
    <div class="sectionWrap-A5">
        <div class="p15">
            <div class="sectionForm-A1 sectionForm-A1-1 sectionForm-A1-1-1 mb15">
                <ul>
                    <li class="clear mb5">
                        <label class="L">类别：<span class="warning">*</span></label>
                        <select-box-component :sid="sid" v-on:setSid="setSid" v-on:setSortName="setSortName" :sortName="sortName" :list="list"></select-box-component>
                        <span data-error="pid" class="help-block none"></span>
                    </li>
                    <li class="clear mb5">
                        <label class="L">名称：<span class="warning">*</span></label>
                        <input type="text" v-model="name" class="text name L">
                        <span data-error="name" class="help-block none"></span>
                    </li>

                </ul>
            </div>
            <div class="clear mb10 sectionForm-A1 sectionForm-A1-1-1 sectionForm-A2 ml50">
                <button type="button" @click="submit" class="btn save L mr15">添加</button>
                <button type="reset" class="btn btn-cancel L">恢复</button>
            </div>
        </div>
    </div>
</form>
</template>

<script>
import { getSortsList, addSort, detailSort } from "@/api/api"
import SelectBoxComponent from "@/components/SelectBoxComponent";
	export default {
		components: {
			SelectBoxComponent
		},
		data() {
			return {
					list: [],
					sid: -1,
					sortName: "",
					name: ""
			}
		},
		created(){
			this.sid = this.$route.params.pid || -1;
			if(this.sid > 0) {
				detailSort(this.sid).then(res => {
					if(res.status) {
						this.sortName = res.data.name
					}
				})

			}

			getSortsList().then(res => this.list = res)
		},
		methods: {
			setSid(sid){
					this.sid = sid;
			},
			setSortName(name) {
					this.sortName = name;
			},
			submit(){
					const pid = this.sid;
					const name = this.name;

					const data = { 
							pid,
							name
					};

					addSort(data).then( res => {
							if(res.status){
									this.$router.push("/sorts/list");
							}else{
									
							}

					});
						

			}
		}
	}
</script>

<style lang="scss" scoped>

</style>