<template>
  <div class="container homecontainer">
    <cl-side></cl-side>
    <div class="navbar">
      <div class="navlink">
        <cl-link
          v-for="item in navs"
          :key="item.title"
          :type="item.type"
          :size="item.size?item.size:'middle'"
          :cb="item.cb?item.cb:()=>{}"
        >{{item.title}}</cl-link>
      </div>
      <pool :rest="rest" :total="total" />
    </div>
    <div class="game-status">
      <div class="status-tips">
        <div class="status-time">
          <span>{{status_time}}</span>
          <span>小时:分钟</span>
        </div>
        <div class="status-ph">
          <span>{{status_ph}}</span>
          <span>体力</span>
        </div>
      </div>
      <div class="status-bar"></div>
    </div>
  </div>
</template>

<script>
import clLink from "../../components/common/clLink";
import pool from "../../components/common/pool";
import clSide from "../../components/sidebar/clSide";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      rest: 105000,
      total: 200000,
      status_time: "200:19",
      status_ph: 2000,
      navs: [
        {
          title: "钱包",
          type: "success",
          size: "large",
          cb: () => {
            this.showSidebar();
          }
        },
        {
          title: "分享",
          type: "share"
        },
        {
          title: "公告",
          type: "danger"
        }
      ]
    };
  },
  components: {
    clLink,
    pool,
    clSide
  },
  methods: {
    ...mapMutations(["showSidebar"])
  }
};
</script>

<style lang="less" scoped>
.homecontainer {
  background-image: url("/picture/secret/background.jpg");
  background-size: 100% 100%;
  padding: 0;
}
.navbar {
  display: flex;
  padding: 20px 15px 0;
  height: 130px;
  justify-content: space-between;
  align-items: flex-start;
  .navlink {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
}
.game-status {
  display: flex;
  align-items: flex-end;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  position: absolute;
  @base_font-family();
  bottom: 20px;
  .status-tips {
    .status-time,
    .status-ph {
      @game_line_gradients();
      width: 160px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      text-shadow: 0 0 2px rgba(0, 11, 39, 1);
      font-weight: 800;
    }
    .status-time {
      margin-bottom: 10px;
      color: rgba(237, 202, 64, 1);
      & span:nth-of-type(1) {
        font-size: 24px;
      }
    }
    .status-ph {
      height: 60px;
      color: rgba(243, 247, 249, 1);
      & span:nth-of-type(1) {
        font-size: 40px;
      }
    }
  }
  .status-bar {
    height: 380px;
    width: 10px;
    background-color: rgba(255, 241, 187, 1);
    margin-right: 28px;
    border: 4px solid white;
  }
}
</style>