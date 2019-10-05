<template>
  <div class="record-item">
    <div class="left">{{time | format}}</div>
    <div class="right">{{value}}</div>
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: String | Number,
      default: ""
    },
    value: {
      type: String | Number,
      default: ""
    }
  },
  filters: {
    format(time) {
      return new Date(time).toLocaleString();
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