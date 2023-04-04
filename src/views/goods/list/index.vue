<template>
	<div>
    <div class="sectionButton-B1">
        
    </div>
    <div class="sectionBorder-A3 mt20">
        <div class="sectionTable-B1 sectionTable-B1-5">
            <div class="sectionTitle-A4 sectionTitle-A4-2 sectionTitle-A4-3 sectionFloat-A1 sectionBg-A2">
                <ul class="clear" style="font-weight: bold;">
                    <li class="first col-1" style="width:25%;">订单信息</li>
                    <li class="col-2" style="width:75%;">商品信息</li>
                </ul>
            </div>
        </div>
    </div>
    <table-component :list="list"></table-component>
</div>
</template>

<script>
import { getGoodsList } from '@/api/api'
import TableComponent from './components/TableComponent'
	export default {
		components: {
			TableComponent
		},
		data: function () {
			return {
					list: []
			}
		},
		beforeCreate(){
			getGoodsList().then(res => this.list = res)
		},
		methods: {
			'isset': function(s) {
				return (typeof s !== "undefined" && s !== null);
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>