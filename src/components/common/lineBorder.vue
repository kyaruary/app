<template>
  <div class="s-tip">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.s-tip {
  box-sizing: border-box;
  width: 300px;
  overflow: hidden;
  background-image: url("/picture/secret/back2.png");
  background-size: 300px 60px;
  height: 60px;
  line-height: 60px;
  padding: 0 26px;
}
</style>