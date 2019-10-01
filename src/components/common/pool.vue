<template>
  <div>
    <div class="cl-pool">
      <span class="n-progress">{{rest}}/{{total}}</span>
    </div>
    <div class="pool-desc">体力池剩余/体力池总量</div>
  </div>
</template>

<script>
import Wave from "canvas-waves";
export default {
  data() {
    return {
      wave: null,
      baseHeight: (this.rest / this.total) * 100 - 10 + "%"
    };
  },
  props: {
    total: {
      type: Number,
      default: 100
    },
    rest: {
      type: Number,
      default: 60
    }
  },
  mounted() {
    this.wave = Wave.create(".cl-pool", {
      color: "#348bfb",
      baseHeight: this.baseHeight,
      waveHeight: "10%",
      speed: 5000
    });
    document.querySelector(".cl-pool>canvas").style.borderRadius = "20px";
    document.querySelector(".cl-pool>canvas").style.boxShadow =
      "0 0 0px 2px #348bfb";
    this.wave.toggleAnimation();
  },
  destroyed() {
    this.wave.destroy();
  }
};
</script>

<style lang="less" scoped>
.cl-pool {
  background-color: #fff;
  height: 74px;
  width: 220px;
  border-radius: 20px;
  overflow: hidden;
  .n-progress {
    color: #fff;
    position: absolute;
    bottom: 10px;
    right: 13px;
    @base_font-family();
    font-size: 18px;
    line-height: 13px;
    .text-shadow(#348bfb, 1px);
  }
}
.pool-desc {
  text-align: right;
  padding: 10px;
  font-size: 14px;
  @base_font-family();
  .text-shadow(white, 1px);
  color: rgba(52, 139, 251, 1);
}
</style>