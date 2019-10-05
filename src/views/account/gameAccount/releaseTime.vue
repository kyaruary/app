<template>
  <div class="container release-time-container con-p-20-15">
    <cl-header title="释放时间"></cl-header>
    <div class="re-cell-groups">
      <cl-cell type="large" title="释放时间(小时:分钟)" :count="'120:20'" :gutter="10"></cl-cell>
      <cl-cell title="加速等级(LV)" :gutter="10">
        <span slot="right">9</span>
      </cl-cell>
      <cl-cell title="加速时间(小时:分钟)">
        <span slot="right">25:20↓</span>
      </cl-cell>
    </div>
    <div class="container re-c-list">
      <release-list :list="releaselist"></release-list>
    </div>
  </div>
</template>

<script>
import clHeader from "../../../components/common/clHeader";
import clCell from "../../../components/common/cell/clCell";
import releaseList from "../../../components/record/releaseList";
import { getAccelerationTime } from "../../../service/record";
import { mapState } from "vuex";
export default {
  components: {
    clHeader,
    clCell,
    releaseList
  },
  data() {
    return {
      releaselist: []
    };
  },
  async mounted() {
    this.releaselist = await getAccelerationTime(this.user.user_id);
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>

<style lang="less" scoped>
.re-cell-groups {
  margin-top: 20px;
}
.re-c-list {
  margin-top: 20px;
  overflow: hidden;
}
</style>