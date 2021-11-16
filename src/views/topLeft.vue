<template>
  <div id="topLeft">
      <div class="top-left-title">
          <span class="">热线话务历史趋势</span>
      </div>
      <div class="timeSelect">
        <time-select></time-select>
      </div>
      <div>
        <TopLeftChart />
      </div>
  </div>
</template>

<script>
import TopLeftChart from "@/components/echart/top/topLeftChart";
import timeSelect from '@/components/timeRange.vue'
export default {
  components: {
    TopLeftChart,
    timeSelect
  }
};
</script>

<style lang="scss" class>
$box-height: 100%;
$box-width: 100%;
#topLeft{
  padding: 29px 23px;
  height: $box-height;
  width: $box-width;
  position: relative;
  .top-left-title {
    font-size: 18px;
    position: absolute;
    top: -10px;
    left:32px;
    color: #41BEFF;
  }
  .timeSelect {
    cursor: pointer;
    z-index: 99;
    position: absolute;
    top: 29px;
    right:23px;
  }
}
 
</style>