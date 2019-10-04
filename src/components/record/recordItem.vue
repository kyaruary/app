<template>
  <div class="record-item">
    <div class="left">{{time}}</div>
    <div class="right">{{value}}</div>
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less" scoped>
.record-item {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
}
</style>