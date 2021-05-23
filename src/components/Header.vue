<template>
  <header id="header">

    <!-- 导航菜单 -->
    <el-menu
        :default-active="this.$route.path"
        :router="true"
        class="el-menu-demo navbox"
        mode="horizontal"
        @select="handleSelect"
        background-color="#1C2327"
        text-color="#fff"
        active-text-color="#00c1de">
      <el-menu-item class="logo">项目分配系统</el-menu-item>
      <div class="block"></div>
      <el-menu-item index="/index"> 网站首页 </el-menu-item>

      <!-- 内容 -->
      <el-submenu :index="items.index" v-for="items in list">
        <template slot="title">{{ items.title }}</template>
        <el-menu-item v-for=" (item, key) in items.data" :key="key" :index="item.path">
          {{ item.text }}
        </el-menu-item>
      </el-submenu>

      <el-menu-item index="/">账户管理</el-menu-item>
      <el-menu-item index="/">关于我</el-menu-item>
    </el-menu>

  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      // 导航内容
      list: [
        {
          title: '项目大厅', name: 'projectHall', index: '2',
          data: [
            { text: '前端项目', path: '/' },
            { text: '后端项目', path: '/' },
            { text: '其他项目', path: '/' },
          ]
        },
        {
          title: '竞标大厅', name: 'biddingHall', index: '3',
          data: [
            { text: '我的竞标', path: '/' },
            { text: '竞标项目', path: '/' },
          ]
        },
        {
          title: '我的项目', name: 'myProject', index: '4',
          data: [
            { text: '发布的项目', path: '/' },
            { text: '接取的项目', path: '/' },
          ]
        },
      ]


    };
  },

  created() {
  },

  mounted() {
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }

}
</script>

<style scoped>

* { margin: 0; padding: 0; }
ul li { list-style: none; }
a { text-decoration: none; cursor: pointer; color: #fff; }

#header { height: 55px; padding: 5px 0px; background-color: #1C2327; }
#header::before {
  background: #000 linear-gradient(to left, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  content: ""; height: 5px; position: absolute; top: 0; width: 100%; }

.navbox { width: 1200px; margin: 0 auto; overflow: hidden; }

.logo { margin-right: 60px; line-height: 50px; font-size: 22px; }
.logo a { color: #FFF; }
.logo img { margin-top: 14px; }

.block { width: 1px; height: 60px; float: left; margin-right: 300px; }

nav { float: right; height: 50px; line-height: 50px; text-align: center; margin-right: 100px; }

.el-menu-item:hover { color: #00c1de !important; }

</style>