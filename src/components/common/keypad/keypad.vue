<template>
  <div class="keypad-container" v-show="visible">
    <div
      v-for="n in 12"
      :key="n"
      @click="onClick(n)"
      :class="{
        'show_bottom_border':n < 10,
        'show_right_border': n%3 !== 0,
        'show_blank':n ===10 || n === 12
    }"
    >
      <span v-if="changeUI(n) != 'back'">{{changeUI(n)}}</span>
      <img v-else src />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      defaule: false
    },
    click: {
      type: Function,
      default() {
        return () => false;
      }
    }
  },
  methods: {
    changeUI(number) {
      switch (number) {
        case 11:
          return 0;
        case 12:
          return "back";
        case 10:
          return "";
        default:
          return number;
      }
    },
    onClick(num) {
      this.click(num);
    }
  }
};
</script>

<style lang="less" scoped>
.keypad-container {
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  left: 0;
  overflow: hidden;
  //   border: 1px solid rgba(67, 161, 195, 1);
  border-right: none;
  box-sizing: border-box;
  div {
    width: 125px;
    flex-shrink: 0;
    background: #fff;
    color: rgba(0, 11, 39, 1);
    height: 50px;
    line-height: 50px;
    font-size: 22px;
    text-align: center;
    position: relative;
    img {
      height: 14px;
      width: 20px;
    }
    &::after,
    &::before {
      position: absolute;
      content: "";
      display: block;
      background-color: rgba(229, 229, 229, 1);
      box-sizing: border-box;
    }
  }
  .show_bottom_border {
    &::before {
      height: 1px;
      width: 100%;
      right: 0;
      bottom: 0;
    }
  }
  .show_right_border {
    &::after {
      height: 100%;
      width: 1px;
      right: 0px;
      top: 0;
    }
  }
  .show_blank {
    background-color: #e6e6e6;
  }
}
</style>