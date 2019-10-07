<template>
  <div class="conatiner con-p-20-15">
    <cl-header title="币币账户">
      <span slot="right" @click="()=>{this.$router.push('/account/bcoin/rechargerecord')}">充值记录</span>
    </cl-header>
    <div class="rule-c">
      <cl-cell type="large" :title="'VBM'" :count="vbm.count"></cl-cell>
    </div>
    <div class="handle-group">
      <cl-button type="info" :width="138" :onclick="()=>{this.$router.push('/account/game')}">兑换体力注入</cl-button>
      <cl-button :width="138" :onclick="recharge">充币</cl-button>
    </div>
    <recharge-modal :visible="rechargeModalVisible" :onclose="onclose"></recharge-modal>
  </div>
</template>

<script>
import clHeader from "../../../components/common/clHeader";
import clCell from "../../../components/common/cell/clCell";
import clButton from "../../../components/common/button/clButton";
import rechargeModal from "../../../components/modal/rechargeModal";
import { mapState } from "vuex";
export default {
  components: {
    clHeader,
    clCell,
    clButton,
    rechargeModal
  },
  computed: {
    ...mapState(["vbm"])
  },
  data() {
    return {
      rechargeModalVisible: false
    };
  },
  methods: {
    recharge() {
      this.rechargeModalVisible = true;
    },
    onclose() {
      this.rechargeModalVisible = false;
    }
  }
};
</script>

<style lang="less" scoped>
.rule-c {
  margin-top: 20px;
}
.handle-group {
  display: flex;
  margin-top: 42px;
  justify-content: space-between;
}
</style>