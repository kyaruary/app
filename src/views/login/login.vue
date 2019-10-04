<template>
  <div class="login-container container">
    <div class="brand"></div>
    <div class="brand1"></div>
    <div class="tip f-s-15">
      <span>{{tipMsg}}</span>
    </div>
    <div class="g-c">
      <line-border>
        <input
          type="text"
          placeholder="请粘贴您的秘钥"
          @click="paste($event)"
          v-model="secret"
          :class="{'shake_animate':wrong}"
        />
      </line-border>
    </div>
    <div class="g">
      <div class="login-btn" @click="submit">登录</div>
    </div>
    <div class="language"></div>
  </div>
</template>

<script>
import lineBorder from "../../components/common/lineBorder";
import { mapActions, mapMutations } from "vuex";
import { login } from "../../service/auth";
export default {
  components: {
    lineBorder
  },
  data() {
    return {
      secret: "",
      recode: "",
      wrong: false,
      loginFlase: false
    };
  },
  methods: {
    validateFrom() {
      if (this.secret === "") {
        this.wrong = true;
        setTimeout(() => {
          this.wrong = false;
        }, 1000);
        return false;
      }
      return true;
    },
    async submit() {
      const flag = this.validateFrom();
      if (!flag) {
        this.loginFlase = true;
        setTimeout(() => {
          this.loginFlase = false;
        }, 5000);
      } else {
        const user = await login({ secret: this.secret });
        this.setUser(user);
        window.localStorage.setItem("authToken", this.secret);
        this.$router.push("/");
      }
    },
    paste(e) {},
    ...mapMutations(["setUser"])
  },
  computed: {
    tipMsg() {
      return this.loginFlase ? "查询不到您的私钥，请您粘贴正确的私钥。" : " ";
    }
  }
};
</script>

<style lang="less" scoped>
@white: #fff;
.login-container {
  background-image: url("../../assets/p/secret/background.jpg");
  background-size: 375px;
  background-repeat: no-repeat;
  background-color: #d2e2e9;
  padding: 0 38px;
}
.brand {
  width: 300px;
  height: 64px;
  margin-top: 102px;
  background-image: url("/picture/secret/climber.2.png");
  background-size: 300px 64px;
  background-repeat: no-repeat;
  margin-bottom: 10px;
}
.g-c input {
  background: transparent;
  border: none;
  outline: none;
  color: @white;
  font-size: 18px;
  @base_font-family();
}
.g-c input::-moz-placeholder {
  color: @white;
  font-size: 15px;
  @base_font-family();
}
.g-c input::-webkit-input-placeholder {
  color: @white;
  font-size: 15px;
  @base_font-family();
}
.g-c input::-ms-input-placeholder {
  color: @white;
  font-size: 15px;
  @base_font-family();
}

.g-c {
  margin-bottom: 22px;
}
.g-c:last-of-type {
  margin-bottom: 0;
}
.login-btn {
  width: 270px;
  height: 52px;
  line-height: 57px;
  text-align: center;
  @base_font-family();
  background: url("../../assets/p/secret/bg_input.png") no-repeat;
  background-size: 270px 52px;
  margin: 78px auto 0;
  color: #fff;
  animation: breath_small 1.1s infinite alternate;
}

.brand1,
.language {
  position: relative;
  height: 24px;
  width: 24px;
  background-size: 24px 24px;
  background-repeat: no-repeat;
}
.brand1 {
  display: inline-block;
  background-image: url("/picture/logo/climber_logo.png");
  left: calc(100% - 24px);
  margin-bottom: 60px;
}
.language {
  margin-top: 90px;
  background-image: url("/picture/login/en.png");
  left: calc(100% - 24px);
}
.tip {
  color: @white;
  height: 15px;
  .text-shadow(red, 1px);
  @base_font-family();
  margin: 11px 0;
  text-align: center;
}
</style>