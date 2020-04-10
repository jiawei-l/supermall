import axios from 'axios'

export function request(config,success,failure) {
    const instance=axios.create({
        //baseURL:'http://123.207.32.32:8000',
       baseURL:'http://152.136.185.210:8000/api/h8',
        timeout:5000
    })
    // instance(config).then(res=>{
    //     success(res)
    //     }
    // ).catch(res=>{
    //     failure(res)
    // })


    // new Promise((resolve,reject)=>{
    //     const instance=axios.create({
    //         baseURL:'http://123.207.32.32:8000',
    //         timeout:5000
    //     })
    //     instance(config).then(res=>{
    //         success(res)
    //         }
    //     ).catch(res=>{
    //         failure(res)
    //     })
    // })
    // //1、创建axios实例
    // const instance=axios.create({
    //             baseURL:'http://123.207.32.32:8000',
    //             timeout:5000
    //         })
    //
    //2、拦截器
    axios.interceptors.request.use(config=>{
        console.log(config);
        return config
    },error => {
        console.log(error);
    })

    // return instance(config)
    instance.interceptors.response.use(res=>{
        return res.data
    },error => {
        console.log(error);
    })
    return instance(config)

}