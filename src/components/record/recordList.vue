<template>
  <div class="record-list-container">
    <record-item
      v-for="(item , index) in list"
      :key="item.time + item.value + index"
      :time="item.time"
      :value="op + item.value"
    ></record-item>
  </div>
</template>

<script>
import recordItem from "./recordItem";
export default {
  components: {
    recordItem
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    op: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less" scoped>
.record-list-container {
  height: calc(100% - 250px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
}
</style>