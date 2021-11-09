<template>
<Intervalconfigtable :configTableData="configTableData"></Intervalconfigtable>
</template>

<script>
import Intervalconfigtable from "./intervalConfigTable.vue";

export default {
  name: "abnormalDataConfig",
  data() {
    return {
      configTableData: {
        name: "异常数据区间配置",
        effect: "设置全网异常挂断及异常接口瞬时数据区间",
        annotation: "注：瞬时数据区间设置后，次日生效",
        buttonName: "调整瞬时区间",
        column: {
          interval: "数据刷新时间",
          setPerson: "设置人",
          setTime: "设置时间",
        },
        alertTitle: "调整瞬时数据区间（单位：秒）",
      },
    };
  },
  components: {
    Intervalconfigtable,
  },
}
</script>

<style scoped>

</style>
