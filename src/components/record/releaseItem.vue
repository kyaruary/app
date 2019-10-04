<template>
  <div class="re-item">
    <div class="nick-line">
      <div class="nick">
        <span>{{nickname}}</span>
        <level-star :level="6"></level-star>
      </div>
      <div class="goto">查看</div>
    </div>
    <div class="speed-line">
      <span class="desc">已为您加速(小时:分钟)</span>
      <span class="time">{{time}}</span>
    </div>
  </div>
</template>

<script>
import levelStar from "../common/levelStar";
export default {
  props: ["time", "nickname"],
  components: {
    levelStar
  }
};
</script>

<style lang="less" scoped>
.re-item {
  height: 60px;
  margin-bottom: 10px;
  .nick-line,
  .speed-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    font-size: 12px;
  }
  .nick {
    display: flex;
    align-items: center;
    span {
      margin-right: 10px;
    }
  }
  .goto {
    color: @main_color;
  }
}
</style>