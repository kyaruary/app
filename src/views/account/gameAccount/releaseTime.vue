<template>
  <div class="container release-time-container con-p-20-15">
    <cl-header title="释放时间"></cl-header>
    <div class="re-cell-groups">
      <cl-cell type="large" title="释放时间(小时:分钟)" :count="re_time | formatTime" :gutter="10"></cl-cell>
      <cl-cell title="加速等级(LV)" :gutter="10">
        <span slot="right">{{detail.speed_level}}</span>
      </cl-cell>
      <cl-cell title="加速时间(小时:分钟)">
        <span slot="right">{{hour}}:{{min}}↓</span>
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
import { Indicator } from "mint-ui";
import { mapState } from "vuex";
export default {
  components: {
    clHeader,
    clCell,
    releaseList
  },
  data() {
    return {
      releaselist: [],
      re_time: new Date().getTime(),
      timer: -1,
      hour: 0,
      min: 0
    };
  },
  mounted() {
    this.calcTotalTime();
  },
  computed: {
    ...mapState(["user", "bill"]),
    detail() {
      return this.bill.detail;
    }
  },
  destroyed() {
    window.clearInterval(this.timer);
  },
  methods: {
    async calcTotalTime() {
      Indicator.open({
        spinnerType: "triple-bounce"
      });
      this.releaseList = [];
      this.hour = 0;
      this.min = 0;
      this.releaselist = await getAccelerationTime(this.user.user_id);
      this.re_time = this.detail.release_time - new Date().getTime();
      this.timer = setInterval(() => {
        this.re_time = this.detail.release_time - new Date().getTime();
      }, 1000);
      this.releaselist.forEach(val => {
        const time_arr = val.accelerate_time.split(":");
        const hour = parseInt(time_arr[0]);
        const min = parseInt(time_arr[1]);
        this.hour += hour;
        this.min += min;
      });
      Indicator.close();
    }
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