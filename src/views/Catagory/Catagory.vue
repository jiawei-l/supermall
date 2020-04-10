<template>
    <div class="category">
        <nav-bar class="category-nav">
            <div slot="center">分类</div>
        </nav-bar>
        <div class="content">
            <Menu :category="category" @SelectItem="SelectItem"></Menu>
            <scroll class="right-content">
            <menu-content :subcategories="showSubcategory" ></menu-content>
                <tab-control :title="['综合','新品','销量']" @tab="tab"></tab-control>
                <Goods :goods="showCategoryDetail"></Goods>
            </scroll>
        </div>


    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import scroll from 'components/common/scroll/Scroll'
    import TabControl from 'components/common/tabcontrols/TabControls'
    import Goods from 'components/content/goods/Goods'



    import Menu from './Menu'
    import MenuContent from './MenuContent'
    import {getCategoryData,getSubCategoryData,getCategoryDetail} from "network/category";


    export default {
        name: "Catagory",
        data(){
            return {
                currentIndex:-1,
                category:[],
                subCategory:{

                },
                currentType:'pop'
            }
        },
        components:{
            NavBar,
            Menu,
            MenuContent,
            scroll,
            TabControl,
            Goods
        },
        created() {
            this._getCategoryData()
        },
        computed:{
                showSubcategory() {
                    if (this.currentIndex === -1) return {}
                    return  this.subCategory[this.currentIndex].subcategories
                },
            showCategoryDetail() {
                if (this.currentIndex === -1) return []
                return this.subCategory[this.currentIndex].categoryDetail[this.currentType]
            }
        },
        methods: {
            _getCategoryData() {
                getCategoryData().then(res => {
                    console.log(res);
                    //1、获取分类的数据
                    this.category = res.data.category.list
                    //    2、初始化分类的数据
                    for (let i = 0; i < this.category.length; i++) {
                        this.subCategory[i] = {
                            subcategories: {},
                            categoryDetail: {
                                'pop': [],
                                'new': [],
                                'sell': []
                            }
                        }
                    }
                    this._getSubCategoryData(0)//传第0个数据,注意调用的位置，先获得整体数据之后再获取子数据
                })
            },
            _getSubCategoryData(index) {
                this.currentIndex = index
                const mailKey = this.category[index].maitKey;//获取maitkey
                //将对应maitkey的数据存储到subCategory
                getSubCategoryData(mailKey).then(res => {
                    this.subCategory[index].subcategories = res.data
                    this.subCategory = {...this.subCategory}
                    this._getCategoryDetail('pop')
                    this._getCategoryDetail('sell')
                    this._getCategoryDetail('new')
                })

            },
            _getCategoryDetail(type) {//获取不同类型的数据
                //获取对应的miniWallkey
                const minikey = this.category[this.currentIndex].miniWallkey
                getCategoryDetail(minikey, type).then(res => {
                    // 3.将获取的数据保存下来
                    this.subCategory[this.currentIndex].categoryDetail[type] = res
                    this.subCategory = {...this.subCategory}

                })


            },
            SelectItem(index) {
                this._getSubCategoryData(index) //从子组件获取index 调用获取子分类数据的函数
            },
            /*
           事件监听
            */
            tab(index) {
                switch (index) {
                    case 0:
                        this.currentType = 'pop'
                        break
                    case 1:
                        this.currentType = 'sell'
                        break
                    case 2:
                        this.currentType = 'new'
                        break

                }


            },
        }
    }
</script>

<style scoped>
    .category{
        height: 100vh;
    }
.category-nav{
    background: rebeccapurple;
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
}
.content{
    display: flex;
      position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden;

}
    .right-content{
        flex: 1;
        height: 100%;
    }
</style>