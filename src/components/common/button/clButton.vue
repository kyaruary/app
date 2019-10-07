<template>
  <button
    @click="handle"
    class="cl-button"
    :style="style"
    :class="{...className,'cl-btn-disable': this.disable}"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  data() {
    return {
      style: {
        width: this.width === 0 ? "auto" : this.width + "px"
      },
      className: {
        ["cl-btn-" + this.type]: true
      }
    };
  },
  props: {
    onclick: {
      type: Function,
      default() {
        return () => false;
      }
    },
    width: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: "primary"
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handle() {
      if (this.disable) {
        return false;
      } else {
        this.onclick();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.cl-button {
  height: 44px;
  @clear_border_outline();
  margin: 0;
  padding: 13px 0;
  min-width: 100px;
  color: #fff;
  border-radius: 12px;
  font-weight: 900;
  text-align: center;
  white-space: nowrap;
}
.cl-btn-primary {
  background-color: @main_color;
}
.cl-btn-disable {
  background-color: @sec_color;
  opacity: 0.2;
}
.cl-btn-black {
  background-color: @sec_color;
}
.cl-btn-info {
  background-color: #fff;
  color: @main_color;
  @cell_box-shadow();
}
</style>