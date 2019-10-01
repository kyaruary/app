<template>
  <div class="info-container container">
    <cl-header>
      <span slot="right" @click="onSave">保存</span>
    </cl-header>
    <div class="s-cell m-t-30 f-s-15" @click="show">
      <mt-cell title="头像">
        <img :src="user.avator" class="user-avator" />
      </mt-cell>
    </div>
    <div class="s-cell m-t-20 f-s-15">
      <mt-cell title="用户名">
        <input
          type="text"
          v-model="user.username"
          class="username-ipt"
          @click="moveCursor"
          maxlength="7"
          minlength="3"
          id="change-user-name"
        />
      </mt-cell>
    </div>
    <div class="s-cell m-t-20 f-s-15">
      <mt-cell title="ID">
        <span class="f-c-b">{{user.userId}}</span>
      </mt-cell>
    </div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
  </div>
</template>

<script>
import clHeader from "../../components/common/clHeader";
import { mapState } from "vuex";
export default {
  components: {
    clHeader
  },
  data() {
    return {
      sheetVisible: false,
      actions: [
        {
          name: "拍照",
          method: () => {
            console.log("拍照");
          }
        },
        {
          name: "从相册中选择",
          method: () => {
            console.log("选择");
          }
        }
      ]
    };
  },
  methods: {
    onSave() {
      console.log(this.user.username);
    },
    show() {
      this.sheetVisible = true;
    },
    moveCursor() {
      var el = document.getElementById("change-user-name");
      console.log(this.user.username.length);
      el.setSelectionRange(
        this.user.username.length,
        this.user.username.length + 1
      );
    }
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>

<style lang="less" scoped>
.info-container {
  padding: 20px 15px;
}
.username-ipt {
  border: none;
  outline: none;
  max-width: 150px;
  text-align: right;
  margin: 0;
  padding: 0;
  min-height: 48px; /*no*/
}
.user-avator {
  height: 30px;
  width: 30px;
  overflow: hidden;
}
</style>