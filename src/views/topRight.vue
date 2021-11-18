<template>
  <div id="topRight">
      <div class="top-right-title">
          <span class="">异常挂断情况</span>
      </div>
     <el-row class="time-frame">
      <el-col :span="24">
        <span class="set-time active"  @click="handleTimeChange($event, 'time30')">30分钟</span>
        <span class="set-time"  @click="handleTimeChange($event, 'time60')">60分钟</span>
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
import timeSelect from '@/components/timePoint.vue'
export default {
  components: {
    TopRightChart,
    timeSelect
  },
  methods: { 
      // 切换要显示的时间
    handleTimeChange(e, show) {
      document.getElementsByClassName("active")[0].classList.remove("active");
      let target = e.target;
      // if (!e.target.children.length) {
      //   target = e.target.parentNode;
      // }
      target.classList.add("active");
      if (show == "time30") {
         console.log('time30')
      } else if (show == "time60") {
        console.log('time60')
      }
    },
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