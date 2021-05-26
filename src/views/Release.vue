<template>
  <div>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <!-- 项目标题 -->
    <el-form-item label="项目标题" prop="options">
      <el-select  v-model="ruleForm.options" placeholder="请选择" required>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <!-- 具体需求 -->
    <el-form-item label="具体需求" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <!-- 期望时限 -->
    <el-form-item label="期望时限" required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <!-- 预订金额 -->
    <el-form-item label="预订金额" prop="price" required>
      <el-input v-model="ruleForm.price"></el-input>
    </el-form-item>
    <!-- 解决方式 -->
    <el-form-item label="解决方式" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="招标"></el-radio>
      <el-radio label="比稿"></el-radio>
    </el-radio-group>
  </el-form-item>
    <!-- 联系方式 -->
    <el-form-item label="联系方式" prop="way" required class="way"> 
      <el-input v-model="ruleForm.way" placeholder="请输入你的邮箱" class="way-email"></el-input>
      <el-button type="primary" @click="sub()" class="beforetime" :class="styles">发送验证码</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          desc: '',
          way:'',
          price:'',
          optionsRule:'',
          options:''
        },
        rules: {
          name: [
            { required: true, message: '请说明具体需求', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          price:[
            { required: true, message: '请填写预订金额', trigger:'blur'}
          ],
          way:[
            { required: true, message: '请输入邮箱', trigger:'blur'}
          ],
          resource: [
            { required: true, message: '请选择一个解决方式', trigger: 'change' }
          ],
          optionsRule:[
            { type:'array', required: true, message: '请选择一个项目标题', trigger: 'change'}
          ],
        },
        options: [{
          value: '选项1',
          label: '法律'
        }, {
          value: '选项2',
          label: '国际服务'
        }, {
          value: '选项3',
          label: '专利'
        }, {
          value: '选项4',
          label: 'logo设计'
        }, {
          value: '选项5',
          label: '网站建设'
        },{
          value: '选项6',
          label: '小程序开发',
        },{
          value: '选项7',
          label: '电商服务',
        },{
          value: '选项8',
          label: '资产交易',
        },{
          value: '选项9',
          label: '金融服务',
        },{
          value: '选项10',
          label: '营销推广',
        },{
          value: '选项11',
          label: '动漫影音',
        },{
          value: '选项12',
          label: '工程建筑',
        },{
          value: '选项13',
          label: '游戏服务',
        },{
          value: '选项14',
          label: '办公服务',
        },{
          value: '选项15',
          label: '其他'
        }

        ],
        value: '',
        styles:'beforetime'
      }
    },
    methods: {
      sub(){
        console.log("dsfdsf");
        this.styles="aftertime"
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

    },

  }
</script>
<style scoped>
/* 点击之前的样式 */
.beforetime{
  width:20%;
  background-color: #66b1ff;
}

/* 点击之后的样式 */
.way .aftertime{
  width:20%;
  background-color: gray;
  border:1px solid gray;
  text-align:left;
}

.way{
  width:100%;
}
.way-email{
  width:80%;
}


</style>
