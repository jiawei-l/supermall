<template>
    <div class="Profile">
        <nav-bar class="title">
            <div slot="center">个人中心</div>
        </nav-bar>
<!--        <user-message></user-message>-->
        <list-view :list-data="orderList"></list-view>
    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import ListView from './ListView'

    export default {
        name: "Profile",
        data(){
            return {
                active:'red',
                orderList: [
                    {icon: '#order', iconColor: '#ff8198', info: '我的消息'},
                    {icon: '#point', iconColor: '#fc7b53', info: '积分商城'},
                    {icon: '#vip', iconColor: '#ffc636', info: '会员卡'},
                ],
            }
        },
        components:{
            NavBar,
            ListView
        }
    }
</script>

<style scoped>
.title{
    background: rebeccapurple;
    color: white;
}
</style>