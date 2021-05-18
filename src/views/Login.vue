<template>
  <div>

    <el-container>
      <el-header>
        <h2>项目分配系统 - 登录</h2>
      </el-header>
      <el-main>

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="账号" prop="username">
            <el-input v-model="ruleForm.username" prefix-icon="el-icon-user" clearable></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" prefix-icon="el-icon-lock" show-password></el-input>
          </el-form-item>

          <el-form-item label="验证码" prop="code">
            <el-input v-model="ruleForm.code" prefix-icon="el-icon-key">
              <template slot="append">
                <el-button slot="append">
                  <div class="canvas-box">
                    <!-- 用 v-on 来监听监听子组件的状态 -->
                    <Canvas v-on:code="drawValue"></Canvas>
                  </div>
                </el-button>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" style="width: 100%;">登录</el-button>
<!--            <el-button @click="resetForm('ruleForm')">重置</el-button>-->
          </el-form-item>

          <el-form-item class="text-right">
            <router-link to="/change">
              <el-link :underline="false" class="lableLink">忘记密码？</el-link>
            </router-link>

            <router-link to="/register">
              <el-link :underline="false" class="lableLink">免费注册</el-link>
            </router-link>
          </el-form-item>


        </el-form>

      </el-main>
    </el-container>



  </div>
</template>

<script>
import apis from "@/plugins/backendApi";
import Canvas from "@/components/Canvas";
import Element from "element-ui";

export default {
  name: "Login",
  components: {
    Canvas
  },

  data() {
    // 自定义校验规则
    // 验证码校验
    let checkCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error("请输入验证码"))
      } else if (this.code !== value) {
        if (this.code.toLowerCase() === value.toLowerCase()) {
          callback();
        } else callback(new Error("验证码输入不一致"));

      } else {
        callback()
      }
    };
    return {
      code: '',
      // 登录表单数据绑定对象
      ruleForm: {
        username: '',
        password: '',
        code: '',
      },
      // 表单验证规则对象
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ],
        code: [
          { required: true, trigger: 'blur', validator: checkCode }
        ],
      }

    }
  },

  created() {
  },

  mounted() {
    this.test();
  },

  methods: {
    // 测试
    test() {
      // console.log("测试接口数据")
      // this.$axios.post(apis.test, {
      //   username: 'test',
      //   password: '123'
      // }).then(res => {
      //   console.log("成功")
      //   console.log(res)
      //   console.log(res.request)
      // })
    },

    // 拿到生成的验证码, code 就是子组件传过来的值
    drawValue(code) {
      console.log("从 draw 里拿回来的验证码")
      console.log(code)

      // 清空上次的内容
      this.code = '';
      // 设置验证码
      this.code = code;
    },

    // 登录
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.code)
          console.log(this.ruleForm.code.toLowerCase())

          const _this = this;
          const code = this.ruleForm.code.toLowerCase();
          // 输入的验证码与显示的一致才能发起请求
          if (code === this.code) {
            // 执行登录操作
            // 登录
            this.$axios.post(apis.login, {
              username: _this.ruleForm.username,
              password: _this.ruleForm.password
            }).then( res => {
              console.log("成功");
              console.log(res);

              const data = res.data;
              console.log(data)

              // 返回的状态码是1说明成功了
              if (data.code === 1) {
                Element.Message({
                  showClose: true,
                  message: data.msg,
                  type: 'success'
                });
              }

              // 如果不是 1，axios 拦截器会自动拦截并显示失败原因

            });
          }

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },

    // 清空表单内容
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }


  }

}
</script>

<style scoped>
.el-header, .el-footer {
  /*background-color: #B3C0D1;*/
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
  /*background-color: #E9EEF3;*/
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

.logo { height: 60%; margin-top: 12px; }
.demo-ruleForm { max-width: 500px; margin: auto; }

.canvas-box { width: 100px; height: 30px;}
.text-right { text-align: right;}
a { text-decoration: none;}


</style>