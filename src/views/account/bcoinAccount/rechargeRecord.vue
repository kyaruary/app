<template>
  <div class="container con-p-20-15">
    <cl-header title="充币记录"></cl-header>
    <div class="re-content">
      <cl-cell :height="50" type="single" title="VBM">
        <span slot="icon" class="icon"></span>
      </cl-cell>
    </div>
    <div class="wrapper">
      <div class="re-list">
        <div class="group" v-for="item in list" :key="item.order+item.count">
          <div class="info">
            <div class="order">{{item.order}}</div>
            <div class="time">{{item.time}}</div>
          </div>
          <div class="count">{{item.count}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import clHeader from "../../../components/common/clHeader";
import clCell from "../../../components/common/cell/clCell";
import { getRechargeRecord } from "../../../service/record";
export default {
  components: {
    clHeader,
    clCell
  },
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.init();
  },
  computed: {},
  methods: {
    async init() {
      this.list = await getRechargeRecord();
    }
  }
};
</script>

<style lang="less" scoped>
.re-content {
  margin-top: 20px;
  .icon {
    .square(30px);
    border-radius: 50%;
    background-color: brown;
    margin-right: 10px;
  }
}
.wrapper {
  height: 100%;
  .re-list {
    height: calc(100% - 134px);
    margin-top: 20px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0;
      display: none;
    }
    .group {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
      margin-bottom: 20px;
      .info {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-end;
        font-size: 12px;
      }
      .count {
        font-size: 18px;
      }
    }
  }
}
</style>