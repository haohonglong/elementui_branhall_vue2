<template>
	<div>
        <div class="clear mb10 sectionForm-A1 sectionForm-A1-1-2 sectionForm-A2 mb15">
            <button type="submit" class="btn save L mr15">+&nbsp;&nbsp;添加新案例 </button>
        </div>

        <form class="form-horizontal">
            <div class="sectionBorder-A3 mb15">
                <div class="sectionTable-B1 sectionTable-B1-5">
                    <div class="sectionTitle-A4 sectionTitle-A4-2 sectionTitle-A4-3 sectionFloat-A1 sectionBg-A2">
                        <ul class="clear">
                            <li class="first col-1">案例封面图片</li>
                            <li class="col-2">案例信息</li>
                            <li class="col-3">排序</li>
                            <li class="col-7">最后编辑时间</li>
                            <li class="col-8">操作</li>
                        </ul>
                    </div>

                    <room-list-component 
                    v-on:swap="swap"
                    :list="roomList"></room-list-component>

                </div>
                <paging-component></paging-component>

            </div>

            <div class="sectionPageing-A2 clear">
                <div class="R">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import RoomListComponent from './components/RoomListComponent.vue'
import PagingComponent from '@/components/PagingComponent.vue'
import DATA from '@/datas/data.js'


const { room: roomList } = DATA

export default {
    components: {
        RoomListComponent,
        PagingComponent
    },
    data() {
        return {
            roomList
        }
    },
    created() {
    },
    methods: {
        swap(data, a, b) {
            if (a != b) {
                let c = data[a];
                this.$set(data, a, data[b])
                this.$set(data, b, c)
            }
        }
        
    },
    
}
</script>