<template>
  <div class="con-p-20-15 container">
    <cl-header title="意见反馈">
      <span slot="right" v-hammer:tap="submit" class="submit-btn">提交</span>
    </cl-header>
    <div class="feedback-q">
      <edit-div v-model="text"></edit-div>
    </div>
    <div class="feedback-link" @click="()=>{this.$router.push('/feedback/list')}">
      <span class="has-info">反馈列表</span>
    </div>
  </div>
</template>

<script>
import clHeader from "../../components/common/clHeader";
import clCell from "../../components/common/cell/clCell";
import editDiv from "../../components/editdiv/editDiv";
export default {
  components: {
    clHeader,
    clCell,
    editDiv
  },
  data() {
    return {
      text: "请输入您的建议"
    };
  },
  methods: {
    submit() {
      console.log(this.text);
    }
  }
};
</script>

<style lang="less" scoped>
.feedback-link {
  position: fixed;
  bottom: 30px;
  width: 100%;
  left: 0;
  font-size: 14px;
  color: @sec_color;
  text-align: center;
  .has-info {
    position: relative;
    &::after {
      position: absolute;
      content: "";
      display: block;
      .square(4px);
      background-color: red;
      border-radius: 50%;
      top: -4px;
      right: -4px;
    }
  }
}
.feedback-q {
  margin-top: 30px;
}
.submit-btn {
  color: @main_color;
}
</style>