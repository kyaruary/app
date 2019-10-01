<template>
  <div class="c-header">
    <div class="left">
      <img :src="backImg" class="back" @click="goback" />
    </div>
    <div class="title">{{title}}</div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backImg: "/picture/profile/back.png"
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less" scoped>
@align-width: 80px;
.c-header {
  min-height: 44px;
  background-color: #fff;
  // @base_font-family();
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.back {
  height: 20px;
  width: 18px;
}
.title {
  flex-grow: 1;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
}
.left {
  width: @align-width;
  text-align: left;
}
.right {
  // color: #0695b7;
  width: @align-width;
  font-size: 14px;
  text-align: right;
}
</style>