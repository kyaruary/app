<template>
  <div class="container con-p-20-15">
    <cl-header title="交易密码"></cl-header>
    <div class="form-group">
      <cl-cell :gutter="10" :height="30">
        <span slot="left">交易密码</span>
      </cl-cell>
      <cl-cell :gutter="20">
        <input
          slot="left"
          placeholder="交易密码"
          v-model="password1"
          required
          type="password"
          maxlength="6"
        />
      </cl-cell>
      <cl-cell :gutter="10" :height="30">
        <span slot="left">重复交易密码</span>
      </cl-cell>
      <cl-cell :gutter="20">
        <input
          slot="left"
          placeholder="重复交易密码"
          v-model="password2"
          required
          type="password"
          maxlength="6"
        />
      </cl-cell>
    </div>
    <div class="handle">
      <cl-button :onclick="submit">确认</cl-button>
    </div>
  </div>
</template>

<script>
import clHeader from "../../components/common/clHeader";
import clCell from "../../components/common/cell/clCell";
import clButton from "../../components/common/button/clButton";
import { toast } from "./toast";
import { mapActions } from "vuex";
import { Indicator } from "mint-ui";
export default {
  components: {
    clHeader,
    clCell,
    clButton
  },
  data() {
    return {
      password1: "",
      password2: ""
    };
  },
  methods: {
    async submit() {
      if (!this.password1.match(/[0-9]{6}/)) {
        toast("密码必须是6位数字");
      } else if (this.password1 !== this.password2) {
        toast("两次密码不一致");
      } else {
        Indicator.open({
          snipperType: "triple-bounce"
        });
        await this.setPwd(this.password1);
        Indicator.close();
        toast("密码设置成功");
        this.$router.push("/");
      }
    },
    ...mapActions(["setPwd"])
  }
};
</script>

<style lang="less" scoped>
.form-group {
  margin-top: 30px;
  input {
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
}
.handle {
  text-align: center;
  margin-top: 60px;
}
</style>