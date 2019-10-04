<template>
  <div class="detail-item-container">
    <div class="left">{{title}}</div>
    <div class="right">{{num}}</div>
  </div>
</template>

<script>
export default {
  props: ["title", "num"]
};
</script>

<style lang="less" scoped>
.detail-item-container {
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  .left {
    text-align: left;
  }
  .right {
    text-align: right;
  }
}
</style>