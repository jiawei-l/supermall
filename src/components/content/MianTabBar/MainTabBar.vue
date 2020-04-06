<template>
    <tar-bar>
        <TarBarItem path="/home">
            <img slot="item-icon" src="~assets/img/home.png" alt="">
            <img slot="item-icon-active" src="~assets/img/home-active.png" alt="">

            <div slot="item-text">首页</div>
        </TarBarItem>
        <TarBarItem path="/category">
            <img slot="item-icon" src="~assets/img/category.png" alt="">
            <img slot="item-icon-active" src="~assets/img/category-active.png" alt="">
            <div slot="item-text">分类</div>
        </TarBarItem >
        <TarBarItem path="/cart">
            <img slot="item-icon" src="~assets/img/cart.png" alt="">
            <img slot="item-icon-active" src="~assets/img/cart-active.png" alt="">
            <div slot="item-text">购物车</div>
        </TarBarItem>
        <TarBarItem path="/profile">
            <img slot="item-icon" src="~assets/img/me.png" alt="">
            <img slot="item-icon-active" src="~assets/img/me-active.png" alt="">
            <div slot="item-text">我的</div>
        </TarBarItem>

    </tar-bar>
</template>

<script>
    import TarBar from 'components/common/tarbar/TarBar'
    import TarBarItem from 'components/common/tarbar/TarBarItem'
    export default {
        name: "MainTabBar",
        components:{
            TarBar,
            TarBarItem
        }
    }
</script>

<style scoped>

</style>