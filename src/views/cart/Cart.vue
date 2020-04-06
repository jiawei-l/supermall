<template>
   <div class="cart">
       <NavBar class="cart-bar">
           <div slot="center" class="title">
               <div>购物车({{cartLength}})</div>
           </div>
       </NavBar>

       <cart-list :cart-list="cartLists" class="cart-list"></cart-list>
       <count-number></count-number>

   </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import CartList from './CartList'
    import CountNumber from './CountNumber'


    export default {
        name: "Cart",
        components:{
            NavBar,
            CartList,
            CountNumber

        },
        computed:{
            cartLength(){
                return this.$store.getters.cartCount
            },
            cartLists() {
                return this.$store.getters.cartList

            },
        },


    }

</script>

<style scoped>
    .cart{
        height: 100vh;
    }
.cart-bar{
    background: palevioletred;
    color: white;
    font-size: 20px;
    position: relative;
    z-index: 10;

}

</style>