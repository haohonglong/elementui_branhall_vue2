<template>
<div>
    <div class="sectionBorder-A3 mb1">
        <div class="sectionTable-B1 sectionTable-B1-5">
            <div class="sectionTitle-A4 sectionTitle-A4-2 sectionTitle-A4-3 sectionFloat-A1 sectionBg-A2">
                <ul class="clear">
                    <li class="col-1" style="font-weight: bold;">{{ item.name }}</li>
                    <li :class="'col-1 pl5 ' + item.style" style="width:75%;text-align: left;">{{ item.value }}</li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
	export default {
		name: 'BillComponent',
		props: ["item"],
		data: function () {
			return {
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>