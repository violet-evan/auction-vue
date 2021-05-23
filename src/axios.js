import axios from "axios";
import router from "./router";
import store from "./store";
import Element from 'element-ui'

// 前置拦截
axios.interceptors.request.use(request => {
    //
    return request;
});

// 后置拦截
axios.interceptors.response.use(response => {

    let res = response.data;
    console.log("===============")
    console.log(res);

    if (res.code === 1) {
        // 成功才能返回结果
        return response;
    } else {

        console.log("===============")
        console.log(response);

        // 请求失败 显示原因
        Element.Message({
            showClose: true,
            message: res.msg,
            type: 'error'
        });

        // 阻止下面的代码运行
        return Promise.reject(res.msg);
    }

}, error => {
    console.log("失败...")
    console.log(error)
    console.log(error.response)

    if (error.response.data) {
        console.log(error.response.data)
        let err = error.response.data
        Element.Message({
            showClose: true,
            message: err.msg,
            type: 'error'
        });
    }

    // 阻止下面的代码运行
    return Promise.reject(error.response.data);
});