<template>
  <div class="con-p-20-15 container">
    <cl-header></cl-header>
    <div class="feedback-list">
      <div class="list-group">
        <cl-cell :gutter="20">
          <span slot="left">建议</span>
        </cl-cell>
        <cl-cell :gutter="20">
          <span slot="left">建议</span>
        </cl-cell>
      </div>
    </div>
  </div>
</template>

<script>
import clCell from "../../components/common/cell/clCell";
import clHeader from "../../components/common/clHeader";
export default {
  components: {
    clCell,
    clHeader
  }
};
</script>

<style lang="less" scoped>
.feedback-list {
  margin-top: 30px;
}
</style>