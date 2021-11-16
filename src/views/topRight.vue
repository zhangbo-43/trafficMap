<template>
  <div id="topRight">
      <div class="top-right-title">
          <span class="">异常挂断情况</span>
      </div>
     <el-row class="time-frame">
      <el-col :span="24">
        <span class="set-time active">30分钟</span>
        <span class="set-time">60分钟</span>
      </el-col>
    </el-row>
      <div class="timeSelect">
        <time-select></time-select>
      </div>
      <div>
        <TopRightChart />
      </div>
  </div>
</template>

<script>
import TopRightChart from "@/components/echart/top/topRightChart";
import timeSelect from '@/components/timeRange.vue'
export default {
  components: {
    TopRightChart,
    timeSelect
  }
};
</script>

<style lang="scss" class>
$box-height: 100%;
$box-width: 100%;
#topRight{
  padding: 29px 23px;
  height: $box-height;
  width: $box-width;
  position: relative;
  .top-right-title {
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
  .time-frame{
    text-align: center;
  }
  .time-frame .set-time{
    cursor: pointer;
    font-size: 16px;
    padding:8px;
    background-color: #030517;
    border: 1px solid #16398C;
  }
  .time-frame .active{
    background-color: #16398C;
    border: 1px solid #16398C;
  }  
}
</style>