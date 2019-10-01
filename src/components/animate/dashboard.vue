<template>
  <div></div>
</template>

<script>
import { Dashboard } from "../../util/dashboard/dashboard";
export default {
  data() {
    return {
      db: null
    };
  },
  mounted() {
    this.db = new Dashboard(100);
  },
  destroyed() {}
};
</script>

<style lang="less" scoped>
</style>