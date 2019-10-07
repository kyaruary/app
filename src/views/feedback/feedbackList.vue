<template>
  <div class="container con-p-20-15">
    <cl-header></cl-header>
    <div class="list-con">
      <div class="feedback-list">
        <div class="list-group" v-for="item in list" :key="item.question">
          <div class="question">
            <span>{{item.question}}</span>
          </div>
          <div v-if="item.state == '1'" class="answer">
            <span>{{item.answer}}</span>
          </div>
          <div v-else class="not-yet">
            <span>未回复</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import clCell from "../../components/common/cell/clCell";
import clHeader from "../../components/common/clHeader";
import { getFeedbackList } from "../../service/feedback";
export default {
  components: {
    clCell,
    clHeader
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      this.list = await getFeedbackList();
    }
  },
  data() {
    return {
      list: []
    };
  }
};
</script>

<style lang="less" scoped>
.list-con {
  height: 100%;
  margin-top: 30px;
  overflow-y: hidden;
  overflow-x: visible;
  margin: 0 -15px;
  .feedback-list {
    height: calc(100% - 64px);
    overflow: scroll;
    padding: 30px 15px 0;
    &::-webkit-scrollbar {
      width: 0;
      display: none;
    }
    .question,
    .answer,
    .not-yet {
      @cell_box-shadow();
      min-height: 50px;
      display: flex;
      align-items: center;
      border-radius: 14px;
      font-size: 14px;
      padding: 0 15px;
    }
    .question {
      margin-bottom: 10px;
    }
    .answer {
      color: @main_color;
      margin-bottom: 20px;
      line-height: 26px;
    }
    .not-yet {
      color: @sec_color;
      opacity: 0.2;
      margin-bottom: 20px;
    }
  }
}
</style>