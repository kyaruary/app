<template>
  <modal-layout :visible="visible" :onclose="onclose" title="请输入交易密码" :onfinish="sendRelease">
    <detail-item></detail-item>
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
      type: Number | String,
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