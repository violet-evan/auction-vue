<template>
  <canvas id="canvas" @click="draw()"></canvas>
</template>

<script>
export default {
  name: "Canvas",
  data() {
    return {
      // 生成的验证码
      code: ''
    }
  },

  mounted() {
    this.draw()
  },

  methods: {

    // 生成验证码
    draw() {
      console.log("生成验证码")

      let canvas = document.getElementById("canvas");//获取到canvas的对象，演员
      let context = canvas.getContext("2d");//获取到canvas画图的环境，演员表演的舞台

      let canvas_width = canvas.offsetWidth;
      let canvas_height = canvas.offsetHeight;
      canvas.width = canvas_width;
      canvas.height = canvas_height;

      let sCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
      let show_num = [];
      let aCode = sCode.split(",");
      let aLength = aCode.length; //获取到数组的长度

      // 从数组里随机拿到四个字符
      for (let i = 0; i <= 3; i++) {
        const j = Math.floor(Math.random() * aLength);//获取到随机的索引值
        const deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
        const txt = aCode[j];//得到随机的一个内容
        show_num[i] = txt.toLowerCase();

        const x = 10 + i * 20;//文字在canvas上的x坐标
        const y = 20 + Math.random() * 8;//文字在canvas上的y坐标
        context.font = "bold 23px 微软雅黑";

        context.translate(x, y);
        context.rotate(deg);

        context.fillStyle = this.randomColor();
        context.fillText(txt, 0, 0);

        context.rotate(-deg);
        context.translate(-x, -y);
      }

      //验证码上显示线条
      for (let i = 0; i <= 5; i++) {
        context.strokeStyle = this.randomColor();
        context.beginPath();
        context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.stroke();
      }

      //验证码上显示小点
      for (let i = 0; i <= 30; i++) {
        context.strokeStyle = this.randomColor();
        context.beginPath();
        let x = Math.random() * canvas_width;
        let y = Math.random() * canvas_height;
        context.moveTo(x, y);
        context.lineTo(x + 1, y + 1);
        context.stroke();
      }

      console.log("结束生成")
      console.log(show_num)
      this.code = show_num.join("");

      // 往父组件发送生成的验证码
      this.$emit('code', this.code)

    },

    //随机颜色值
    randomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return "rgb(" + r + "," + g + "," + b + ")";
    }

  }
}
</script>

<style scoped>
  #canvas { width: 100%; height: 100%;}
</style>