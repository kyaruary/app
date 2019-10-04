<template>
  <div class="large-cell-container">
    <cl-cell type="large">
      <div class="content" slot="content">
        <div class="title">
          <span class="icon-circle"></span>
          <span>提交成功</span>
        </div>
        <div class="desc">已成功注入 1000 体力至体力池</div>
      </div>
    </cl-cell>
  </div>
</template>

<script>
import clCell from "@/components/common/cell/clCell";
export default {
  components: {
    clCell
  }
};
</script>

<style lang="less" scoped>
.large-cell-container {
  .content {
    color: @main_color;
    .title {
      display: flex;
      font-size: 22px;
      margin-top: 20px;
      align-items: center;
      justify-content: center;
      .icon-circle {
        box-sizing: border-box;
        border-radius: 50%;
        border: 5px solid @main_color;
        background-color: #fff;
        height: 20px;
        width: 20px;
        margin-right: 10px;
      }
    }
    .desc {
      font-size: 12px;
      margin-top: 33px;
    }
  }
}
</style>