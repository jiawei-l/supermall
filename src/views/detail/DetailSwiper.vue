<template>
    <div>
        <Swiper class="topimage">
            <SwiperItem v-for="item in topImage" >
                <img :src="item" alt="">
            </SwiperItem>
        </Swiper>
    </div>

</template>

<script>
    import {Swiper,SwiperItem} from 'components/common/swiper'
    export default {
        name: "DetailSwiper",
        components:{
            Swiper,
            SwiperItem
        },
        props:{
            topImage:{
                type:Array,
                defaults(){
                    return []
                }

            }
        }
    }
</script>

<style scoped>
.topimage{
    height: 300px;
}
</style>