<template>
    <div class="detail">
      <nav-bar class="detail-nav">
          <div class="left" slot="left" @click="backhome">
              <img src="~assets/img/back.png" alt="">
          </div>
          <div class="title" slot="center" ref="nav">
              <div class="titleitem" v-for="(item,index) in title" @click="changetitleitem(index)"
              :class="{active:index===currentIndex}"
                   >{{item}}</div>
          </div>
      </nav-bar>
        <Scroll class="content" ref="scroll" @scroll="scrollPosition" :probeType="3">
            <DetailSwiper :topImage="topImage"></DetailSwiper>
            <DetailBaseInfo :detailData="detailData" ></DetailBaseInfo>
            <shop :shopMessage="shopMessage"></shop>
            <DetailInfo :detailInfo="detailInfo" @imageLoad="imageLoad"></DetailInfo>
            <DetailParams :goodsParams="goodsParams" ref="params"></DetailParams>
            <DetailComments :comments="comments" ref="comments"></DetailComments>
            <Goods :goods="recommend" ref="recommend"></Goods>
        </Scroll>
        <DetailButtonCart class="bottom-cart" @addToCart="addToCart"></DetailButtonCart>
    </div>

</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import Scroll from 'components/common/scroll/Scroll'

    import {request,DetailGoods,ShopMessage,GoodsParam} from "network/detail";
    import {getDetaildata} from "network/detail";
    import {getRecommand} from "network/detail";
    import DetailSwiper from './DetailSwiper'
    import DetailBaseInfo from './DetailBaseInfo'
    import shop from './ShopMessage'
    import DetailInfo from './DetailInfo'
    import DetailParams from './DetailParams'
    import DetailComments from './DetailComments'
    import DetailButtonCart from './DetailButtomCart'
    import {debounce} from "common/util";


    import Goods from 'components/content/goods/Goods'

    export default {
        name: "Detail",
        data(){
            return {
                id:null,
                title:['商品','参数','评论','推荐'],
                currentIndex:0,
                topImage:[],
                detailData:{},
                shopMessage:{},
                detailInfo:{},
                goodsParams:{},
                comments:{},
                recommend:[],
                themeIndexY:[],
                getThemeTop:null

            }
        },
        methods:{
            changetitleitem(index){
                //监听index,时页面滚动到相应的位置
                this.currentIndex=index
                this.$refs.scroll.scrollTo(0,-this.themeIndexY[index]+44,1000)
            },
            backhome(){
                this.$router.back()
            },
            imageLoad(){
                this.$refs.scroll.refresh()
               this.getThemeTop() //在这调用getThemeTop函数，防止多次请求数据

            },
            scrollPosition(position){
                const positionY=-position.y
                let length = this.themeIndexY.length;
                for (let i = 0; i < length; i++) {
                    let iPos = this.themeIndexY[i];
                    if (positionY >= iPos && positionY < this.themeIndexY[i+1]) {
                        if (this.currentIndex !== i) {
                            this.currentIndex = i;
                        }
                        break;
                    }

                }
            },
            addToCart(){
                //1、获取商品信息
                const product={}
                product.image=this.topImage[0]
                product.title=this.detailData.title
                product.desc=this.detailData.desc
                product.price=this.detailData.realPrice
                product.iid=this.iid
                product.isSelect=false
                // this.$store.dispatch('addProduct',product)
               // 2、将商品加入到购物车
                this.$store.dispatch('addProduct',product).then(res=>{
                    console.log(res);
                     this.$toast.show(res,2000)
                    //$toast是自己封装的一个组件
                //    弹出提示信息，显示加入购物车的情况
                })


            }
        },
        components:{
            NavBar,
            DetailSwiper,
            DetailBaseInfo,
            shop,
            Scroll,
            DetailInfo,
            DetailParams,
            DetailComments,
            Goods,
            DetailButtonCart
        },



        created() {
            this.iid=this.$route.params.iid
            //1、获取数据

            getDetaildata(this.iid).then(res=>{
                const data=res.result;
                this.topImage=data.itemInfo.topImages
                // console.log(res);

            //    获取轮播图下面的商品价格信息
                this.detailData=new DetailGoods(data.itemInfo,data.columns,data.shopInfo.services)
            //    获取商家的信息
                this.shopMessage=new ShopMessage(data.shopInfo)
            //    获取具体的图片详情信息
                this.detailInfo=data.detailInfo
            //    获取商品的参数信息
                this.goodsParams=new GoodsParam(data.itemParams.info,data.itemParams.rule)
            //    获取评论信息
                if(data.rate.cRate!==0){
                    this.comments=data.rate.list[0]
                    // console.log(this.comments);
                }


            //    获取详情页的每个title对应的offsetTop
                this.getThemeTop=debounce(()=>{
                    this.themeIndexY=[]
                    this.themeIndexY.push(0)
                    this.themeIndexY.push(this.$refs.params.$el.offsetTop)
                    this.themeIndexY.push(this.$refs.comments.$el.offsetTop)
                    this.themeIndexY.push(this.$refs.recommend.$el.offsetTop)
                    this.themeIndexY.push(Number.MAX_VALUE)//用于后面遍历的判断
                })

            })

        //    2、获取recommend数据
            getRecommand().then(res=>{
                this.recommend=res.data.list
            })
        },
        mounted() {
            const refresh=debounce(this.$refs.scroll.refresh,100)
            this.$bus.$on('detailimgload',()=>{
                // this.$refs.scroll.refresh()
                refresh()
            })

        },
    }
</script>

<style scoped>
    .detail{
        position: relative;
        z-index: 10;
        background: white;
        height: 100vh;
    }

.title{
    display: flex;
}
    .titleitem{
        flex: 1;
    }
    .active{
        color: rebeccapurple;
    }
    .left img{
        height: 44px;
    }
    .detail-nav{
        position: relative;
        z-index: 10;
        background: white;
    }
    .content{
        height: calc(100% - 44px - 49px);
    }
    .bottom-cart{
        position: fixed;
        background: rebeccapurple;
        height: 49px;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>