<template>
  <div class="container con-p-20-15">
    <cl-header title="修改交易密码"></cl-header>
    <div class="form-group">
      <cl-cell :gutter="10" :height="30">
        <span slot="left">原交易密码</span>
      </cl-cell>
      <cl-cell :gutter="20">
        <input slot="left" placeholder="原交易密码" />
      </cl-cell>

      <cl-cell :gutter="10" :height="30">
        <span slot="left">新交易密码</span>
      </cl-cell>
      <cl-cell :gutter="20">
        <input slot="left" placeholder="新交易密码" />
      </cl-cell>

      <cl-cell :gutter="10" :height="30">
        <span slot="left">重复新交易密码</span>
      </cl-cell>
      <cl-cell :gutter="20">
        <input slot="left" placeholder="重复输入新交易密码" />
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