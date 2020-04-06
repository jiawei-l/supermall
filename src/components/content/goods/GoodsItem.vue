<template>
    <div class="good-item" @click="goodsitemdetail">
        <img :src="showImage" alt="" @load="imgload">
        <div class="intro">
            <p>{{goodsitem.title}}</p>
            <span class="price">￥{{goodsitem.price}}</span>
            <span class="collect">{{goodsitem.cfav}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsItem",
        props:{
            goodsitem:{
                type:Object,
                defaults(){
                    return {}
                }
            }
        },
        computed:{
          showImage(){
              return this.goodsitem.image || this.goodsitem.show.img
          }
        },
        methods:{
            imgload(){ //使每一张图片加载完都进行一次refresh
                if(this.$route.path.indexOf('/home'))
                {
                    this.$bus.$emit('homeimgload')//抛出一个要处理的事件，在home里面接收
                }else if(this.$route.path.indexOf('/detail')){
                    this.$bus.$emit('detailimgload')
                }


            },
            goodsitemdetail(){
                this.$router.push('/detail'+this.goodsitem.iid)
            }
        }
    }
</script>

<style scoped>
    .good-item {
        padding-bottom: 40px;
        position: relative;
        width: 48%;
        margin-bottom: 20px;
    }

    .good-item img {
        width: 100%;
        border-radius: 20px;
    }

    .intro {
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }

    .intro p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }

    .intro .price {
        color: red;
        margin-right: 20px;
    }

    .intro .collect {
        position: relative;
    }

    .intro .collect::before {
        content: '';
        position: absolute;
        left: -15px;
        top: -1px;
        width: 14px;
        height: 14px;
        /*background: url("~assets/img/common/collect.svg") 0 0/14px 14px;*/
    }
</style>