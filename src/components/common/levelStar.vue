<template>
  <div class="level-star-container">
    <template v-for="n in 9">
      <img :src="n <= level ? fillImg : emptyImg" :key="n" />
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fillImg: "/picture/common/fillstar.png",
      emptyImg: "/picture/common/emptystar.png"
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