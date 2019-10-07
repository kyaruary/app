<template>
  <div class="keypad-container" v-show="visible">
    <div
      v-for="n in 12"
      :key="n"
      @click="onClick(n)"
      v-hammer:tap="ontap"
      :class="{
        'show_bottom_border':n < 10,
        'show_right_border': n%3 !== 0,
        'show_blank':n ===10 || n === 12,
    }"
    >
      <span v-if="changeUI(n) != 'back'">{{changeUI(n)}}</span>
      <delete-btn v-else></delete-btn>
    </div>
  </div>
</template>

<script>
import deleteBtn from "../svg/deleteBtn";
export default {
  data() {
    return {
      deleteBtn
    };
  },
  components: {
    deleteBtn
  },
  props: {
    visible: {
      type: Boolean,
      defaule: false
    },
    onclick: {
      type: Function,
      default() {
        return () => false;
      }
    },
    ondelete: {
      type: Function,
      default: function() {
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
    onClick(number) {
      switch (number) {
        case 11:
          this.onclick(0);
          break;
        case 12:
          this.ondelete();
          break;
        case 10:
          break;
        default:
          this.onclick(number);
      }
    },
    ontap() {}
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
  border-right: none;
  box-sizing: border-box;
  box-shadow: -1px 0 3px #fff;
  div {
    width: 125px;
    flex-shrink: 0;
    background: #fff;
    color: rgba(0, 11, 39, 1);
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: 0.3s;
    &::after,
    &::before {
      position: absolute;
      content: "";
      display: block;
      background-color: rgba(229, 229, 229, 1);
      box-sizing: border-box;
    }
    &:active {
      background-color: rgba(229, 229, 229, 0.9);
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