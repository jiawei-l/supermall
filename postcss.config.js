module.exports={
    plugins:{
        autoprefixer:{
            viewportWidth: 375,//视窗的宽度，对应的是设计稿的宽度
            viewportHeight: 667,
            unitPrecision: 5,//指定px转换为视窗单位值的小数位数
            viewportUnit: 'vw',//指定转换成vw单位
            selectorBlackList: ['ignore','tab-bar','tab-bar-item'],//指定不需要转换的类
            minPixelValue: 1,//小于1px不转换
            mediaQuery: false//允许在媒体程序中转换px
        }
    }
}