<template>
  <div>
    <!-- 头部导航 -->
    <Header></Header>

    <!-- 内容区域 -->
    <article class="content">
      <el-divider></el-divider>

<!--      <div class="seach-box"></div>-->

      <el-container class="box">
        <el-container>
          <el-main>
            <el-row :gutter="20">
              <el-col :span="16" :offset="2">
<!--                <el-col :span="12">-->
<!--                  <el-menu default-active="1" class="el-menu-demo border-none" mode="horizontal">-->
<!--                    <el-menu-item index="1">最新</el-menu-item>-->
<!--                    <el-menu-item index="2">热门</el-menu-item>-->
<!--                    <el-menu-item index="3">发现</el-menu-item>-->
<!--                  </el-menu>-->
<!--                </el-col>-->
                <el-col :span="12" style="margin-top: 10px;">
                  <el-input
                      class="seach-input"
                      placeholder="请输入内容"
                      v-model="input"
                      clearable>
                  </el-input>
                  <el-button class="seach-btn" plain icon="el-icon-search" @click="getSearch()"></el-button>

                </el-col>

              </el-col>
            </el-row>
          </el-main>
        </el-container>
        <el-aside width="5%"></el-aside>
      </el-container>

      <!-- 没有数据显示的内容 -->
      <el-col v-show="list.data[0].id === 0" class="blank-card">暂无数据</el-col>

      <el-container class="box">
        <el-container>
          <el-main>

            <el-row>

              <el-col v-show="list.data[0].id > 0" :span="10" v-for="(item, index) in list.data" :offset="2">

                <!-- 卡片 -->
                <el-card class="box-card">
                  <!-- 卡片的标题 -->
                  <div slot="header" class="clearfix card-header">
                    <span class="card-header-left">{{ item.releaserName }} {{ item.releaseTime }}发布</span>
                    <span class="card-header-right">{{ item.total }} 人参与</span>
                  </div>

                  <!-- 卡片的内容 -->
                  <div class="card-content">
                    <div class="title">{{ item.title }}</div>
                    <div class="status">￥{{ item.rewardAmount }}元 发布中</div>
                    <div class="descry">{{ item.request }}</div>
                  </div>

                  <!-- 卡片的底部 -->
                  <div class="clearfix card-footer">
                    <el-link :underline="false">{{ item.solution }} </el-link>
                    <el-button style="float: right;" type="primary" plain @click="goDetail(item)">操作按钮</el-button>

                  </div>
                </el-card>

              </el-col>
            </el-row>

            <el-pagination
                background
                layout="prev, pager, next"
                :current-page="list.current"
                :page-size="list.max"
                :total="list.total">
            </el-pagination>

          </el-main>
        </el-container>

        <el-aside width="5%"></el-aside>
      </el-container>

<!--      <el-footer>Footer</el-footer>-->

    </article>

    <Footer></Footer>

  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "index",
  components: {
    Header,
    Footer
  },

  data() {
    return {
      input: '',
      list: {
        // 当前页面
        current: 1,
        // 一共多少页
        total: 5,
        // 每页最多显示多少条数据
        max: 5,
        // 数据
        data: [
          {
            id: 0,
            // title
            title: '',
            // 项目具体要求
            request: '',
            // 期望期限
            ddl: '',
            // 悬赏金额
            rewardAmount: 0,
            // 解决方式
            solution: '',
            email: '',
            // 发布人
            releaseId: 0,
            // 发布人
            releaserName: '',
            // 发布时间
            releaseTime: '',
            // 项目是否确认最后的接取人状态(默认是0未确认
            taker_status: 0,
            // 多少个人竞拍
            total: 0,
            // 订单状态 (默认为0未完成)
            status: 0,
          }
        ],

      },
      currentDate: new Date()
    }
  },

  mounted() {

    // 渲染数据
    this.loadData();


  },

  methods: {

    getSearch() {
      console.log("获取搜索数据的方法");
    },

    // 点击按钮触发的方法
    goDetail(item) {
      console.log("去详情页面")
      console.log(item)

      // 跳转详情页面
      this.$router.push("/detail");
    },

    // 加载数据的方法
    loadData() {
      const data = this.getData();
      console.log(data);
      // 在拿到数据并且有内容的情况下才能进行操作
      if (data.code === 1 && data.data.length > 0) {
        // 加载数据
        this.list.data = data.data;
        this.list.total = data.data.length;
        this.list.max = 2;
      }
    },

    // 模拟从后台拿到数据
    getData() {

      console.log(this.$store.getters["t_project/getData"]);
      // 返回 store 所模拟的后台数据
      return this.$store.getters["t_project/getData"];
    },

    // 搜索
    seach(str) {
      let data = this.$store.getters["t_project/distributeBySearch"]({ infomation: str });
    }

  },

}
</script>

<style scoped>

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  /*width: 480px;*/
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}


.border { border: 1px solid #e6e6e6; }
.border-none { border: none !important; }
.seach-input { width: 80%; }
.seach-btn { width: 15%; margin-left: 1%; text-align: center; }
.blank-card { width: 960px; height: 100px; font-size: 25px; font-weight: bolder; text-align: center; margin: 0 auto; }

.content {  }
.box { margin-left: 20px; margin-right: 50px; }
.card-header { height: 30px; }
.card-header-left, .card-header-right { width: 70%; height: 30px; line-height: 30px; color: #909399; display: inline-block; }
.card-header-left { font-size: 14px; font-style: italic; }
.card-header-right { width: 29%; text-align: right; color: #000; }

.card-content { height: 120px; }
.card-content .title { height: 30px; margin: 5px 0; font-size: 16px; font-weight: 700; }
.card-content .title:hover { color: #ff6900; cursor: pointer; }
.card-content .status { font-size: 20px; font-weight: 700; color: #ff6900; }
.card-content .descry { height: 60px; margin: 5px 0; color: #909399; }

.card-footer { margin-top: 15px; }
.card-footer a { float: left; height: 40px; }
.el-pagination { padding-top: 20px; padding-bottom: 20px; margin: 40px; text-align: right; }
.el-row .el-col:nth-child(n + 3) { margin-top: 5%; }

</style>