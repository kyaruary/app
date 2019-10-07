<template>
  <div class="cell-group-container">
    <div class="cell-group" @click="gotoPwd">
      <cl-cell type="multi" :gutter="15">
        <div class="cl-left" slot="left">
          <div class="mr-10">
            <img :src="pwdIcon" alt slot="icon" class="pwdicon" />
          </div>交易密码
        </div>
        <div class="cl-right" slot="right">
          <span v-if="user.user_state === '1'">
            {{setting}}
            <img :src="warningIcon" class="warningicon" />
          </span>
          <span v-else>{{'修改'}}</span>
        </div>
      </cl-cell>
    </div>

    <!-- <div class="cell-group" @click="()=>{this.$router.push('/feedback/q')}">
      <cl-cell type="multi">
        <div class="cl-left" slot="left">
          <div class="has-info mr-10">
            <img :src="feedbackIcon" alt slot="icon" class="pwdicon" />
          </div>意见反馈
        </div>
      </cl-cell>
    </div>-->
  </div>
</template>

<script>
import clCell from "../../components/common/cell/clCell";
import feedbackIcon from "../../assets/p/profile/feedback.png";
import passwordIcon from "../../assets/p/profile/password.png";
import warningIcon from "../../assets/p/profile/warning.png";
import { mapState } from "vuex";
export default {
  data() {
    return {
      pwdIcon: passwordIcon,
      warningIcon,
      setting: "去设置",
      feedbackIcon
    };
  },
  components: {
    clCell
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    gotoPwd() {
      if (this.user.user_state === "1") {
        this.$router.push("/password/set");
      } else {
        this.$router.push("/password/reset");
      }
    }
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
    .mr-10 {
      margin-right: 10px;
    }
    .pwdicon {
      height: 18px;
      width: 20px;
    }
    .has-info {
      position: relative;
      &::after {
        position: absolute;
        content: "";
        display: block;
        .square(4px);
        background-color: red;
        border-radius: 50%;
        top: -4px;
        right: -4px;
      }
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