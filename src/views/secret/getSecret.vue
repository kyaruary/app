<template>
  <div class="secret-container container">
    <div class="container z999">
      <div class="s-info">
        <p class="s-title">私钥</p>
        <div class="flex f-group">
          <p>{{secret | ellipse}}</p>
          <div class="cp-btn animate-b" @click="copy">复制</div>
        </div>

        <p class="s-title">推荐码</p>
        <div class="flex f-group">
          <p>{{recode}}</p>
        </div>
      </div>

      <div style="margin-top:11px;">
        <line-border>
          <p>{{tip}}</p>
        </line-border>
      </div>

      <div class="flex flex-jcc">
        <div class="s-btn animate-b_small"></div>
      </div>
    </div>
    <snow />
  </div>
</template>

<script>
import snow from "../../components/animate/snow";
import { Toast } from "mint-ui";
import lineBorder from "../../components/common/lineBorder";
export default {
  data() {
    return {
      secret: "hjajdhahhs123455241231nieidhaj",
      recode: "AKT5D",
      tip: "请务必保存好私钥，丢失后将无法找回"
    };
  },
  components: {
    lineBorder,
    snow
  },
  filters: {
    ellipse(str) {
      var a = str.slice(0, 10);
      var b = str.slice(-4);
      return a + "....." + b;
    }
  },
  methods: {
    copy() {
      this.$copyText(this.secret).then(
        () => {
          Toast({
            message: "黏贴成功",
            position: "bottom"
          });
        },
        e => {}
      );
    }
  }
};
</script>

<style lang="less" scoped>
.z999 {
  z-index: 999;
  position: relative;
}
.secret-container {
  background-image: url("/picture/secret/background.jpg");
  background-size: 375px;
  background-repeat: no-repeat;
  background-color: #d2e2e9;
  padding: 0 38px;
}
.secret-container p {
  font-size: 16px;
  margin: 0;
  padding: 0;
  @base_font-family();
}
.s-info {
  margin-top: 202px;
  border-radius: 14px;
  background-image: url("/picture/secret/back1.png");
  background-size: 300px 200px;
  height: 200px;
  padding: 0 28px 28px;
  box-sizing: border-box;
  width: 300px;
  overflow: hidden;
}
.secret-container p.s-title {
  margin-top: 32px;
  font-size: 18px;
  color: #ffdd4b;
}
.f-group {
  margin-top: 16px;
}
.f-group p {
  color: #ffffff;
}
.s-tip p {
  color: #ffdd4b;
  font-size: 14px;
  text-align: center;
}
.s-btn {
  margin-top: 65px;
  background-image: url("/picture/secret/climber.2.png");
  box-sizing: border-box;
  background-size: contain;
  height: 52px;
  width: 240px;
}

@suqare24: 24px;
.cp-btn {
  height: @suqare24;
  width: @suqare24;
  line-height: @suqare24;
  background-image: url("/picture/secret/copy.png");
  background-size: contain;
  border-radius: 50%;
  font-size: 11px;
  white-space: nowrap;
  @base_font-family();
}
</style>