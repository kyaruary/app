<template>
  <div class="pwd-msg-container">
    <div class="title-line">
      <div class="close">
        <img :src="closeBtn" @click="onclose" />
      </div>
      <div class="title">{{title}}</div>
      <div class="right"></div>
    </div>
    <div class="desc" v-if="desc">{{desc}}</div>
    <div class="money" v-if="count">{{count}}</div>
    <div class="detial">
      <slot></slot>
    </div>
    <div class="pwd-ipt">
      <div v-for="n in 6" :key="n" class="pwd-ipt-item" :class="{'fill-ipt':list.length >= n}"></div>
    </div>
  </div>
</template>

<script>
import closeBtn from "../../../assets/p/common/close.png";
export default {
  data() {
    return {
      closeBtn
    };
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    list: {
      type: Array,
      default: function() {
        return [];
      }
    },
    desc: {
      type: String,
      default: ""
    },
    count: {
      type: Number,
      default: 0
    },
    onclose: {
      type: Function,
      default: function() {
        return () => false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.pwd-msg-container {
  width: 300px;
  padding: 5px 15px 15px;
  border-radius: 12px;
  background: #fff;
  margin: 0 auto;
  .title-line {
    height: 40px;
    line-height: 40px;
    display: flex;
    .title {
      flex-grow: 1;
      text-align: center;
      font-size: 18px;
    }
    .right,
    .close {
      min-width: 60px;
      img {
        .square(14px);
      }
    }
  }
  .desc {
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
  }
  .money {
    font-size: 36px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .pwd-ipt {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    .pwd-ipt-item {
      position: relative;
      width: 45px;
      height: 40px;
      border: 1px solid rgba(229, 229, 229, 1);
      border-left: none;
      &:first-child {
        border-left: 1px solid rgba(229, 229, 229, 1);
      }
    }
    .fill-ipt::after {
      position: absolute;
      content: "";
      display: block;
      .square(14px);
      right: 0;
      top: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      background-color: #000;
      border-radius: 50%;
    }
  }
}
</style>