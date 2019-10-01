<template>
  <div class="cl-side-modal" :class="{'side-show':cmpstate.sidebarShow}">
    <div class="profile-container">
      <div class="nav-info">
        <div class="user-avator" @click="()=>{this.$router.push('/profile/info')}">
          <img :src="avator" />
        </div>
        <div class="textinfo" @click="()=>{this.$router.push('/profile/info')}">
          <div class="username">{{user.username}}</div>
          <div class="userid">ID:{{user.userId}}</div>
        </div>
        <div class="exchange-icon"></div>
      </div>
      <div class="account-link">
        <div class="game-account" @click="()=>{this.$router.push('/account/game')}">
          <img :src="gameAccountImg" />
          游戏账户
        </div>
        <div class="bcoin-account" @click="()=>{this.$router.push('/account/game')}">
          <img :src="bcoinImg" />
          币币账户
        </div>
      </div>
      <div class="s-cell m-t-30 f-s-12">
        <mt-cell title="交易密码">
          <span class="cell-value f-s-12" v-if="true">
            {{setting}}
            <img :src="warningIcon" class="warningicon" />
          </span>
          <span v-else class="cell-value">{{'修改'}}</span>
          <img :src="pwdIcon" alt slot="icon" class="pwdicon" />
        </mt-cell>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      selected: "profile-item",
      avator: "/picture/profile/avator.1.png",
      bcoinImg: "/picture/profile/bcoinAccount.png",
      gameAccountImg: "/picture/profile/gameAccount.png",
      setting: "去设置",
      pwdIcon: "/picture/profile/password.png",
      warningIcon: "/picture/profile/warning.png"
    };
  },
  computed: {
    ...mapState(["user", "cmpstate"])
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
.local_color {
  color: rgba(67, 161, 195, 1);
}
.cl-side-modal {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  left: -100%;
  background: transparent;
  z-index: 999;
  transition: .7s;
}
.profile-container {
  height: 100%;
  width: 300px;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 999;
}
.side-show {
  left: 0px;
}
.nav-info {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  margin-bottom: 30px;
}
.user-avator {
  .square(60px);
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 4px rgba(6, 149, 163, 0.2);
  overflow: hidden;
}
.user-avator img {
  height: 100%;
  width: 100%;
}
.exchange-icon {
  .square(30px);
  background-image: url("/picture/profile/exchange.png");
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: center;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #fff;
  box-shadow: 0 0 7px rgba(6, 149, 183, 0.06);
  justify-self: flex-end;
  background-color: #fff;
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
  padding: 0 15px;
  justify-content: space-between;
  div {
    width: 128px;
    height: 120px;
    // @cell_box-shadow();
    border-radius: 20px;
    @base_font-family();
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    .local_color();
    background-color: #fff;
  }
  img {
    .square(37px);
  }
}
.pwdicon {
  height: 20px;
  width: 18px;
}
.warningicon {
  height: 18px;
  width: 18px;
  margin-left: 11px;
  position: relative;
}
.cell-value {
  display: flex;
  align-items: center;
  font-size: 12px;
}
.s-cell {
  .local_color();
}
</style>