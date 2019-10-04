<template>
  <div class="cell-list-container">
    <cl-cell
      v-for="item in 9"
      :key="item"
      :title="item * 1000"
      type="single"
      :disable="(item * 1000) > limit"
      :choose="item === choosed"
      :gutter="item != 9 ? 20:0"
      :cb="()=>{chooseItem(item)}"
    ></cl-cell>
  </div>
</template>

<script>
import clCell from "./clCell";
export default {
  data() {
    return {
      choosed: -1
    };
  },
  components: {
    clCell
  },
  props: {
    limit: {
      type: Number,
      default: 9000
    },
    click: {
      type: Function,
      default: function() {
        return () => false;
      }
    }
  },
  methods: {
    chooseItem(index) {
      if (index * 1000 > this.limit) return false;
      this.choosed = index;
      this.click(index * 1000);
    }
  }
};
</script>

<style lang="less" scoped>
</style>