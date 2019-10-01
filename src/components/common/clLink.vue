<template>
  <button class="cl-link-btn" @click.stop="cb" :class="[sizeStyle,typeStyle]">
    <span class="link-btn-text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      sizeStyle: "size-" + this.size,
      typeStyle: "type-" + this.type
    };
  },
  props: {
    type: {
      type: String,
      default: "primary"
    },
    cb: {
      type: Function,
      default: () => {
        return false;
      }
    },
    size: {
      type: String,
      default: "middle"
    }
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.cl-link-btn {
  @clear_border_outline();
  color: white;
  @base_font-family();
  white-space: nowrap;
  text-align: center;
  padding: 0;
  margin: 0;
  display: inline-block;
  flex-shrink: 0;
}
.size-middle {
  .square(30px);
  border-radius: 12px;
  font-size: 12px;
  margin-bottom: 10px;
  &:last-child {
    margin: 0;
  }
}
.size-large {
  .square(44px);
  border-radius: 18px;
  font-size: 18px;
  margin-bottom: 20px;
}
.type-primary {
  background-color: #fff;
}
.type-danger {
  background-color: #fb383a;
}
.type-success {
  background-color: #0a602c;
}
.type-share {
  background-color: #8327c8;
}
</style>