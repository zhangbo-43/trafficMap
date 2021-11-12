<template>
  <div>
    <!-- 热线话务历史趋势 -->
    <Echart
      :options="options"
      id="bottomLeftChart"
      height="260px"
      width="100%"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  data () {
    return {
      options: {},
    };
  },
  components: {
    Echart,
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({})
    },
  },
  watch: {
    cdata: {
      handler (newData) {
        this.options = {
          color: ['#C33DC7'],
          title: {
            text: '话务总量',
            top:0,
            left:0,
            padding:8,
            backgroundColor:'#394280',
            textStyle: {
            fontSize: 17,
            align: 'center',
            fontFamily:'PingFangSC-Light',
            fontWeight:'lighter',
            width: 84,
            height:34,
            color:'#F4F5F8'
            },
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          // legend: {
          //   left :'center',
          //   data: ['BICC', 'ISBC', 'RTC'],
          //   icon: "circle",
          //   padding:8,
          //   itemWidth: 11,
          //   textStyle: {
          //   fontSize: 17
          //   },
          // },
          grid: {
            top:'50',
            left: '0',
            right: '10',
            bottom: '0',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: newData.category,
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            // {
            //   name: 'BICC',
            //   type: 'line',
            //   // stack: 'Total',        //数据堆叠
            //   smooth: true,          //是否平滑曲线显示
            //   lineStyle: {
            //     width: 0.6
            //   },
            //   showSymbol: false,
            //   z:1,
            //   areaStyle: {
            //     opacity: 0.8,
            //     color: {
            //           type: 'linear',
            //           x: 0,
            //           y: 0,
            //           x2: 0,
            //           y2: 1,
            //           colorStops: [{
            //               offset: 0, color: 'rgba(13, 144, 234, 0.5)', // 0% 处的颜色
            //           }, {
            //               offset: 1, color: 'rgba(13, 144, 234, 0)' // 100% 处的颜色
            //           }],
            //           global: false // 缺省为 false
            //         }
            //    },
            //   emphasis: {
            //     focus: 'series'
            //   },
            //   data: [40, 32, 91, 64, 90, 40, 100]
            // },
            // {
            //   name: 'BICC',
            //   type: 'line',
            //   // stack: 'Total',
            //   smooth: true,
            //   lineStyle: {
            //     type: "dashed",
            //     width: 0.6
            //   },
            //   showSymbol: false,
            //   z:1,
            //   emphasis: {
            //     focus: 'series'
            //   },
            //   data: [90, 82, 51, 14, 40, 90, 50,90, 82, 51, 14, 40, 90, 50,90, 82, 51, 14, 40, 90, 50, 40, 90, 50]
            // },
            // {
            //   name: 'ISBC',
            //   type: 'line',
            //   // stack: 'Total',
            //   smooth: true,
            //   lineStyle: {
            //     width: 0.6
            //   },
            //   showSymbol: false,
            //   z:2,
            //   areaStyle: {
            //     opacity: 0.8,
            //     color: {
            //           type: 'linear',
            //           x: 0,
            //           y: 0,
            //           x2: 0,
            //           y2: 1,
            //           colorStops: [{
            //               offset: 0, color: 'rgba(199, 126, 62, 0.5)', // 0% 处的颜色
            //           }, {
            //               offset: 1, color: 'rgba(199, 126, 62, 0)' // 100% 处的颜色
            //           }],
            //           global: false // 缺省为 false
            //         }
            //   },
            //   emphasis: {
            //     focus: 'series'
            //   },
            //   data: [120, 182, 111, 134, 200, 140, 110]
            // },
            // {
            //   name: 'ISBC',
            //   type: 'line',
            //   // stack: 'Total',
            //   smooth: true,
            //   lineStyle: {
            //     type: "dashed",
            //     width: 0.6
            //   },
            //   showSymbol: false,
            //   z:2,
            //   emphasis: {
            //     focus: 'series'
            //   },
            //   data: [190, 192, 191, 194, 220, 190, 190,190, 192, 191, 194, 220, 190, 190,190, 192, 191, 194, 220, 190, 190, 220, 190, 190]
            // },
            {
              name: '话务总量',
              type: 'line',
              // stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 1
              },
              showSymbol: false,
              z:3,
              areaStyle: {
                opacity: 0.8,
                color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [{
                          offset: 0, color: 'rgba(195, 61, 199, 0.5)', // 0% 处的颜色
                      }, {
                          offset: 1, color: 'rgba(195, 61, 199, 0)' // 100% 处的颜色
                      }],
                      global: false // 缺省为 false
                    }
              },
              emphasis: {
                focus: 'series'
              },
              data: [220, 232, 201, 334, 290, 230, 320]
            },
            {
              name: '话务总量',
              type: 'line',
              // stack: 'Total',
              smooth: true,
              lineStyle: {
                type: "dashed",
                width: 1
              },
              showSymbol: false,
              z:3,
              emphasis: {
                focus: 'series'
              },
              data: [300, 402, 301, 404, 400, 300, 290,310, 402, 301, 404, 400, 300, 290,310, 402, 301, 404, 400, 300, 290, 400, 300, 290]
            }
          ]
        }
      },
      immediate: true,
      deep: true
    },
  },
}
</script>