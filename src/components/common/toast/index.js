import Toast from 'components/common/toast/Toast'

const obj={

}
obj.install=function (Vue) {
    console.log('1111');
    //1、创建一个组件构造器
    const toastContrustor= Vue.extend(Toast)
//    2、用new 的方式创建一个组件的对象
    const toast=new toastContrustor()
//    3、将组件的对象挂载到某一元素上面
    toast.$mount(document.createElement('div'))
//    4、toast.$el就是div
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast=toast
}
export default obj