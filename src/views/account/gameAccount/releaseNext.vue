<template>
  <div class="container release-time-container con-p-20-15">
    <cl-header>
      <span slot="right" @click="()=>{this.$router.push('/account/game')}">我的释放时间</span>
    </cl-header>
    <div class="re-cell-groups">
      <cl-cell type="multi" title="释放时间(小时:分钟)" :gutter="10"></cl-cell>
      <cl-cell title="加速等级(LV)" :gutter="10">
        <span slot="right">9</span>
      </cl-cell>
      <cl-cell title="加速时间(小时:分钟)">
        <span slot="right">25:20↓</span>
      </cl-cell>
    </div>
  </div>
</template>

<script>
import clHeader from "../../../components/common/clHeader";
import clCell from "../../../components/common/cell/clCell";
export default {
  components: {
    clHeader,
    clCell
  }
};
</script>

<style lang="less" scoped>
</style>