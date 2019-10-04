<template>
  <div class="container">
    <router-view></router-view>
    <div class="handle">
      <cl-button :width="130" :onclick="()=>{this.$router.push('/')}">前往游戏</cl-button>
    </div>
  </div>
</template>

<script>
import clButton from "../../components/common/button/clButton";
export default {
  components: {
    clButton
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 105px 0 0;
  .handle {
    text-align: center;
    margin-top: 40px;
  }
}
</style>