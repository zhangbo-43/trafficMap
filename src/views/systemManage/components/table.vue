<template>
  <div class="table">
    <div class="table-title">
        <span class="table-name">{{ config.tableTitle }}</span>
        <!-- <el-button
          type="primary"
          size="small"
          plain
          @click="addPersonClick"
          v-if="config.buttonName"
          >{{ config.buttonName }}</el-button
        > -->
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        columns:['config']
    };
  },
  props: [],

  mounted() {
    // this.columns = Object.keys(this.tableColumn);
   
  },
  updated() {
  },
  watch: {},
};
</script>

<style>
</style>
