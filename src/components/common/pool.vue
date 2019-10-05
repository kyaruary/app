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
      baseHeight: (pool.rest / pool.total) * 100 - 10 + "%",
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