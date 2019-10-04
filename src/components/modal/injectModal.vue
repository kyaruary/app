<template>
  <modal-layout
    :ph="ph"
    :visible="visible"
    :onclose="onclose"
    title="请输入交易密码"
    desc="注入体力"
    :onfinish="sendInject"
  >
    <detail-item title="兑换体力（VBM）" :num="ph"></detail-item>
  </modal-layout>
</template>

<script>
import modalLayout from "./layout";
import detailItem from "../common/passwordMessage/detailItem";
export default {
  components: {
    modalLayout,
    detailItem
  },
  props: {
    ph: {
      type: Number,
      default: 0
    },
    visible: {
      type: Boolean,
      default: false
    },
    onclose: {
      type: Function,
      default() {
        return () => false;
      }
    }
  },
  methods: {
    sendInject(pwd) {
      console.log("发送inject", pwd);
      this.onclose ? this.onclose() : false;
    }
  }
};
</script>

<style lang="less" scoped>
</style>