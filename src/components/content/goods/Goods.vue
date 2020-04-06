<template>
    <div class="goods">
        <GoodsItem v-for="item in goods" :goodsitem="item"></GoodsItem>
    </div>
</template>

<script>
    import GoodsItem from './GoodsItem'
    export default {
        name: "Goods",
        components:{
            GoodsItem
        },
        props:{
           goods:{
               type:Array,
               default(){
                   return []
               }
           }
        }
    }
</script>

<style scoped>
    .goods {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 2px;
    }
</style>