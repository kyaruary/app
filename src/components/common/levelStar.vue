<template>
  <div class="level-star-container">
    <template v-for="n in 9">
      <img :src="n <= level ? fillStar : emptyStar" :key="n" />
    </template>
  </div>
</template>

<script>
import fillStar from "../../assets/p/common/fillstar.png";
import emptyStar from "../../assets/p/common/emptystar.png";
export default {
  data() {
    return {
      fillStar,
      emptyStar
    };
  },
  props: {
    level: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="less" scoped>
.level-star-container {
  display: flex;
  align-items: center;
  img {
    .square(10px);
  }
}
</style>