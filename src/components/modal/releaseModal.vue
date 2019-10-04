<template>
  <modal-layout
    :ph="ph"
    :visible="visible"
    :onclose="onclose"
    title="请输入交易密码"
    desc="释放体力"
    :onfinish="sendRelease"
  >
    <detail-item title="兑换体力(USDT)" :num="ph"></detail-item>
    <detail-item title="提现手续费(USDT)" num="5"></detail-item>
    <detail-item title="到账数量(USDT)" :num="ph-5"></detail-item>
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
    sendRelease() {
      console.log("send release");
    }
  }
};
</script>

<style lang="less" scoped>
</style>