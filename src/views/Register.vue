<template>
  <div>

    <el-container>
      <el-header>
        <h2>项目分配系统 - 注册</h2>
      </el-header>
      <el-main>

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username" prefix-icon="el-icon-user" clearable></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" prefix-icon="el-icon-lock" show-password></el-input>
          </el-form-item>

          <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email" prefix-icon="el-icon-message" clearable></el-input>
          </el-form-item>

          <el-form-item label="验证码" prop="code">
            <el-input v-model="ruleForm.code" prefix-icon="el-icon-key">
              <template slot="append">
                <el-button slot="append">
                  <div class="canvas-box">
                    <!-- 用 v-on 来监听监听子组件的状态 -->
                    <Canvas v-show="true" v-on:code="drawValue"></Canvas>
                  </div>
                </el-button>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-button class="btn" type="primary" @click="submitForm('ruleForm')">注册</el-button>
          </el-form-item>

          <el-form-item>
            <el-button class="btn" @click="goBack()">返回登录</el-button>
          </el-form-item>



        </el-form>

      </el-main>
    </el-container>

  </div>
</template>

<script>
import Canvas from "@/components/Canvas";
import apis from "@/plugins/backendApi";
import Element from "element-ui";

export default {
  name: "Register",
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
        email: ''
      },
      // 表单验证规则对象
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
        ],
        // 验证 邮箱 是否合法
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请设置密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ],
        code: [
          { required: true, trigger: 'blur', validator: checkCode }
        ],
      }

    }
  },

  methods: {

    // 拿到生成的验证码, code 就是子组件传过来的值
    drawValue(code) {
      console.log("从 draw 里拿回来的验证码")
      console.log(code)

      // 清空上次的内容
      this.code = '';
      // 设置验证码
      this.code = code;
    },

    // 注册
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("验证通过")
          console.log(this.ruleForm)

          const _this = this;
          // 发送注册请求
          this.$axios.post(apis.register, this.ruleForm).then(res => {
            console.log("注册操作请求成功")
            console.log(res)

            const data = res.data;

            // 返回的状态码是1说明成功了
            if (data.code === 1) {
              Element.Message({
                showClose: true,
                message: data.msg,
                type: 'success'
              });
            }

            // 返回登录页面
            _this.$router.push("/login");
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },

    // 返回
    goBack() {
      this.$router.push('/login')
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
.btn { width: 100%;}

</style>