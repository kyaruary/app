<template>
  <div>
    <div class="cl-pool">
      <span class="n-progress">{{total}}</span>
    </div>
  </div>
</template>

<script>
import Wave from "canvas-waves";
import { getPool } from "../../service/pool";
export default {
  data() {
    return {
      wave: null,
      rest: 12000,
      total: 100000
    };
  },
  async mounted() {
    const pool = await getPool();
    this.rest = pool.rest;
    this.total = pool.total;
    this.wave = Wave.create(".cl-pool", {
      color: "#348bfb",
      baseHeight: "70%",
      waveHeight: "25%",
      speed: 5000
    });
    document.querySelector(".cl-pool>canvas").style.borderRadius = "30px";
    document.querySelector(".cl-pool>canvas").style.backgroundColor = "#fff";
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
  height: 74px;
  width: 150px;
  border-radius: 30px;
  box-sizing: border-box;
  overflow: hidden;
  .n-progress {
    color: #fff;
    position: absolute;
    bottom: 15px;
    right: 15px;
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