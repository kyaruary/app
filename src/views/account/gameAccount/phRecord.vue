<template>
  <div class="container record-container con-p-20-15">
    <cl-header title="体力记录"></cl-header>
    <div class="record-cell">
      <cl-cell type="large" title="总计体力" :count="'20000'"></cl-cell>
    </div>
    <div class="tabbar">
      <span :class="{'link-active':showInjectRecord}" @click="ontab(1)">注入记录</span>
      <span :class="{'link-active':showReleaseRecord}" @click="ontab(2)">释放记录</span>
    </div>
    <div class="tabbar-container">
      <div class="container-item" v-if="showReleaseRecord">
        <record-list :list="releaseList" op="-"></record-list>
      </div>
      <div class="container-item" v-if="showInjectRecord">
        <record-list :list="injectList" op="+"></record-list>
      </div>
    </div>
  </div>
</template>

<script>
import clHeader from "../../../components/common/clHeader";
import clCell from "../../../components/common/cell/clCell";
import recordList from "../../../components/record/recordList";
import { getInjectRecord, getReleaseRecord } from "../../../service/record";
import { mapState } from "vuex";
export default {
  data() {
    return {
      showReleaseRecord: false,
      showInjectRecord: true,
      injectList: [],
      releaseList: [],
      injectPn: 0,
      releasePn: 0
    };
  },
  components: {
    clHeader,
    clCell,
    recordList
  },
  methods: {
    ontab(type) {
      switch (type) {
        case 1:
          if (this.showInjectRecord == true) {
            return;
          }
          break;
        case 2:
          if (this.showReleaseRecord == true) {
            return;
          }
          break;
      }
      this.showReleaseRecord = !this.showReleaseRecord;
      this.showInjectRecord = !this.showInjectRecord;
    },
    async getInjectList() {
      const data = await getInjectRecord(this.user.user_id, this.injectPn);
      this.injectList = data;
      this.injectPn++;
    },
    async getReleaseList() {
      this.releaseList = await getReleaseRecord(
        this.user.user_id,
        this.releasePn
      );
      this.injectPn++;
    }
  },
  mounted() {
    this.getInjectList();
    this.getReleaseList();
  },
  computed: {
    ...mapState(["user"])
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