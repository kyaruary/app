<template>
  <div id="app">
    <ul>
      <li v-for="item in data" :key="item + '/data'">{{item}}</li>
    </ul>
    <router-view />
  </div>
</template>

<script>
import { apiTest } from "./service/test";
export default {
  data() {
    return {
      data: []
    };
  },
  async mounted() {
    const data = await apiTest();
    this.data = data.data;
  }
};
</script>>

<style>
</style>
