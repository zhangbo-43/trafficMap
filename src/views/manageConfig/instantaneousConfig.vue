<template>
  <div>
    <Intervalconfigtable
      :configTableData="configTableData"
    ></Intervalconfigtable>
  </div>
</template>

<script>
import Intervalconfigtable from "./intervalConfigTable.vue";
export default {
  name: "instantaneousConfig",
  data() {
    return {
      configTableData: {
        name: "瞬时区间配置",
        effect: "设置全网瞬时服务量数据区间",
        annotation: "注：瞬时数据区间设置后，次日生效",
        buttonName: "调整瞬时区间",
        column: {
          interval: "数据刷新时间",
          setPerson: "设置人",
          setTime: "设置时间",
        },
        alertTitle:'调整瞬时数据区间（单位：秒）'
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
