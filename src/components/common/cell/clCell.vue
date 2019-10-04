<template>
  <div class="cl-cell multi-cell" v-if="type ==='multi'" :class="className">
    <div class="left">
      <span v-if="title">{{title}}</span>
      <slot name="left"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>

  <div
    class="cl-cell single-cell"
    v-else-if="type ==='single'"
    :class="{'single-choose': this.choose,...className}"
    @click="cb"
  >{{title}}</div>

  <div class="cl-cell large-cell" v-else-if="type ==='large'" :class="className">
    <div class="cl-large-title" v-if="title">{{title}}</div>
    <div class="cl-large-count" v-if="count">{{count}}</div>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      className: {
        ["height-" + this.height]: true,
        "cell-disable": this.disable,
        ["margin-b-" + this.gutter]: true
      }
    };
  },
  props: {
    type: {
      type: String,
      default: "multi"
    },
    title: {
      type: String | Number,
      default: ""
    },
    count: {
      type: String,
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
      default() {
        return () => false;
      }
    },
    height: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="less" scoped>
.cl-cell {
  @cell_box-shadow();
  border-radius: 14px;
  margin: 0;
  padding: 0;
  position: relative;
  background-color: #fff;
}
.multi-cell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  .left {
    font-size: 12px;
  }
  .right {
    font-size: 14px;
  }
}
.single-cell {
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0 15px;
  justify-content: center;
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
  width: 345px;
  margin: 0 auto;
  min-height: 100px;
  text-align: center;
  overflow: hidden;
  .cl-large-title {
    font-size: 12px;
    margin-top: 14px;
  }
  .cl-large-count {
    margin-top: 26px;
    font-size: 30px;
  }
}
.cell-disable {
  color: rgba(0, 11, 39, 0.3);
}
.height-0 {
  min-height: 40px;
}
.height-40 {
  height: 40px;
}
.height-50 {
  height: 50px;
}
.height-30 {
  height: 30px;
}
.height-100 {
  height: 100px;
}
.margin-b-10 {
  margin-bottom: 10px;
}
.margin-b-15 {
  margin-bottom: 15px;
}
.margin-b-20 {
  margin-bottom: 20px;
}
.margin-b-30 {
  margin-bottom: 30px;
}
.margin-b-40 {
  margin-bottom: 40px;
}
.margin-b-50 {
  margin-bottom: 10px;
}
</style>