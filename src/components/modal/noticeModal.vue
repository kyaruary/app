<template>
  <div class="container modal-container">
    <div class="modal">
      <div class="title">公告</div>
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.modal-container {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.9);
  .modal {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    width: 300px;
    height: 500px;
    .title {
      font-size: 22px;
      text-align: center;
      margin: 34px auto;
    }
    .content {
      overflow-y: scroll;
    }
  }
}
</style>    