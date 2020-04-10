<template>
    <div class="menu">
    <scroll class="content">
        <div class="menu-list">
            <div class="menu-list-item" v-for="(item,index) in category"
                 :class="{active: index===currentIndex}" :key="index" @click="selectItem(index)">{{item.title}}</div>
        </div>

    </scroll>
    </div>

</template>

<script>
    import scroll from 'components/common/scroll/Scroll'
    export default {
        name: "Menu",
        data(){
            return {
                currentIndex:0
            }
        },
        props:{
            category:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        components:{
            scroll
        },
        methods:{
            selectItem(index){
                this.currentIndex=index
                this.$emit('SelectItem',index)//将事件传给父组件，监听点击事件
            }
        }
    }
</script>

<style scoped>
    .menu{
        height: 100vh;
        background-color: #f6f6f6;
        width: 100px;
        box-sizing: border-box;
    }
    .content{

        position: relative;

        height: calc(100% - 44px - 49px);
        overflow: hidden;

    }
    .menu-list-item {
        height: 45px;
        line-height: 45px;
        text-align: center;
        font-size: 14px;
    }

    .menu-list-item.active {
        font-weight: 700;
        color: red;
        background-color: #fff;
        border-left: 3px solid red;
    }
</style>