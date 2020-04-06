<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div  slot="center">购物街</div>
        </nav-bar>
        <Scroll class="content" ref="scroll" :pull-up-load="true" @pullingUp="loadmore">
            <Swiper>
                <SwiperItem v-for="item in banner">
                    <a :href="item.link">
                        <img :src="item.image" alt="">
                    </a>
                </SwiperItem>
            </Swiper>
            <Recommand :recommand="recommend"></Recommand>
            <Prevail ></Prevail>
            <TabControl :title="['流行','新款','精选']" class="tab-control" @tab="tab" ></TabControl>
            <Goods :goods="goods[currentType].list" ></Goods>
        </Scroll>


    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import {Swiper,SwiperItem} from 'components/common/swiper'
    import TabControl from 'components/common/tabcontrols/TabControls'
    import Goods from 'components/content/goods/Goods'
    import BackTop from 'components/content/backtop/BackTop'
    import Scroll from 'components/common/scroll/Scroll'
    import Recommand from './childrenHome/recommand'
    import Prevail from './childrenHome/prevail'

    import {getHomeMuidata,getHomeGood} from "network/home";
    import {debounce} from "common/util";

    export default {
        name: "Home",

        data(){ //保存接收到的数据
            return {
                // result:null
                banner:[],
                recommend:[],
                goods:{
                    'pop':{page:0,list:[]},
                    'new':{page:0,list:[]},
                    'sell':{page:0,list:[]},
                },
                currentType:'pop',
                saveY:0

            }
        },
        components:{
            NavBar,
            Swiper,
            SwiperItem,
            Recommand,
            Prevail,
            TabControl,
            Goods,
            Scroll,
            BackTop
        },
        methods: {
            /*
            网络请求数据
             */
            //1、请求多个数据
            getHomeMuidata(){
                getHomeMuidata().then(res=>{
                    // console.log(res);
                    // this.result=res
                    this.banner=res.data.banner.list;
                    this.recommend=res.data.recommend.list;
                })
            },
            //动态传入type
            getHomeGood(type){
                const page=this.goods[type].page+1;//获取对应type的page
                getHomeGood(type,1).then(res=>{
                    // console.log(res);
                    //将获取的数据添加到对应的list里
                    this.goods[type].list.push(...res.data.list)
                    this.goods[type].page+=1  //将对应的page加一，获取下一页数据
                    this.$refs.scroll.pullingUpFinish()
                })
            },


            /*
            事件监听
             */
            tab(index){
                switch (index) {
                    case 0:
                        this.currentType='pop'
                        break
                    case 1:
                        this.currentType='new'
                        break
                    case 2:
                        this.currentType='sell'
                        break

                }

            },
            loadmore(){
                // console.log('hhh');
                this.getHomeGood(this.currentType)//调用获取数据的函数
            }
        },
        //用来记录页面离开时的位置，用于点击返回时的定位
        activated(){
            this.$refs.scroll.scrollTo(0,this.saveY,300)//滚回相应的位置
            this.$refs.scroll.refresh()
        },
        deactivated(){
            this.saveY=this.$refs.scroll.getScrollY();
            console.log(this.saveY);
        },
        created() {
            //1、请求多个数据
            this.getHomeMuidata();
                this.getHomeGood('pop');
                this.getHomeGood('new');
                this.getHomeGood('sell');
                //    2、监听图片的加载完成

        },
        mounted() {
            const refresh=debounce(this.$refs.scroll.refresh,100)
            this.$bus.$on('homeimgload',()=>{
                // this.$refs.scroll.refresh()
                refresh()
            })
        },



    }
</script>

<style scoped>
    #home {
        height: 100vh;
        position: relative;
    }

.home-nav{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    color: aliceblue;
    background: rebeccapurple;
    z-index: 9;
}
    .tab-control{
        z-index: 9;
        position: sticky;
        top: 44px;
    }
    .content{
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
        overflow: hidden;
    }
</style>