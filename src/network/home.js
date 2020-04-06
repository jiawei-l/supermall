import {request} from "./resquest";
export function getHomeMuidata() {
    return request({
        url:'/home/multidata'
    })
}
export function getHomeGood(type,page) {
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}