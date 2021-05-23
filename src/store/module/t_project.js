const module = {
    namespaced:true,  // 命名空间
    state :{
        data: {
            "code": 1,
            "msg": "查询成功",
            "data": [
                {
                    "id": 1,
                    "title": "ppt",
                    "request": "做一个有关党史的ppt",
                    "ddl": "2021-06-16",
                    "rewardAmount": 1000,
                    "solution": "招标",
                    "email": "zhangsan@163.com",
                    "releaseId": 1,
                    "releaseTime": "2021-05-17 14:30:20",
                    "status": 0,
                    "total": 0
                },
                {
                    "id": 2,
                    "title": "ppt",
                    "request": "做一个奥特曼的泥塑",
                    "ddl": "2021-07-21",
                    "rewardAmount": 1000,
                    "solution": "比稿",
                    "email": "xiaoqiuzzz233@163.com",
                    "releaseId": 1,
                    "releaseTime": "2021-05-17 14:44:02",
                    "status": 0,
                    "total": 0
                },
                {
                    "id": 3,
                    "title": "ppt",
                    "request": "做一个年终总结的ppt",
                    "ddl": "2021-07-05",
                    "rewardAmount": 500,
                    "solution": "比稿",
                    "email": "xiaoqiuzzz233@163.com",
                    "releaseId": 2,
                    "releaseTime": "2021-05-17 15:17:38",
                    "status": 0,
                    "total": 0
                },
                {
                    "id": 4,
                    "title": "ppt",
                    "request": "做一个小猪佩奇的模型",
                    "ddl": "2021-07-05",
                    "rewardAmount": 500,
                    "solution": "比稿",
                    "email": "zs123@163.com",
                    "releaseId": 2,
                    "releaseTime": "2021-05-17 15:51:03",
                    "status": 0,
                    "total": 0
                },
                {
                    "id": 5,
                    "title": "ppt",
                    "request": "做一个年终总结的ppt",
                    "ddl": "2021-05-12",
                    "rewardAmount": 200,
                    "solution": "比稿",
                    "email": "xiaoqiuzzz233@163.com",
                    "releaseId": 3,
                    "releaseTime": "2021-05-18 20:28:02",
                    "status": 0,
                    "total": 0
                }
            ]
        }
    },

    mutations:{
        hide(state){
            state.isTabbarShow=false
        },
        show(state){
            state.isTabbarShow=true
        },
    },

    actions:{

    }
}

export default module