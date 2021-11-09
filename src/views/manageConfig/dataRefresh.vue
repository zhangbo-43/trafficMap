<template>
  <Intervalconfigtable :configTableData="configTableData"></Intervalconfigtable>
</template>

<script>

import Intervalconfigtable from "./intervalConfigTable.vue";
export default {
  name: "dataRefresh",
  data() {
    return {
      configTableData: {
        name: "数据刷新配置",
        effect: "设置数据刷新频次",
        annotation: "注：数据刷新频次设置后，次日生效",
        buttonName: "调整数据刷新时间",
        column: {
          interval: "数据刷新区间",
          setPerson: "设置人",
          setTime: "设置时间",
        },
        alertTitle: "设置数据刷新频次",
      },
    };
  },
  components: {
    Intervalconfigtable,
  },
};
</script>

<style scoped>
</style>
