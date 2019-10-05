<template>
  <div class="container gc-container con-p-20-15">
    <cl-header title="游戏账户">
      <router-link to="/account/game/record" tag="span" slot="right">体力记录</router-link>
    </cl-header>

    <div class="acc-level">
      <span class="level-title">加速星级:</span>
      <level-star :level="+detail.speed_level"></level-star>
    </div>

    <p class="amount-title">本单体力</p>
    <p class="current-amount">1000</p>

    <div class="layout-br">
      <div class="release">
        <div class="re-title">释放时间(小时:分钟)</div>
        <div class="re-time">
          {{re_time| formatTime}}
          <button
            class="figure"
            @click="()=>{this.$router.push('/account/game/releasetime')}"
          >查看</button>
        </div>
      </div>
      <div class="benefit">
        <div class="be-title">当前体力收益</div>
        <div class="be-num">{{detail.benefit}}</div>
      </div>
    </div>

    <div class="handle-groups">
      <cl-button :disable="true">释放</cl-button>
      <cl-button :onclick="()=>{this.$router.push('/account/game/inject')}">注入</cl-button>
    </div>

    <div class="bottom-tip-rule">
      <router-link to="/account/game/rule" tag="span">体力规则</router-link>
    </div>
  </div>
</template>

<script>
import clHeader from "../../../components/common/clHeader";
import levelStar from "../../../components/common/levelStar";
import clButton from "../../../components/common/button/clButton";
import { mapState } from "vuex";
export default {
  components: {
    clHeader,
    levelStar,
    clButton
  },
  data() {
    return {
      detail: {},
      re_time: new Date().getTime()
    };
  },
  mounted() {
    this.detail = this.bill.detail;
    this.re_time = this.detail.release_time - new Date().getTime();
    setInterval(() => {
      this.re_time = this.detail.release_time - new Date().getTime();
    }, 1000);
  },
  computed: {
    ...mapState(["bill"])
  }
};
</script>

<style lang="less" scoped>
@local_color: rgba(67, 161, 195, 1);
.gc-container {
  .acc-level {
    display: flex;
    color: rgba(238, 190, 3, 1);
    align-items: center;
    height: 40px;
    margin: 10px 0 20px;
    .level-title {
      font-size: 12px;
      font-weight: 900;
      margin-right: 8px;
    }
  }
}
.current-amount,
.amount-title {
  color: @local_color;
  text-align: center;
  padding: 0;
  margin: 0 auto;
}
.amount-title {
  font-size: 12px;
}
.current-amount {
  font-size: 12px;
  height: 70px;
  font-size: 50px;
  line-height: 70px;
  margin-top: 12px;
}
.layout-br {
  height: 120px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .release,
  .benefit {
    text-align: center;
    width: 165px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    & div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .re-title,
  .be-title {
    font-size: 12px;
    height: 40px;
  }
  .re-time,
  .be-num {
    height: 50px;
    font-size: 18px;
  }
  .re-time {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .figure {
      margin: 0;
      font-size: 12px;
      @clear_border_outline();
      background-color: #fff;
      position: relative;
      border-radius: 9px;
      margin-left: 15px;
      padding: 6px 8px;
      width: 40px;
      box-shadow: 0 0 8px rgba(67, 161, 195, 0.2);
    }
  }
}
.handle-groups {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 44px;
  margin-top: 40px;
}
.bottom-tip-rule {
  position: fixed;
  width: 100%;
  text-align: center;
  bottom: 30px;
  left: 0;
  color: #1a1a1a;
  font-size: 14px;
}
</style>