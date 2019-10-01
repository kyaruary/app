<template>
  <div></div>
</template>

<script>
import { AnimationFactory } from "../../util/snow";
export default {
  data() {
    return {
      af: null
    };
  },
  mounted() {
    this.af = new AnimationFactory();
    this.af.animate();
  },
  destroyed() {
    this.af ? this.af.destoryAnimation() : false;
  }
};
</script>