<template>
  <modal-layout
    :ph="ph"
    :visible="visible"
    :onclose="onclose"
    title="请输入交易密码"
    desc="注入体力"
    :onfinish="sendInject"
    :loading="!sendAjax"
  >
    <detail-item title="兑换体力（VBM）" :num="ph"></detail-item>
  </modal-layout>
</template>

<script>
import modalLayout from "./layout";
import detailItem from "../common/passwordMessage/detailItem";
import { Indicator } from "mint-ui";
import { injectPay } from "../../service/pay";
export default {
  data() {
    return {
      sendAjax: false
    };
  },
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
    async sendInject(pwd) {
      this.onclose ? this.onclose() : false;
      Indicator.open({
        spinnerType: "triple-bounce"
      });
      const data = await injectPay(pwd, this.ph);
      if (data) {
        Indicator.close();
        this.onclose();
        this.$router.push("/success/inject?ph=" + this.ph);
      } else {
        this.onclose();
        Indicator.close();
      }
    }
  }
};
</script>

<style lang="less" scoped>
</style>