<template>
  <div class="re-list">
    <release-item
      v-for="(item,index) in list"
      :key="item.nickname + index"
      :level="item.level"
      :nickname="item.nickname"
      :time="item.accelerate_time"
    ></release-item>
  </div>
</template>

<script>
import releaseItem from "./releaseItem";
export default {
  components: {
    releaseItem
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="less" scoped>
.re-list {
  height: calc(100% - 280px);
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
}
</style>