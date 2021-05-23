<template>
  <footer>
    <div class="top"></div>

    <div class="box">
      <div class="qqbox">
        <img src="../assets/static/qq.png"><br><span class="myqq">我的QQ</span>
      </div>
      <div class="wxbox">
        <img src="../assets/static/wx.png"><br><span class="mywx">我的微信</span>
      </div>
      <div class="endnav">
        <p><b>站点声明：</b></p>
        <p>1、本站内容均为网友原创和自主上传，如有违反法律规定本站将会积极配合调查。请各位自觉守法!</p>
        <p>2、所有文章未经授权禁止转载、摘编、复制或建立镜像，如有违反，追究法律责任。举报邮箱：<a
            href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&amp;email=FyAjJiUvJCAlI1dmZjl0eHo" target="_blank">741283724@qq.com</a>
        </p>
        <p>Copyright © <a href="http://www.qqlyzn.com" target="_blank">www.qqlyzn.com</a> All Rights Reserved.
          备案号：<a href="http://www.beian.miit.gov.cn/" target="_blank" rel="nofollow">鄂ICP备18030241号-1</a></p>
      </div>
    </div>
  </footer>

</template>

<script>
export default {}
</script>

<style scoped>

footer {
  width: 100%;
  height: 220px;
  background-color: #373D41;

}

.top {
  width: 100%;
  height: 20px;
  background-color: #00C1DE;
}

.box {
  width: 1200px;
  /* height: 200px; */

  /* background-color: #373D41; */
}

.qqbox img {
  width: 100px;
  height: 100px;
}

.myqq {
  color: #73777A;
  margin-left: 20px;
  margin-top: 20px;

}

.mywx {
  color: #73777A;
  margin-left: 40px;
}

.wxbox img {
  width: 100px;
  height: 100px;
  margin-left: 20px;
}

.qqbox {
  float: left;
  margin-top: 20px;
  margin-left: 60px;
}

.wxbox {
  float: left;
  margin-top: 20px;

}

.endnav {
  float: left;
  height: 100px;
  width: 850px;
  margin-left: 50px;
}

.endnav p {
  color: #73777A;
}

.endnav a {
  color: #73777A;
  margin-top: -5px;
}

.endnav b {
  color: #00C1DE;
  font-size: 18px;
}


</style>