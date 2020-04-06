<template>
    <div class="tab-bar-item" @click="changPage">
        <div v-if="!isActive"><slot  name="item-icon"></slot></div>
        <div v-else><slot  name="item-icon-active"></slot></div>
        <div :class="{ active:isActive}"><slot name="item-text" ></slot></div>

    </div>

</template>

<script>
    export default {
        name: "TarBarItem",
        data(){
            return {
                // isActive:true
            }
        },
        computed:{
            isActive(){//计算属性动态改变颜色
                return this.$route.path.indexOf(this.path)!==-1
            }
        },
        props:{
            path:String
        },
        methods:{

            changPage(){
                if(this.$route.path.indexOf(this.path)!==-1){//判断当前路由是否处于活跃状态，防止多次点击出错
                    return
                }else{
                    //切换路由
                    this.$router.replace(this.path)
                }


            }
        }
    }
</script>

<style scoped>
    .tab-bar-item{
        flex: 1;
        text-align: center;
        font-size: 14px;
    }
    .tab-bar-item img{
        height: 24px;
        width: 24px;
    }
    .active{
        color: red;
    }
</style>