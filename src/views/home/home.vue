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
      <cl-pool />
    </div>
    <div class="game-status">
      <div class="status-tips">
        <div class="status-time">
          <span>{{re_time | formatTime}}</span>
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
import clPool from "../../components/common/pool";
import clSide from "../../components/sidebar/clSide";
import { mapMutations, mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      status_timestamps: 0,
      status_ph: 0,
      re_time: 0,
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
    clPool,
    clSide
  },
  methods: {
    ...mapMutations(["showSidebar", "setUser"]),
    ...mapActions(["getBill"])
  },
  async mounted() {
    if (this.user.username == "") {
      // 如果不是当前登录 取缓存
      let cache_user = window.localStorage.getItem("currentUser");
      cache_user
        ? this.setUser(JSON.parse(cache_user))
        : console.log("need login");
    }
    await this.getBill(this.user.user_id);
    this.status_timestamps = this.bill_detail.release_time;
    this.status_ph = this.bill_detail.ph;
    this.re_time = this.status_timestamps - new Date().getTime();
    setInterval(() => {
      this.re_time = this.status_timestamps - new Date().getTime();
    }, 1000);
  },
  computed: {
    ...mapState(["user", "bill"]),
    bill_detail() {
      return this.bill.detail;
    }
  }
};
</script>

<style lang="less" scoped>
.homecontainer {
  background-image: url("../../assets/p/secret/background.jpg");
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