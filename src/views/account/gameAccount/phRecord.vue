<template>
  <div class="container record-container con-p-20-15">
    <cl-header title="体力记录"></cl-header>
    <div class="record-cell">
      <cl-cell type="large" title="总计体力" :count="'20000'"></cl-cell>
    </div>
    <div class="tabbar">
      <span :class="{'link-active':showInjectRecord}" @click="ontab">注入记录</span>
      <span :class="{'link-active':showReleaseRecord}" @click="ontab">释放记录</span>
    </div>
    <div class="tabbar-container">
      <div class="container-item" v-if="showReleaseRecord">
        <record-list :list="releaseList"></record-list>
      </div>
      <div class="container-item" v-if="showInjectRecord">
        <record-list :list="injectList"></record-list>
      </div>
    </div>
  </div>
</template>

<script>
import clHeader from "../../../components/common/clHeader";
import clCell from "../../../components/common/cell/clCell";
import recordList from "../../../components/record/recordList";
export default {
  data() {
    return {
      showReleaseRecord: false,
      showInjectRecord: true,
      injectList: [
        { time: new Date().toLocaleString(), value: "-5000" },
        { time: new Date().toLocaleString(), value: "-5000" },
        { time: new Date().toLocaleString(), value: "-5000" },
        { time: new Date().toLocaleString(), value: "-5000" },
        { time: new Date().toLocaleString(), value: "-5000" }
      ],
      releaseList: [
        { time: new Date().toLocaleString(), value: "+5000" },
        { time: new Date().toLocaleString(), value: "+5000" },
        { time: new Date().toLocaleString(), value: "+5000" },
        { time: new Date().toLocaleString(), value: "+5000" },
        { time: new Date().toLocaleString(), value: "+5000" },
        { time: new Date().toLocaleString(), value: "+5000" },
        { time: new Date().toLocaleString(), value: "+5000" },
        { time: new Date().toLocaleString(), value: "+5000" },
        { time: new Date().toLocaleString(), value: "+5000" },
        { time: new Date().toLocaleString(), value: "+5000" },
        { time: new Date().toLocaleString(), value: "+5000" },
        { time: new Date().toLocaleString(), value: "+5000" },
        { time: new Date().toLocaleString(), value: "+5000" },
        { time: new Date().toLocaleString(), value: "+5000" },
        { time: new Date().toLocaleString(), value: "+5000" },
        { time: new Date().toLocaleString(), value: "+5000" },
        { time: new Date().toLocaleString(), value: "+5000" },
        { time: new Date().toLocaleString(), value: "+5000" },
        { time: new Date().toLocaleString(), value: "+5000" },
        { time: new Date().toLocaleString(), value: "+5000" },
        { time: new Date().toLocaleString(), value: "+5000" },
        { time: new Date().toLocaleString(), value: "+5000" },
        { time: new Date().toLocaleString(), value: "+5000" }
      ]
    };
  },
  components: {
    clHeader,
    clCell,
    recordList
  },
  methods: {
    ontab() {
      this.showReleaseRecord = !this.showReleaseRecord;
      this.showInjectRecord = !this.showInjectRecord;
    }
  }
};
</script>

<style lang="less" scoped>
.record-container {
  .record-cell {
    margin-top: 20px;
  }
  .tabbar {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    span {
      height: 50px;
      width: 165px;
      line-height: 50px;
      text-align: center;
      font-size: 18px;
    }
    .link-active {
      color: rgba(67, 161, 195, 1);
      border-bottom: 4px solid rgba(67, 161, 195, 1);
    }
  }
  .container-item,
  .tabbar-container {
    height: 100%;
  }
}
</style>