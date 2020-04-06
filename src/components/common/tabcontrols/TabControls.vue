<template>
    <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in title" :class="{active:index===currentIndex}"
    @click="itemIndex(index)">
        <span>{{item}}</span>
    </div>
    </div>
</template>

<script>
    export default {
        name: "TabControls",
        props:{
            title:{
                type:Array,
                defaults(){
                    return []
                }
            }
        },
        data(){
            return {
                currentIndex:0
            }
        },
        methods:{
            itemIndex(index){
                this.currentIndex=index
                this.$emit('tab',index)//将数据传出去，根据index获取type
            }
        }

    }
</script>

<style scoped>
.tab-control{
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    text-align: center;
    height: 40px;
    line-height: 40px;
}

    .tab-bar-item{
        flex: 1;

    }

    .active{
        color: rebeccapurple;
    }
    .active span{
        border-bottom: 3px solid rebeccapurple;

    }
</style>