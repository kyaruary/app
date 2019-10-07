<template>
  <div class="container con-p-20-15">
    <cl-header title="修改交易密码"></cl-header>
    <div class="form-group">
      <cl-cell :gutter="10" :height="30">
        <span slot="left">原交易密码</span>
      </cl-cell>
      <cl-cell :gutter="20">
        <input
          slot="left"
          placeholder="原交易密码"
          v-model="old_password"
          type="password"
          maxlength="6"
          required
        />
      </cl-cell>

      <cl-cell :gutter="10" :height="30">
        <span slot="left">新交易密码</span>
      </cl-cell>
      <cl-cell :gutter="20">
        <input
          slot="left"
          placeholder="新交易密码"
          v-model="new_password1"
          type="password"
          maxlength="6"
          required
        />
      </cl-cell>

      <cl-cell :gutter="10" :height="30">
        <span slot="left">重复新交易密码</span>
      </cl-cell>
      <cl-cell :gutter="20">
        <input
          slot="left"
          placeholder="重复输入新交易密码"
          v-model="new_password2"
          type="password"
          maxlength="6"
          required
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
import { resetPassword } from "../../service/password";
import { Indicator } from "mint-ui";
import { toast } from "./toast";
import { format } from "path";
export default {
  components: {
    clHeader,
    clCell,
    clButton
  },
  data() {
    return {
      old_password: "",
      new_password1: "",
      new_password2: ""
    };
  },
  methods: {
    async submit() {
      if (
        !this.new_password1.match(/[0-9]{6}/) ||
        !this.old_password.match(/[0-9]{6}/)
      ) {
        toast("密码必须是6位数字");
      } else if (this.new_password1 !== this.new_password2) {
        toast("两次密码不一致");
      } else {
        Indicator.open({
          snipperType: "triple-bounce"
        });
        await resetPassword(this.old_password, this.new_password1);
        Indicator.close();
        toast("密码修改成功");
        this.$router.push("/");
      }
    }
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