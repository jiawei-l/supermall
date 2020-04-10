import {request} from "./resquest";
export function getCategoryData() {
    return request({
        url:'/category'
    })
}
//获取每个标题对应的子分类数据,
export function getSubCategoryData(maitKey) {
    //根据maitkey获取对应的数据
    return request({
        url:'/subcategory',
        params: {
            maitKey
        }
    })
}
//获取页面子分类数据的不同类型的数据'pop' 'sell' 'new'
export function getCategoryDetail(miniWallkey, type) {
    return request({
        url: '/subcategory/detail',
        params: {
            miniWallkey,
            type
        }
    })
}