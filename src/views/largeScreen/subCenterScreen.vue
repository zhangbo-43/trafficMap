<template>
<div class="mainScreen">
  <div class="centerChart">
    假装流程图已经出来了
  </div>
  <div class="bottomChart">
    <skill-chart></skill-chart>
  </div>
</div>
</template>

<script>
import skillChart from "../../components/skillQueue/skillChart";
export default {
  name: "subCenterScreen",
  components: {
    skillChart
  }
}
</script>

<style lang="scss" scoped>
.mainScreen {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/pageBg.png");
  background-size: cover;
  background-position: center center;
  padding: 20px;
  .centerChart {
    height: 55vh;
  }
}
</style>
