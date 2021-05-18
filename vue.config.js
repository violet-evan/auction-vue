module.exports = {
    devServer: {
        open: true, // 是否自动弹出浏览器页面
        host: "localhost",
        port: '8095',
        proxy: {
            '/api': {
                target: 'http://localhost:8096', // 请求服务器根路径
                changeOrigin: true, // 是否跨域
                ws: true, // websocket
                pathRewrite: { // 重写路径: 将此路径进行跨域代理操作
                    '^/api': ''
                }
            }
        }
    }
}