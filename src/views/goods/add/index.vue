<template>
<div>
    <form class="form-horizontal">
        <div class="sectionWrap-A5">
            <div class="sectionForm-A1 sectionForm-A1-1 sectionForm-A1-1-1" style="margin-bottom: 100px;">
                <ul class="clear">
                    <li class="L ml5 sectionButton-B1">
                        <label class="L">店铺：<span class="warning">*</span></label>
                        <select class="L ml10" v-model="shop_id" style="width:115px;">
                            <option value="0">请选择</option>
                            <option v-for="v in shops" :key="v.id" :value="v.id" v-text="v.name"></option>
                        </select>
                        <span class="warning" v-text="shop_id_error"></span>
                        <a href="__INDEX__shop/create" class="btn save L ml5">添加店铺</a>
                    </li>
                    <li class="R sectionButton-B1">
                        <button type="button" @click="handelAdd" class="btn save L mr15">添加</button>
                        
                    </li>
                    <input-component v-model="bill_id" label="账单号" :error="bill_id_error" input_style="width:120px;" input_class="final_price"></input-component>
                    <input-component v-model="discount" label="折扣价" :error="discount_error" input_style="width:30px;" input_class="discount"></input-component>
                    <li class="L ml10">
                        <span class="warning">*</span> <label> 创建日期 : </label>
                        <el-date-picker
                            v-model="create_by"
                            size="mini"
                            placeholder="选择日期">
                        </el-date-picker>
                    </li>
                    
                    
                </ul>
            </div>
            <div>
                
                <div class="sectionForm-A1 sectionForm-A1-1 sectionForm-A1-1-1 mb15" v-for="(item, i) in list" :key="i">
                    <ul class="clear mb5 row">
                        <input-component v-model="item.name" :error="item.error.name" label="名称" @input="validate(i)" input_style="width:120px;"></input-component>
                        <input-component v-model.number="item.number" :error="item.error.number" type="number" @input="result(i)" label="数量" input_style="width:45px;" input_class="number"></input-component>
                        <input-component v-model.number="item.weight" :error="item.error.weight" @input="result(i)" label="重量" unit="g" input_style="width:65px;" input_class="weight"></input-component>
                        <input-component v-model.number="item.single_price" :error="item.error.single_price" @input="result(i)" label="单价" input_style="width:45px;" input_class="single_price"></input-component>
                        <li class="L ml10">
                            <label> 结算价格 ：</label>
                            <span class="font-16 font-bold" v-text="item.final_price"></span>
                            <span class="warning" v-text="item.error.final_price"></span>
                        </li>
                        <li class="R sectionButton-B1">
                            <button type="button" @click="handelCopy(i)" class="btn save L mr15">复制</button>
                            <button type="button" @click="handelRemove(i)" class="btn save L mr15">删除</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row mb10">
                <div class="col-sm-12">
                    总金额: <span class="font-24 font-bold" v-text="total"></span>
                </div>
            </div>

            <div v-if="total > 0" class="clear mb10 sectionForm-A1 sectionForm-A1-1-1 sectionForm-A2">
                <button type="button" v-on:click="submit()" class="btn save L mr15">提交</button>
            </div>
        </div>
    </form>
</div>
</template>

<script>
import md5 from "md5"
import { getShopList, addGoods } from "@/api/api"
import InputComponent from "./components/InputComponent"

let n = 0;

const NAMES = {
						'shop_id':"店铺",
						'bill_id':"账单号",
						'discount': "折扣价",
						'create_by': "创建日期",
						'name': "名称",
						'number':"数量",
						'weight':"重量",
						'single_price': "单价",
						'final_price': "结算价格"
				};
let goods = {}
goods.name = "",
goods.number = 1,
goods.weight = 0;
goods.single_price = parseFloat(0).toFixed(2);
goods.final_price = parseFloat(0).toFixed(2);

goods.error = {};
goods.error.name = "";
goods.error.number = "";
goods.error.weight = "";
goods.error.single_price = "";
goods.error.final_price = "";
	export default {
		data(){
			return {
					picked: '',
					n,
					shop_id:"",
					shop_id_error:"",
					create_by: "",
					create_by_error: "",
					bill_id: md5(Date.now()),
					bill_id_error: "",
					discount: 0,
					discount_error: "",
					shops: [],
					list: [{...goods}]
			};
		},
		components: {
			InputComponent
		},
		beforeCreate(){
			getShopList().then(res => this.shops = res.data)
		},
		computed: {
			total(){
					let result = 0.00;
					this.list.forEach(item => {
							result += parseFloat(item.final_price);
					});
					result = parseFloat(result).toFixed(2);
					if (!this.isNumeric(result)) result = parseFloat(0).toFixed(2);

					return result;

			}
		},
		methods: {
			isNumeric(n) {
				return !isNaN(n);
			},
			handelAdd() {
					this.handelClick();
					this.list.push({...goods});
			},
			handelClick() {
					this.n++;
			},
			handelCopy(i) {
					this.handelClick();
					this.list.splice(i+1, 0, {...this.list[i]});
			},
			handelRemove(i) {
					if (this.list.length > 1) {
							this.n--;
							this.list.splice(i, 1)
					}
					
			},
			init(){
				this.list.forEach(item => {
							item.error.name = "";
							item.error.number = "";
							item.error.weight = "";
							item.error.single_price = "";
							item.error.final_price = "";
					});
					this.shop_id_error = "";
					this.create_by_error = "";
					this.bill_id_error = "";
					this.discount_error = "";
			},
			validate(i) {
					this.list[i].error.name = "";
					this.list[i].error.number = "";
					this.list[i].error.weight = "";
					this.list[i].error.single_price = "";
					this.list[i].error.final_price = "";

					const MSG = "必须填写";
					let error = this.list[i]["error"];
					if ("" == this.list[i].name.trim()) error.name = NAMES.name + MSG;
					if (this.list[i].weight <= 0) error.weight = NAMES.weight + MSG;
					if (this.list[i].single_price <= 0) error.single_price = NAMES.single_price + MSG;

			},
			result(i){
					let single_price = this.list[i].single_price;
					let weight = this.list[i].weight;
					let number = this.list[i].number;

					single_price = parseFloat(single_price).toFixed(2);
					weight = parseInt(weight);
					number = parseInt(number);


					if (!this.isNumeric(single_price)) single_price = parseFloat(0).toFixed(2);
					if (!this.isNumeric(weight)) weight = 0;
					if (!this.isNumeric(number)) number = parseFloat(0).toFixed(2);

					this.list[i].single_price = single_price;
					this.list[i].weight = weight;
					this.list[i].number = number;

					let price = single_price  * number;
					price = parseFloat(price).toFixed(2);
					if (!this.isNumeric(price)) price = parseFloat(0).toFixed(2);
					this.list[i].final_price = price;

					this.validate(i);

			},
			submit() {
					this.init();

					let _this = this;
					let names = [], numbers = [], weights = [], single_prices = [], final_prices = [];
					const shop_id = this.shop_id;
					const bill_id = this.bill_id;
					const discount = this.discount;
					const create_by = this.create_by;
					this.list.forEach(item => {
							names.push(item.name);
							single_prices.push(item.single_price);
							weights.push(item.weight);
							numbers.push(item.number);
							final_prices.push(item.final_price);
					})

					addGoods({
							shop_id,
							bill_id,
							discount,
							create_by,
							name: names,
							number: numbers,
							weight: weights,
							single_price: single_prices,
							final_price: final_prices 
					}).then(res => {
							console.log(res)
							if(res.status){
									alert(res.message);
									this.$router.push("/goods/index");
							}else{
									alert(res.message);
									// res.errors.forEach(item => {})
							}

					});

			}
		},
		watch: {
			_list: {
					handler: function(){
							// System.each(this.list,function(){
							//     this.single_price = parseFloat(this.single_price).toFixed(2);
							//     this.weight = parseFloat(this.weight).toFixed(2);
							//     this.number = parseInt(this.number);
							//     let price = this.single_price * this.weight * this.number;
							//     this.final_price = parseFloat(price).toFixed(2);
							// });
					},
					deep: true
			}
		}
	}
</script>

<style lang="scss" scoped>
.sectionWrap-A5{width:auto;margin:0 auto;}
.sectionForm-A1-1-1{
	label{
		margin:0; 
		width: auto; 
		text-align: left;
	}
}
.sectionForm-A1-1 .text.name{width: 66px;}
</style>