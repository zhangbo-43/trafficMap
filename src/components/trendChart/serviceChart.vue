<template>
<div class="mainContent">
  <el-dialog
      modal-append-to-body
      :title=echartTitle
      :visible.sync="chartVisible"
      width="35%" :before-close="handleClose">
    <el-row class="timeSelect">
      <el-col :span="12">
        <span class="notice">注：虚线为选择日期的趋势线</span>
      </el-col>
      <el-col :span="12" style="text-align: right">
        <time-select></time-select>
      </el-col>
    </el-row>
    <Echart
        :options="options"
        id="windowChart"
        height="50vh"
        width="100%"
    >
    </Echart>
  </el-dialog>
</div>
</template>

<script>
import timeSelect from '@/components/timeRange.vue'
import Echart from '@/common/echart'
export default {
  name: "serviceChart",
  props: ['chartVisible'],
  components: {
    Echart,
    timeSelect
  },
  data() {
    return {
      echartTitle:"服务量趋势图",
      options: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        color: ["#0D90EA","red"],
        legend: {},
        toolbox: {
          show: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00', ]
        },
        // xAxis: {
        //   type:"time",
        //   axisLabel: {
        //     formatter: function (val) {
        //       var date= new Date(val)
        //       var texts=[date.getHours(),date.getMinutes()]
        //       return texts.join(":")
        //     }
        //   }
        // },
        yAxis: {
          type: 'value',
          axisLine : {
            show: false,
          },
          splitLine : {
            show: true,
            lineStyle: {
              type: 'solid',
              color: '#191D39'
            }
          },
          // axisLabel: {
          //   formatter: '{value} W'
          // },
          axisPointer: {
            snap: true
          }
        },
        // visualMap: {
        //   show: false,
        //   dimension: 0,
        //   pieces: [
        //     {
        //       lte: 6,
        //       color: 'green'
        //     },
        //     {
        //       gt: 6,
        //       lte: 8,
        //       color: 'red'
        //     },
        //     {
        //       gt: 8,
        //       lte: 14,
        //       color: 'green'
        //     },
        //     {
        //       gt: 14,
        //       lte: 17,
        //       color: 'red'
        //     },
        //     {
        //       gt: 17,
        //       color: 'green'
        //     }
        //   ]
        // },
        series: [
          {
            name: '节点服务量',
            type: 'line',
            lineStyle: {
              normal: {
                color: "#0D90EA"
              }
            },
            symbol: "circle",
            smooth: true,
            // prettier-ignore
            data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
            // markArea: {
            //   itemStyle: {
            //     color: 'rgba(255, 173, 177, 0.4)'
            //   },
            //   data: [
            //     [
            //       {
            //         name: 'Morning Peak',
            //         xAxis: '07:30'
            //       },
            //       {
            //         xAxis: '10:00'
            //       }
            //     ],
            //     [
            //       {
            //         name: 'Evening Peak',
            //         xAxis: '17:30'
            //       },
            //       {
            //         xAxis: '21:15'
            //       }
            //     ]
            //   ]
            // }
          },
          {
            name: '节点异常挂断量',
            type: 'line',
            smooth: true,
            symbol: "circle",
            itemStyle: {
              normal: {
                lineStyle: {
                  type: "dashed",
                  normal: {
                    color: "red"
                  }
                }
              }
            },
            data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 350, 390, 400, 500, 600, 750, 800, 389, 290, 500],
          },
        ]
      }
    }
  },
 methods: {
   handleClose() {
     this.$emit("closeDialog",false)
   }
 }
}
</script>

<style lang="scss" scoped>
.mainContent {
  //position: relative;
  .timeSelect {
    cursor: pointer;
    z-index: 9999;
    .notice {
      font-size: 17px;
      font-weight: 700;
    }
    //position: absolute;
    //top: 14%;
    //right: 15%;
  }
}
::v-deep .el-dialog {
  background-color: #070B47;
}
::v-deep .el-dialog__header {
  border-bottom: 1px solid #2773FF;
}
::v-deep .el-dialog__title {
  color: #2773FF;
}
::v-deep .el-dialog__close {
  color: #2773FF;
}
</style>
