<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Scroll from 'better-scroll'

    export default {
        name: "Scroll",
        data(){
          return {
              scroll:null
          }
        },
        props:{
            pullUpLoad: {
                type: Boolean,
                default: false
            },

            probeType: {
                type: Number,
                default: 0
            },
        },
        mounted() {

            this.scroll=new Scroll(this.$refs.wrapper,{
                pullUpLoad:this.pullUpLoad,
                click:true,
                probeType: this.probeType

            }),
        //    监听上拉事件
            this.scroll.on('pullingUp',()=>{
                // console.log('上拉加载更多');
                this.$emit('pullingUp')//发出事件
            })
            //监听滚动事件
            this.scroll.on('scroll', position => {
                this.$emit('scroll', position)
            })

        },
        methods:{

            //上拉事件
            pullingUpFinish(){
                this.scroll.finishPullUp()
            },
            // ScrollPosition(){
            //     this.scroll.scroll();
            // },
            //刷新
            refresh(){
                this.scroll && this.scroll.refresh()
            },
            //滚动到相应的位置
            scrollTo(x, y, time=300) {
                this.scroll.scrollTo(x, y, time)
            },
            getScrollY(){
                return this.scroll ? this.scroll.y:0
            }
        }
    }
</script>

<style scoped>

</style>