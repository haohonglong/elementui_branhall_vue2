<template>
	<div>
    <div v-for="(v1, i) in list" :key="i" class="sectionBorder-A3 mt1" v-bind:style="isset(v1.bill_id) ? 'padding:1px;' : ''">
        <div class="sectionTable-B1 sectionTable-B1-5">
            <div class="sectionTitle-A4 sectionTitle-A4-2 sectionTitle-A4-3 sectionFloat-A1 sectionBg-A2">
                <ul class="clear">
                    <div v-if="isset(v1.bill_id)">
                            <li v-if="v1.bill_id != 0" class="first col-7" style="width:25%;">
                                <bill-component v-for="(item, key) in getBill(
                                                                        v1.bill_id,
                                                                        v1.shop_name,
                                                                        v1.total_price,
                                                                        v1.discount,
                                                                        v1.create_at)" :key="key" :item="item"></bill-component>
                            </li>
                            <li v-else class="first col-7" style="width:25%;font-weight: bold;">这些商品没建立订单</li>

                        <li class="first col-1" style="width:75%;">
                            <div class="sectionBorder-A3">
                                <div class="sectionTable-B1 sectionTable-B1-5">
                                    <div class="sectionTitle-A4 sectionTitle-A4-2 sectionTitle-A4-3 sectionFloat-A1 sectionBg-A2">
                                        <ul class="clear" style="font-weight: bold;">
                                            <li class="col-8">商品id</li>
                                            <li class="col-1">店名</li>
                                            <li class="col-1">商品名称</li>
                                            <li class="col-7">价格</li>
                                            <li class="col-7">日期</li>
                                            <li class="col-7">操作</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <table-component :list="v1.childs"></table-component>

                        </li>
                    </div>
                    <div v-else>
                        <li class="col-8">{{ v1.id }}</li>
                        <li class="col-1">{{ v1.shop_name }}</li>
                        <li class="col-1">{{ v1.name }}</li>
                        <li class="col-7 color-red">{{ v1.single_price }}</li>
                        <li class="col-7">{{ v1.create_at }}</li>
                        <li class="col-7">删除</li>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
	import BillComponent from './BillComponent'
	export default {
		name: 'TableComponent',
		props: ["list"],
		data: function () {
			return {
			}
		},
		'components': {
				BillComponent
		},
		methods: {
			'isset': function(s) {
				return (typeof s !== "undefined" && s !== null);
			},
			'getBill': function(bill_id, shop_name, total_price, discount, create_at) {
					return [
									{"name":"订单号","value": bill_id, "style": ""},
									{"name":"店名","value": shop_name, "style": ""},
									{"name":"合计","value": total_price,"style":"color-red"},
									{"name":"折扣","value": discount,"style":"color-green"},
									{"name":"日期","value": create_at, "style": ""}
									];
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>