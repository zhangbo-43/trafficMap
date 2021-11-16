<template>
  <div>
    <!-- 热线话务历史趋势 -->
    <Echart
      :options="options"
      id="topRightChart"
      height="242px"
      width="100%"
    ></Echart>
  </div>
</template>
<script>
import Echart from '@/common/echart'
import bar1 from '@/assets/101.png'
import bar2 from '@/assets/202.png'
// 这里是echart要求的格式之一
const BAR1 = 'image://' + bar1
const BAR2 = 'image://' + bar2
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
      handler () {
        this.options = {
            color: ['#B830C9','#0A77E4'], 
            // title: [{
            //   text: '{name|' + 总量 + '}\n{val|' +666 + '}',
            //   top: 'center',
            //   left: 'center',
            //   textStyle: {
            //       rich: {
            //           name: {
            //               fontSize: 14,
            //               fontWeight: 'normal',
            //               color: '#999',
            //               padding: [10, 0]
            //           },
            //           val: {
            //               fontSize: 32,
            //               fontWeight: 'bold',
            //               color: '#fff',
            //           }
            //       }
            //   }
            // }],
            tooltip: {
              show:false,  //关闭悬浮提示
              trigger: 'item'
            },
            legend: {
              icon:'circle',
              top: '10%',
              right:'0',
            },
            grid: {
            top: "25%",
            bottom: "5%",
            left: "50%",
            containLabel: true
            },
            xAxis: [{
              type: "category",
              data: ["按键异常", "服务异常"],
              axisTick: {               //坐标轴刻度相关设置
                  alignWithLabel: true
              },
              nameTextStyle: {         //坐标轴名称的文字样式
                  color: "#82b0ec"
              },
              axisLine: {            //坐标轴轴线设置
                  show: false,
                  lineStyle: {
                      color: "#82b0ec"
                  }
              },
              axisLabel: {     //坐标轴刻度标签的相关设置
                  textStyle: {
                      color: "#fff"
                  },
                  margin: 30
              }
          }],
            yAxis: [{
                show: false,
                type: "value"
            }],
            series: [
              {
                name:'异常挂断',
                type: 'pie',
                center: ['30%', '50%'],
                radius: ['50%', '65%'],
                avoidLabelOverlap: false,
                label: {
                  normal:{
                  show: true,
                  position: 'center',
                  formatter:function(){
                    return '{a|异常总量}\n{b|245}'
                   },
                  rich:{
                     a:{
                       color:'#999',
                       fontSize:18,
                       padding:5
                     },
                     b:{
                       color:"#fff",
                       fontSize:24
                     }
                   }
                  }
                },
                labelLine: {
                    normal: {  //label线不显示
                      show: true
                    }
                 },
                emphasis: {
                    show: true,
                    textStyle:{
                    fontSize: '20',
                    fontWeight: 'bold'
                    }
                 }, 
                data: [
                  { value: 248, name: '服务异常' },
                  { value: 735, name: '按键异常' },
                ]
              },{
                name:'异常挂断',
                type: 'pie',
                center: ['30%', '50%'],
                radius: ['50%', '65%'],
                avoidLabelOverlap: false,
                label: {
                  normal:{
                  show: true,
                  color:'#fff',
                  position: 'outside',
                  // padding: [0, -20],
                  formatter:function(d){
                    return  d.name+'\n'+d.value
                   },
                  }
                },
                labelLine: {
                   overflow:'breakAll',
                    normal: {   
                      show: true
                    }
                 },
                emphasis: {
                    show: true,
                    textStyle:{
                    fontSize: '20',
                    fontWeight: 'bold'
                    }
                 }, 
                data: [
                  { value: 248, name: '服务异常' },
                  { value: 735, name: '按键异常' },
                ]
              },
            {
                name: '',
                type: 'pictorialBar',
                symbolSize: ['500%', '30'],
                symbolOffset: [50, 12],
                z: 10,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderColor: '#0086DB',
                        borderType: 'solid',
                        opacity:0.4,
                        borderWidth: 2
                    },
                },
                data: [350],
            },
            {
                name: '',
                type: 'pictorialBar',
                symbolMargin:'20',
                // symbolBoundingData:600,
                barWidth: "30",
                label: {
                  normal:{
                  show: true,
                  color:'#fff',
                  position: 'top',
                  // padding: [0, -20],
                  // formatter:function(d){
                  //   return  d.name+'\n'+d.value
                  //  },
                  }
                },
                labelLine: {
                  length: 10,
                  length2: 15,
                  maxSurfaceAngle: 80,
                  lineStyle:{
                      color:'red'
                   }
                },
                data: [{value:350,symbol:BAR1,symbolClip: true}, {value: 198,symbol:BAR2,symbolClip: true}],
            }
            // {
            //     type: 'bar',
            //     //silent: true,
            //     barWidth: "40",
            //     barGap: '10%',    // Make series be overlap
            //     barCateGoryGap: '10%',
            //     data: [350,198],
            // }
            ]
        }
      },
      immediate: true,
      deep: true
    },
  },
}
</script>