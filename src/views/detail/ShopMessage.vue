<template>
    <div class="shop">
        <div class="logo">
            <img :src="shopMessage.logo" alt="">
            <span>{{shopMessage.name}}</span>
        </div>
        <div class="shop-intro">
            <div class="shop-left shop-item ">
             <div class="shop-left-one">
                 <div class="sell-count number">
                     {{shopMessage.sells}}
                 </div>
                 <div class="sell-text">总销量</div>
             </div>
                <div class="shop-left-two ">
                    <div class="goods-count number">
                        {{shopMessage.goodsCount}}
                    </div>
                    <div class="goods-text">全部宝贝</div>
                </div>
            </div>
            <div class="shop-right shop-item">
                <table>
                    <tr v-for="(item, index) in shopMessage.score" :key="index">
                        <td>{{item.name}}</td>
                        <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
                        <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="shop-bottom">
            <div class="enter-shop">进店逛逛</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShopMessage",
        props:{
            shopMessage:{
                type:Object,
                defaults(){
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
.shop{
    margin-top: 30px;
}
    .logo{
        display: flex;
        align-items: center;
        padding-left: 20px;
    }
    .logo img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 20px;
    }
    .shop-intro{
        display: flex;
        margin-top: 20px;
        align-items: center;
    }
    .shop-item{
        flex: 1;
        width: 50%;

    }
    .shop-left{
        display: flex;
        width: 50%;
        text-align: center;
        justify-content: space-around;

    }
    .number{
        margin-bottom: 10px;
    }
    .score{
        padding: 0 10px;
    }
    .score-better{
        color: green;
    }
    .better-more{
        color: green;
    }
    .shop-bottom{
        height: 40px;
        line-height: 40px;
        text-align: center;
        width: 30%;
        border-radius: 5px;
        background: #ccc;
        margin: 0 auto;
        margin-top: 10px;
    }
</style>