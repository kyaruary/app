<template>
  <div class="cell-group-container">
    <div class="cell-group" @click="()=>{this.$router.push('/password/set')}">
      <cl-cell type="multi" :gutter="15">
        <div class="cl-left" slot="left">
          <img :src="pwdIcon" alt slot="icon" class="pwdicon" />交易密码
        </div>
        <div class="cl-right" slot="right">
          <span v-if="true">
            {{setting}}
            <img :src="warningIcon" class="warningicon" />
          </span>
          <span v-else>{{'修改'}}</span>
        </div>
      </cl-cell>
    </div>

    <div class="cell-group" @click="()=>{this.$router.push('/feedback/q')}">
      <cl-cell type="multi">
        <div class="cl-left" slot="left">
          <img :src="pwdIcon" alt slot="icon" class="pwdicon" />意见反馈
        </div>
        <div class="cl-right" slot="right">
          <span v-if="true">
            <img :src="warningIcon" class="warningicon" />
          </span>
          <span v-else></span>
        </div>
      </cl-cell>
    </div>
  </div>
</template>

<script>
import clCell from "../../components/common/cell/clCell";
import passwordIcon from "../../assets/p/profile/password.png";
import warningIcon from "../../assets/p/profile/warning.png";
export default {
  data() {
    return {
      pwdIcon: passwordIcon,
      warningIcon,
      setting: "去设置"
    };
  },
  components: {
    clCell
  }
};
</script>

<style lang="less" scoped>
.cell-group {
  color: @main_color;
  margin-top: 30px;
  .cl-left,
  .cl-right span {
    display: flex;
    align-items: center;
    font-size: 12px;
  }
  .cl-left {
    color: @main_color;
    .pwdicon {
      height: 20px;
      width: 18px;
      margin-right: 10px;
    }
  }
  .cl-right {
    color: #999999;
    .warningicon {
      height: 18px;
      width: 18px;
      margin-left: 11px;
      position: relative;
    }
  }
}
</style>