<template>
  <div class="container re-next-container">
    <cl-header>
      <span slot="right" @click="()=>{this.$router.push('/account/game')}">我的释放时间</span>
    </cl-header>
    <div class="re-cell-groups">
      <cl-cell type="multi" :title="name" :gutter="10"></cl-cell>
      <cl-cell title="加速等级(LV)" :gutter="10">
        <span slot="right">{{level}}</span>
      </cl-cell>
      <cl-cell title="加速时间(小时:分钟)">
        <span slot="right">{{hour}}:{{min}}</span>
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
import { getAccelerationTime } from "../../../service/record";
import releaseList from "../../../components/record/releaseList";
import { Indicator } from "mint-ui";
export default {
  components: {
    clHeader,
    clCell,
    releaseList
  },
  data() {
    return {
      releaselist: [],
      hour: 0,
      min: 0
    };
  },
  mounted() {
    this.calcTotalTime();
  },
  methods: {
    async calcTotalTime() {
      this.min = 0;
      this.hour = 0;
      Indicator.open({
        spinnerType: "triple-bounce"
      });
      this.releaselist = [];
      this.releaselist = await getAccelerationTime(this.nickname);
      this.releaselist.forEach(val => {
        const time_arr = val.accelerate_time.split(":");
        const hour = parseInt(time_arr[0]);
        const min = parseInt(time_arr[1]);
        this.hour += hour;
        this.min += min;
      });
      Indicator.close();
    }
  },
  props: ["name", "level"],
  watch: {
    name() {
      this.calcTotalTime();
    }
  }
};
</script>

<style lang="less" scoped>
.re-next-container {
  padding: 20px 15px 0;
  .re-cell-groups {
    margin-top: 20px;
  }
  .re-c-list {
    margin-top: 20px;
    overflow: hidden;
  }
}
</style>