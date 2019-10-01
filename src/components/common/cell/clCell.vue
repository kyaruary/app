<template>
  <div
    class="cl-cell multi-cell"
    v-if="type ==='multi'"
    :style="style"
    :class="{'cell-disable':disable}"
  >
    <div class="left">{{title}}</div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>

  <div
    class="cl-cell single-cell"
    v-else-if="type ==='single'"
    :style="style"
    :class="{'cell-disable':disable,'single-choose':choose}"
    @click="cb"
  >{{title}}</div>

  <div
    class="cl-cell large-cell"
    v-else-if="type ==='large'"
    :style="style"
    :class="{'cell-disable':disable}"
  >{{title}}</div>
</template>

<script>
export default {
  data() {
    return {
      style: {
        "margin-bottom": this.gutter + "px"
      },
      marginBottom: this.gutter + "px"
    };
  },
  props: {
    type: {
      type: String,
      default: "mt"
    },
    title: {
      type: String | Number,
      default: ""
    },
    gutter: {
      type: String | Number,
      default: "0"
    },
    disable: {
      type: Boolean,
      default: false
    },
    choose: {
      type: Boolean,
      default: false
    },
    cb: {
      type: Function,
      default: () => false
    }
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.cl-cell {
  box-shadow: 0 0 7px @box_shadow_color;
  border-radius: 14px;
  margin: 0;
  padding: 0;
  position: relative;
}
.single-cell {
  text-align: center;
  padding: 0 15px;
  min-height: 40px;
  line-height: 40px;
  color: rgba(0, 11, 39, 1);
  font-size: 18px;
}
.single-choose {
  background-color: rgba(67, 161, 195, 1);
  color: #fff;
  box-shadow: none;
  &::after {
    position: absolute;
    .square(20px);
    content: "";
    display: block;
    right: 11px;
    top: 10px;
    border-radius: 50%;
    background-color: #fff;
  }
}
.large-cell {
  padding: 0;
}
.cell-disable {
  color: rgba(0, 11, 39, 0.3);
}
</style>