<template>
  <div class="container con-p-20-15">
    <cl-header title="体力记录">
      <span slot="right" @click="recharge">充值</span>
    </cl-header>
    <div class="swiper">
      <!-- <cell-list :limit="6888"></cell-list> -->
      <video></video>
    </div>
    <keypad :visible="keypadVisible" :click="getValue" />
  </div>
</template>

<script>
import clHeader from "../../../components/common/clHeader";
import cellList from "../../../components/common/cell/cellList";
import keypad from "../../../components/common/keypad/keypad";
export default {
  components: {
    clHeader,
    cellList,
    keypad
  },
  data() {
    return {
      keypadVisible: false
    };
  },
  methods: {
    getValue(num) {
      console.log(num);
    },
    recharge() {
      //   this.keypadVisible = !this.keypadVisible;
      let constraints = {
        video: { width: 500, height: 500 },
        audio: true
      };
      let promise = navigator.mediaDevices.getUserMedia(constraints);
      promise
        .then(function(MediaStream) {
          video.srcObject = MediaStream;
          video.play();
        })
        .catch(function(PermissionDeniedError) {
          console.log(PermissionDeniedError);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.swiper {
  margin-top: 20px;
}
</style>