<template>
  <div class="modal-container" v-show="visible">
    <div class="modal-dis" v-show="loading">
      <pwd-message
        :title="title"
        :desc="desc"
        :count="ph"
        :list="password"
        :onclose="closeHandle"
        v-if="visible"
      >
        <slot></slot>
      </pwd-message>
    </div>
    <keypad :visible="loading" :onclick="getPassword" :ondelete="deletePassword" />
  </div>
</template>

<script>
import keypad from "../common/keypad/keypad";
import pwdMessage from "../common/passwordMessage/passwordMessage";
export default {
  data() {
    return {
      password: []
    };
  },
  components: {
    keypad,
    pwdMessage
  },
  props: {
    ph: {
      type: Number | String,
      default: 0
    },
    title: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    },
    onclose: {
      type: Function,
      default() {
        return () => false;
      }
    },
    visible: {
      type: Boolean,
      default: false
    },
    onfinish: {
      type: Function,
      default() {
        return () => false;
      }
    },
    loading: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    getPassword(num) {
      if (this.password.length >= 0 && this.password.length < 5) {
        this.password.push(num);
      } else if (this.password.length === 5) {
        this.password.push(num);
        this.onfinish(this.password.join(""));
        this.password = [];
      } else {
        return false;
      }
    },
    deletePassword() {
      this.password.pop();
    },
    closeHandle() {
      this.password = [];
      this.onclose();
    }
  }
};
</script>

<style lang="less" scoped>
.modal-container {
  position: absolute;
  right: 0;
  z-index: 999;
  left: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  .modal-dis {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 200px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>