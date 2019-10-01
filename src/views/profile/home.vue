<template>
  <div class="profile-container container">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="game-item"></mt-tab-container-item>
      <mt-tab-container-item id="profile-item">
        <div class="nav-info">
          <div class="user-avator">
            <img :src="avator" @click="()=>{this.$router.push('/profile/info')}" />
          </div>
          <div class="textinfo">
            <div class="username">{{user.username}}</div>
            <div class="userid">ID:{{user.userId}}</div>
          </div>
          <div class="exchange-icon"></div>
        </div>
        <div class="account-link">
          <div class="game-account">
            <img :src="gameAccountImg" />
            游戏账户
          </div>
          <div class="bcoin-account">
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
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="game-item">
        <img id="game" slot="icon" :src="gameImg" />
        CLIMBER
      </mt-tab-item>
      <mt-tab-item id="profile-item">
        <img id="profile" slot="icon" :src="profileImg" />
        个人中心
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
    profileImg() {
      return this.selected === "profile-item"
        ? "/picture/profile/profile.2.png"
        : "/picture/profile/profile.1.png";
    },
    gameImg() {
      return this.selected === "game-item"
        ? "/picture/profile/game.2.png"
        : "/picture/profile/game.1.png";
    },
    ...mapState(["user"])
  }
};
</script>

<style lang="less" scoped>
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: #fff;
  color: #0695b7;
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
  .square(40px);
  background-image: url("/picture/profile/exchange.png");
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: center;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid #fff;
  box-shadow: 0 0 7px rgba(6, 149, 183, 0.06);
  justify-self: flex-end;
}
.textinfo {
  flex-grow: 1;
  color: #001e38;
  @base_font-family();
  margin-left: 12px;
}
.textinfo div:nth-child(1) {
  font-size: 22px;
  height: 22px;
  line-height: 13px;
  margin-bottom: 18px;
}
.textinfo div:nth-child(2) {
  font-size: 18px;
  height: 18px;
  line-height: 13px;
}
.account-link {
  display: flex;
  padding: 0 15px;
  justify-content: space-between;
}
.account-link div {
  width: 165px;
  height: 120px;
  @cell_box-shadow();
  border-radius: 7px;
  @base_font-family();
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #001e38;
}
.account-link img {
  .square(37px);
}
.mint-tab-container-item {
  padding: 20px 0;
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
</style>