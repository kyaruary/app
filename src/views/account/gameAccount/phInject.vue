<template>
  <div class="container con-p-20-15">
    <cl-header title="体力记录">
      <span slot="right" @click="recharge">充值</span>
    </cl-header>
    <div class="swiper">
      <cell-list :click="getRechargeValue" :limit="rest"></cell-list>
    </div>
    <inject-modal :visible="modalVisible" :ph="rechargeValue" :onclose="closeModal"></inject-modal>
  </div>
</template>

<script>
import clHeader from "../../../components/common/clHeader";
import cellList from "../../../components/common/cell/cellList";
import injectModal from "../../../components/modal/injectModal";
import { mapState } from "vuex";
export default {
  components: {
    clHeader,
    cellList,
    injectModal
  },
  data() {
    return {
      modalVisible: false,
      rechargeValue: 0
    };
  },
  methods: {
    recharge() {
      if (this.rechargeValue === null) {
        return false;
      }
      this.modalVisible = true;
    },
    getRechargeValue(value) {
      this.rechargeValue = value;
    },
    closeModal() {
      this.modalVisible = false;
    }
  },
  computed: {
    ...mapState(["bill"]),
    rest() {
      return 9000 - this.bill.detail.ph;
    }
  }
};
</script>

<style lang="less" scoped>
.swiper {
  margin-top: 20px;
}
</style>