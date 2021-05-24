// 主页的数据
const module = {
    namespaced:true,  // 命名空间
    state : {
        // 模拟从后台拿到的数据
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
                    "total": 0,
                    "releaserName": "lisi"
                },
                {
                    "id": 2,
                    "title": "做一个泥塑",
                    "request": "做一个奥特曼的泥塑",
                    "ddl": "2021-07-21",
                    "rewardAmount": 1000,
                    "solution": "比稿",
                    "email": "xiaoqiuzzz233@163.com",
                    "releaseId": 1,
                    "releaseTime": "2021-05-17 14:44:02",
                    "status": 0,
                    "total": 0,
                    "releaserName": "zhangsan"
                },
                {
                    "id": 3,
                    "title": "做一个ppt",
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
                    "title": "做一个模型",
                    "request": "做一个小猪佩奇的模型",
                    "ddl": "2021-07-05",
                    "rewardAmount": 500,
                    "solution": "比稿",
                    "email": "zs123@163.com",
                    "releaseId": 2,
                    "releaseTime": "2021-05-17 15:51:03",
                    "status": 0,
                    "total": 0,
                    "releaserName": "王大炮"
                },
                {
                    "id": 5,
                    "title": "做一个ppt",
                    "request": "做一个月度总结的ppt",
                    "ddl": "2021-05-12",
                    "rewardAmount": 200,
                    "solution": "比稿",
                    "email": "xiaoqiuzzz233@163.com",
                    "releaseId": 3,
                    "releaseTime": "2021-05-18 20:28:02",
                    "status": 0,
                    "total": 0,
                    "releaserName": "上官天天"
                }
            ]
        },

        // 空返回结果
        nullData: {
            "code": 0,
            "msg": "传入信息为空",
            "data": null
        },

        // 搜索返回结果
        seachData: {
            "code": 0,
            "msg": "成功",
            "data": null
        }
    },

    // 设置数据
    mutations:{

    },

    // 获取数据
    getters: {
        // 查询所有
        getData: (state) => {
            return state.data;
        },
        // 模糊查询，也就是搜索啦
        // params 就是传过来的信息
        distributeBySearch: (state) => (params) => {
            console.log("params")
            console.log(params)

            // 传过来的参数名必须是 infomation 并且有内容
            if (params.infomation) {
                let data = state.data.data;
                let str = params.infomation;
                state.seachData.data = [];
                // 遍历数据
                for (let i = 0; i < data.length; i ++) {
                    // console.log(data[i].request)
                    // console.log(data[i].request.indexOf(str) > 0)
                    // 在要求里查找，indexOf 返回的结果是字符串出现的位置，从0开始
                    if (data[i].request.indexOf(str) >= 0) {
                        // 将匹配到的结果放入 temp 数组
                        state.seachData.data.push(data[i]);
                    }
                }
                // console.log("state.seachData.data");
                // console.log(state.seachData.data);
                // 返回搜索后的结果
                return state.seachData;
            }

            // 没有参数 返回空结果数据
            return state.nullData;
        }
    },

    actions:{

    }
}

export default module