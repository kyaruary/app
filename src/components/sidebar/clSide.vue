<template>
  <div class="cl-side-modal" :class="{'side-show':cmpstate.sidebarShow}">
    <div class="profile-container con-p-20-15">
      <div class="nav-info">
        <div class="user-avator" @click="()=>{this.$router.push('/profile/info')}">
          <img :src="avator" />
        </div>
        <div class="textinfo" @click="()=>{this.$router.push('/profile/info')}">
          <div class="username">{{user.username}}</div>
          <div class="userid">ID:{{user.user_id}}</div>
        </div>
        <div class="exchange-icon" @click="()=>{this.$router.push('/account/exchange')}">
          <img :src="accountExchangeIcon" />
        </div>
      </div>
      <div class="level-star-c">
        <level-star :level="+bill.detail.speed_level"></level-star>
      </div>
      <div class="account-link">
        <div class="game-account" @click="()=>{this.$router.push('/account/game')}">
          <img :src="gameAccountImg" />
          游戏账户
        </div>
        <div class="bcoin-account" @click="()=>{this.$router.push('/account/bcoin')}">
          <img :src="bcoinImg" />
          币币账户
        </div>
      </div>
      <cell-group></cell-group>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import levelStar from "../../components/common/levelStar";
import accountExchangeIcon from "../../assets/p/profile/exchange.png";
import defauleAvator from "../../assets/p/common/default_avator.png";
import bcoinAccount from "../../assets/p/profile/bcoinAccount.png";
import gameAccount from "../../assets/p/profile/gameAccount.png";
import cellGroup from "./cellGroup";
export default {
  data() {
    return {
      bcoinImg: bcoinAccount,
      gameAccountImg: gameAccount,
      accountExchangeIcon,
      avator: defauleAvator
    };
  },
  components: {
    levelStar,
    cellGroup
  },
  computed: {
    ...mapState(["user", "cmpstate", "bill"])
  },
  mounted() {
    var self = this;
    document.querySelector(".cl-side-modal").addEventListener(
      "click",
      function(e) {
        var el = this;
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (e.target == el) {
          self.hideSidebar();
        }
      },
      false
    );
  },
  methods: {
    ...mapMutations(["hideSidebar"])
  }
};
</script>

<style lang="less" scoped>
.cl-side-modal {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  left: -100%;
  background: transparent;
  z-index: 999;
  transition: 0.7s;
}
.profile-container {
  box-sizing: border-box;
  height: 100%;
  width: 300px;
  background-color: rgba(0, 0, 0, 0.9);
}
.side-show {
  left: 0px;
}
.nav-info {
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  .user-avator {
    .square(44px);
    border-radius: 18px;
    padding: 0;
    position: relative;
    // box-sizing: border-box;
    border: 2px solid #fff;
    box-shadow: 0 0 4px rgba(6, 149, 163, 0.2);
    overflow: hidden;
    img {
      .square(44px);
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  .exchange-icon {
    .square(30px);
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid #fff;
    box-shadow: 0 0 7px rgba(6, 149, 183, 0.06);
    justify-content: center;
    background-color: #fff;
    img {
      .square(20px);
    }
  }
}
.textinfo {
  flex-grow: 1;
  color: #fff;
  @base_font-family();
  margin-left: 12px;
  & div:nth-child(1) {
    font-size: 18px;
    line-height: 13px;
    margin-bottom: 12px;
  }
  & div:nth-child(2) {
    font-size: 14px;
    line-height: 13px;
  }
}
.account-link {
  display: flex;
  justify-content: space-between;
  div {
    width: 128px;
    height: 120px;
    border-radius: 20px;
    @base_font-family();
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: @main_color;
    background-color: #fff;
  }
  img {
    .square(37px);
  }
}
.level-star-c {
  margin-top: 10px;
  padding: 0 15px;
  height: 30px;
}
</style>