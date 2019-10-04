<template>
  <div
    class="edit-div"
    v-html="innerText"
    :contenteditable="canEdit"
    @focus="isLocked = true"
    @blur="onBlur"
    @input="changeText"
    @click="onClick"
  ></div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "editDiv",
  props: {
    value: {
      type: String,
      default: ""
    },
    canEdit: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      innerText: this.value,
      isLocked: false
    };
  },
  watch: {
    value() {
      if (!this.isLocked && !this.innerText) {
        this.innerText = this.value;
      }
    }
  },
  methods: {
    changeText() {
      this.$emit("input", this.$el.innerText);
    },
    onClick() {
      if (this.innerText === "请输入您的建议") {
        this.innerText = "";
        this.$emit("input", this.innerText);
      }
    },
    onBlur() {
      this.isLocked = false;
      if (this.value === "") {
        this.innerText = "请输入您的建议";
        this.$emit("input", this.$el.innerText);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.edit-div {
  width: 100%;
  min-height: 50px;
  overflow: auto;
  word-break: break-all;
  outline: none;
  user-select: text;
  white-space: pre-wrap;
  text-align: left;
  box-sizing: border-box;
  padding: 18px 15px 10px;
  border-radius: 14px;
  @cell_box-shadow();
  font-size: 14px;
  line-height: 1.1em;
  color: @main_color;
  &[contenteditable="true"] {
    &:empty:before {
      content: attr(placeholder);
      display: block;
      color: #ccc;
    }
  }
}
</style>
