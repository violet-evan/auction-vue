<template>
  <div>
    <!-- 头部导航 -->
    <Header></Header>

    <article class="box">

      <el-card class="box-card">

        <!-- 卡片标题 -->
        <div slot="header" class="clearfix card-header">
          <span>需求内容</span>
        </div>

        <!-- 卡片内容 -->
        <div class="card-body">
          <div class="info">客户小**唱于 2020-03-06 09:34:00 发布该需求</div>

          <div class="title">
            <div class="title-left">需求标题</div>
            <div class="title-right">求生日祝福</div>
          </div>

          <div class="descry">
            <div class="descry-left">需求描述</div>
            <div class="descry-right"> 音频格式： 张雅茜（qian）生日快乐+生日祝福+我在xx（你的家乡）祝福你！
              最好用普通话可以加上自由发挥；以音频文件的格式发到我的邮箱</div>
          </div>

          <div class="title">
            <div class="title-left">需求类型</div>
            <div class="title-right">广告创意类文案</div>
          </div>

        </div>

        <!-- 按钮组 -->
        <el-row class="btns">
          <el-button type="primary" plain>参与交稿</el-button>

          <el-button type="primary">发布需求</el-button>
        </el-row>

      </el-card>

      <el-divider content-position="left" class="bottom-card-title">参与该需求的服务商（99）</el-divider>

      <!-- 底部的卡片 - 参与该需求的人 -->
      <el-card class="bottom-card">

        <el-container>
          <!-- 服务商的头像 -->
          <el-aside width="200px">
<!--            <img src="../assets/images/qq.png" alt="">-->
          </el-aside>
          <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
          </el-container>
        </el-container>

      </el-card>

    </article>

    <!-- 底部 -->
    <Footer></Footer>

  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "Detail",
  components: {
    Header, Footer
  },

  data() {
    return {

      // 这里放数据

    }
  },

  mounted() {
  },

  methods: {
    // 这里写方法
  }
}
</script>

<style scoped>

.box { margin-top: 50px; margin-left: 100px; margin-right: 50px; }
.card-header { font-size: 22px; font-weight: bolder; }

.card-body { width: 500px; overflow: hidden; }
.card-body .info { height: 40px; line-height: 40px; }
.card-body .title { height: 40px; line-height: 40px; }
.title .title-left, .title .title-right { width: 20%; display: inline-block; }
.title .title-right { width: 70%; margin-left: 10%; }

.descry { overflow: hidden; }
.descry .descry-left, .descry .descry-right { width: 20%; display: inline-block; float: left; }
.descry .descry-right { width: 70%; margin-left: 10%; }

.btns { height: 80px; margin-top: 20px; }
.btns button { width: 200px; height: 50px; font-size: 14px; }

/*底部的卡片*/
.bottom-card { margin-bottom: 50px; }
.bottom-card-title { margin-top: 40px; }
.bottom-card-title .el-divider__text { font-size: 20px; font-weight: bolder; }


.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}


</style>