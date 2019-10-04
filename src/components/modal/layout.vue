<template>
  <div class="modal-container" v-if="visible">
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
    <keypad :visible="true" :onclick="getPassword" :ondelete="deletePassword" />
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
      type: Number,
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
    }
  },
  methods: {
    getPassword(num) {
      if (this.password.length >= 0 && this.password.length < 5) {
        this.password.push(num);
      } else if (this.password.length === 5) {
        this.password.push(num);
        this.onfinish(this.password.join(""));
      } else {
        throw "";
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
  background-color: rgba(0, 0, 0, 0.7);
}
</style>