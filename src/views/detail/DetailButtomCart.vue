<template>
    <div class="bottom-cart">
         <div class="cart-left cart-item">
             <div class="cart-left-item">
                 <i class="icon services"></i>
                 <span>客服</span>
             </div>
             <div class= "cart-left-item">
                 <i class="icon shop"></i>
                 <span>店铺</span>
             </div>
             <div class="cart-left-item">
                 <i class="icon collect"></i>
                 <span>收藏</span>
             </div>
         </div>
         <div class="cart-right cart-item">
             <div class="right-one" @click="addToCart">
                 <p>加入购物车</p>
             </div>
             <div class="right-two" >
                 <p>立即购买</p>
             </div>
         </div>
    </div>
</template>

<script>
    export default {
        name: "DetailButtomCart",
        methods:{
            addToCart(){//发出购物车事件
                this.$emit('addToCart')
            },

        }
    }
</script>

<style scoped>
.bottom-cart{
    display: flex;
    text-align: center;
}
.cart-item{
    flex: 1;
}
    .cart-left{
        display: flex;
        justify-content: space-around;
        font-size: 15px;
        background: #fff;
    }
    .cart-left-item{
        flex: 1;
    }
    .icon{
        display: block;
        margin: 6px auto 3px;
        width: 22px;
        height: 22px;
        background: url("../../assets/img/detail_bottom.png") 0 0/100%;
    }
    .services {
         background-position:0 -54px;
    }
    .shop {
         background-position:0 -98px;
    }
    .cart-right{
        display: flex;
    }
    .right-one{
        background: yellow;
        flex: 1.2;
    }
    .right-two{
        background: palevioletred;
        flex: 1;
    }
</style>