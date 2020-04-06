import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)
//1、创建store对象
const store=new Vuex.Store({
    state:{
        cartList:[]
    },
    mutations:{
        addCount(state,payload){
            payload.count++
        },
        addToCart(state,payload){
            state.cartList.push(payload)
        }
    },
    getters,
    actions:{
        addProduct(context,payload){
            return new Promise((resolve,reject)=>{
                const oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
                // 2.+1或者新添加
                if (oldProduct) {
                    context.commit('addCount',oldProduct)
                    resolve('商品数量加1')
                    console.log('444');
                } else {
                    payload.count = 1
                    payload.checked = true
                    resolve('添加新的商品')
                    context.commit('addToCart',payload)
                }
            })
            // const oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
            //     // 2.+1或者新添加
            //     if (oldProduct) {
            //         context.commit('addCount',oldProduct)
            //         console.log('444');
            //     } else {
            //         payload.count = 1
            //         payload.checked = true
            //         context.commit('addToCart',payload)
            //     }

        }
    }

})

//2、导出
export default store