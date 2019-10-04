<template>
  <div class="conatiner con-p-20-15">
    <cl-header title="体力规则"></cl-header>
    <div class="rule-c">
      <cl-cell type="large" :height="500">
        <div slot="content">体力规则</div>
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
.rule-c {
  margin-top: 20px;
}
</style>