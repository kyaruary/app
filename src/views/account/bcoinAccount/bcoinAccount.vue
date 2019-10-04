<template>
  <div class="conatiner con-p-20-15">
    <cl-header title="币币账户">
      <span slot="right">充值记录</span>
    </cl-header>
    <div class="rule-c">
      <cl-cell type="large" :title="'VBM'" :count="'1200.2586'"></cl-cell>
    </div>
    <div class="handle-group">
      <cl-button type="info" :width="138" :onclick="()=>{this.$router.push('/account/game')}">兑换体力注入</cl-button>
      <cl-button :width="138">充币</cl-button>
    </div>
  </div>
</template>

<script>
import clHeader from "../../../components/common/clHeader";
import clCell from "../../../components/common/cell/clCell";
import clButton from "../../../components/common/button/clButton";
export default {
  components: {
    clHeader,
    clCell,
    clButton
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