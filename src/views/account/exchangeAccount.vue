<template>
  <div class="container con-p-20-15">
    <cl-header title="切换账户">
      <span slot="right">确定</span>
    </cl-header>
    <div class="cell-list-container">
      <cl-cell
        v-for="(item,index) in userList"
        :key="item.secret"
        type="single"
        :choose="item.name === user.username"
        :gutter="index != userList.length-1 ? 20:0"
        :cb="()=>{chooseItem(item.name,item.secret)}"
      >
        <div slot="left" class="left">
          <div class="avator"></div>
          <span>{{item.name}}</span>
        </div>
      </cl-cell>
    </div>
    <div class="new-account" @click="()=>{this.$router.push('/login')}">新增账户</div>
  </div>
</template>

<script>
import clHeader from "../../components/common/clHeader";
import clCell from "../../components/common/cell/clCell";
import { mapState } from "vuex";
export default {
  components: {
    clHeader,
    clCell
  },
  data() {
    return {
      userList: [],
      choosed: ""
    };
  },
  mounted() {
    const userListObj = JSON.parse(window.localStorage.getItem("userList"));
    for (let key in userListObj) {
      this.userList.push({
        name: key,
        secret: key + window.localStorage.getItem(key + "secret")
      });
    }
  },
  methods: {
    chooseItem(name, secret) {
      if (this.user.username === name) {
        // 选择当前账号无效
        return false;
      }
    }
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>

<style lang="less" scoped>
.cell-list-container {
  margin-top: 20px;
  .left {
    display: flex;
    align-items: center;
    .avator {
      .square(30px);
      border-radius: 50%;
      background-color: red;
      margin-right: 10px;
    }
  }
}
.new-account {
  position: fixed;
  bottom: 30px;
  width: 100%;
  text-align: center;
  font-size: 14px;
}
</style>