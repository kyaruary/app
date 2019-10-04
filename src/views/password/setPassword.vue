<template>
  <div class="container con-p-20-15">
    <cl-header title="交易密码"></cl-header>
    <div class="form-group">
      <cl-cell :gutter="10" :height="30">
        <span slot="left">交易密码</span>
      </cl-cell>
      <cl-cell :gutter="20">
        <input slot="left" placeholder="交易密码" />
      </cl-cell>
      <cl-cell :gutter="10" :height="30">
        <span slot="left">重复交易密码</span>
      </cl-cell>
      <cl-cell :gutter="20">
        <input slot="left" placeholder="重复交易密码" />
      </cl-cell>
    </div>
    <div class="handle">
      <cl-button>确认</cl-button>
    </div>
  </div>
</template>

<script>
import clHeader from "../../components/common/clHeader";
import clCell from "../../components/common/cell/clCell";
import clButton from "../../components/common/button/clButton";
export default {
  components: {
    clHeader,
    clCell,
    clButton
  }
};
</script>

<style lang="less" scoped>
.form-group {
  margin-top: 30px;
}
.handle {
  text-align: center;
  margin-top: 60px;
}
</style>