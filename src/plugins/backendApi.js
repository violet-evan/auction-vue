/*
 * 后台接口
 */
let apiHost = 'api/';

// 后台请求路径
let apis = {
    // 测试
    test: 'user/test',
    // 登录
    login: 'user/login',
    // 注册
    register: 'user/register',
    // 给邮箱发送验证码
    sendVerification: 'reset/sendByUser',

};

for (let i in apis) {
    apis[i] = apiHost + apis[i]
}

export default apis;