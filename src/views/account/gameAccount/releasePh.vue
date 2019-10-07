<template>
  <div class="container con-p-20-15">
    <cl-header title="释放体力"></cl-header>
    <div class="main-container">
      <cl-cell :height="30" title="释放地址" :gutter="10">
        <span slot="right" class="shadow-text">提币地址</span>
      </cl-cell>
      <cl-cell :gutter="20">
        <span slot="left" class="address-ipt">请输入或黏贴地址</span>
        <span slot="right">qrcode</span>
      </cl-cell>
      <cl-cell :height="30" title="释放数量" :gutter="10">
        <span slot="right" class="shadow-text">{{detail.ph}}体力</span>
      </cl-cell>
      <cl-cell :gutter="20">
        <span slot="left">≈</span>
        <span slot="right" class="show_text">{{detail.ph}}USDT</span>
      </cl-cell>
      <cl-cell :gutter="20">
        <span slot="left">释放手续费</span>
        <span slot="right" class="show_text">5 USDT</span>
      </cl-cell>
      <cl-cell>
        <span slot="left">到账数量</span>
        <span slot="right" class="show_text">{{detail.ph - 5}}USDT</span>
      </cl-cell>
    </div>
    <div class="sub-btn">
      <cl-button :width="130" :onclick="release">确认释放</cl-button>
    </div>
    <release-modal :visible="releaseVisible" :onclose="onclose" :ph="detail.ph"></release-modal>
  </div>
</template>

<script>
import clHeader from "../../../components/common/clHeader";
import clCell from "../../../components/common/cell/clCell";
import clButton from "../../../components/common/button/clButton";
import releaseModal from "../../../components/modal/releaseModal";
import { mapState } from "vuex";
export default {
  components: {
    clHeader,
    clCell,
    clButton,
    releaseModal
  },
  data() {
    return {
      releaseVisible: false
    };
  },
  methods: {
    release() {
      this.releaseVisible = true;
    },
    onclose() {
      this.releaseVisible = false;
    }
  },
  computed: {
    ...mapState(["bill"]),
    detail() {
      return this.bill.detail;
    }
  }
};
</script>

<style lang="less" scoped>
.main-container {
  margin-top: 20px;
}
.sub-btn {
  margin-top: 50px;
  text-align: center;
}
.address-ipt {
  font-size: 14px;
  color: @main_color;
}
.show_text {
  font-size: 14px;
}
.shadow-text {
  color: @sec_color;
  opacity: 0.2;
  font-size: 12px;
}
</style>