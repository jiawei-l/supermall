<template>
    <div class="count-number">
        <div class="select-all">
            <select-button class="logo" :is-select="isSelectAll" @click.native="changeSelectAll"></select-button>
            <span>全选</span>
        </div>
        <div class="total-money">
            合计：￥{{totalMoney}}
        </div>
        <div class="calculate" @click="pay">
            <span>去计算{{number}}</span>
        </div>

    </div>
</template>

<script>
    import SelectButton from './SelectButton'
    export default {
        name: "CountNumber",
        components:{
            SelectButton
        },
        computed:{
            totalMoney(){
                return this.$store.state.cartList.filter((item)=>{
                    return item.isSelect
                }).reduce((preValue,item)=>{
                    return preValue + item.price * item.count
                },0)

            },
            number(){
               return this.$store.state.cartList.filter(item=>item.isSelect).length
            },
            isSelectAll(){
                if(this.$store.state.cartList.length ===0)
                    return false
                //  1、  查找是否有没被选中的，如果有，即可返回，中断查找
               return  !this.$store.getters.cartList.find(item => !item.isSelect)
            //    2、遍历查找
            //     for(let item of this.$store.getters.cartList){
            //         if(!item.isSelect){
            //             return false
            //         }
            //         return true
            //     }

            },
            IfHaveSelectProduct(){//用于后面结算时，查询是否选择了要结算的商品
                return  !this.$store.getters.cartList.find(item => item.isSelect)
            }


        },
        methods:{
            changeSelectAll(){//用按钮控制全选
                if(this.isSelectAll){ //全部已经选中，修改为全部不选
                    this.$store.state.cartList.forEach(item=>item.isSelect=false)
                }
                else{
                    this.$store.state.cartList.forEach(item=>item.isSelect=true)
                }

            },
            pay(){
                if(this.IfHaveSelectProduct){
                    this.$toast.show('请选择要购买的商品',2000)
                }

            }
        }
    }
</script>

<style scoped>
.count-number{
    height: 40px;
    position: absolute;
    bottom: 44px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ccc;
}
    .select-all{
        padding-left: 20px;

        display: flex;
        align-items: center;
    }
    .logo{
        text-align: left;
        margin-top: 20px;
    }
    .total-money{
        flex: 1;
        text-align: center;

    }
    .calculate{
        flex: 0.7;
        background: red;
        height: 40px;
        text-align: center;
        line-height: 40px;
    }


</style>