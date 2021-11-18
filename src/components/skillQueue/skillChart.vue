<template>
  <div class="skillBox" ref="skillRef">
    <div class="importChart">
      <div id="mainSvg"></div>
    </div>
    <div class="mainChart">
      <el-row>
        <el-col>
          <el-radio-group v-model="chartType">
            <el-radio-button label="排队量"></el-radio-button>
            <el-radio-button label="服务量"></el-radio-button>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row>
        <div id="svgWrap">
          <span class="iconfont icon-shuangzuojiantousvg selectL"></span>
          <span class="iconfont icon-shuangyoujiantousvg selectR"></span>
        </div>
        <div class="barText">
          <div v-for="(item,index) in this.testData" :key="index" class="textBox" ref="textRef">
            <el-row class="text">{{ item.label }}</el-row>
            <el-row>
              <el-col :span="9">
                <span class="iconfont icon-daoru1"></span>
              </el-col>
              <el-col :span="9">
                <span class="number">{{ item.value }}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="9">
                <span class="iconfont icon-paiduizhong"></span>
              </el-col>
              <el-col :span="9">
                <span class="number">{{ item.value }}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="9">
                <span class="iconfont icon-yonghuming"></span>
              </el-col>
              <el-col :span="9">
                <span class="number">{{ item.value }}</span>
              </el-col>
            </el-row>
          </div>
        </div>
        <el-row class="legend">
          <el-col :span="8">
            <span class="iconfont icon-daoru1"></span>
            <span>签入坐席</span>
          </el-col>
          <el-col :span="8">
            <span class="iconfont icon-paiduizhong"></span>
            <span>排队中</span>
          </el-col>
          <el-col :span="8">
            <span class="iconfont icon-yonghuming" style="font-size: 18px"></span>
            <span>服务中</span>
          </el-col>
        </el-row>
      </el-row>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3'
// import * as d3Tip from 'd3-tip'
export default {
  name: "skillChart",
  data() {
    return {
      chartType: "排队量",
      textWith: 0,
      testData: [
        {label: '三星级哈哈哈', value: 100},
        {label: '三星级哈哈哈哈哈用户级技能队列2', value: 200},
        {label: '三星级哈哈哈哈哈用户级技能队列3', value: 300},
        {label: '三星级哈哈哈哈哈用户级技能队列4', value: 400},
        {label: '三星级哈哈哈哈哈用户级技能队列5', value: 500},
        {label: '三星级哈哈', value: 600},
        {label: '三星级哈哈哈哈哈用户级技能队列7', value: 710},
        {label: '三星级哈哈哈哈哈用户级技能队列8', value: 840},
        {label: '三星级哈哈哈哈哈用户级技能队列9', value: 900},
        {label: '三星级哈哈哈哈哈用户级技能队列0', value: 600},
        {label: '三星级哈', value: 300},
        {label: '三星级哈哈哈哈哈用户级技能队列12', value: 500},
        {label: '三星级哈哈哈哈哈用户级技能队列13', value: 800},
        {label: '三星级哈哈哈哈哈用户级技能队列14', value: 450},
        {label: '三星级哈哈哈哈哈用户级技能队列15', value: 320},
        {label: '三星级哈哈哈哈哈用户级技能队列16', value: 410},
        {label: '三星级哈哈哈哈哈用户级技能队列17', value: 640},
        {label: '三星级哈哈哈哈哈用户级技能队列18', value: 940},
        {label: '三星级哈哈哈哈哈用户级技能队列19', value: 940},
        {label: '三星级哈哈哈哈哈用户级技能队列20', value: 1040},
      ],
      rootData: [
        {
          name: '前置流程',
          status: true,
          value: 60,
          // children: [
          //   {
          //     name: "语音IVR",
          //     value: 354,
          //     status: true,
          //     children: [
          //       {title: 'T1', name: "服务量", value: 31, status: true,},
          //       {title: 'T1', name: "服务量", value: 31, status: true,},
          //       {
          //         title: 'T2', name: "服务量", value: 6, status: false,
          //         children: [
          //           {title: 'T51', name: "服务量", value: 5, status: true,},
          //           {title: 'T52', name: "服务量", value: 14, status: true,},
          //           {title: 'T53', name: "服务量", value: 21, status: true,},
          //           {title: 'T54', name: "服务量", value: 48, status: false,}
          //         ]
          //       },
          //       {title: 'T3', name: "服务量", value: 145, status: true,},
          //       {title: 'T4', name: "服务量", value: 81, status: true,},
          //       {
          //         title: 'T5',
          //         name: "服务量",
          //         value: 234,
          //         status: false,
          //         children: [
          //           {title: 'T51', name: "服务量", value: 5, status: true,},
          //           {title: 'T52', name: "服务量", value: 14, status: true,},
          //           {title: 'T53', name: "服务量", value: 21, status: true,},
          //           {title: 'T54', name: "服务量", value: 48, status: true,}
          //         ]
          //       },
          //       {title: 'T6', name: "语音导航312", value: 81, status: true,},
          //       {title: 'T8', name: "服务量", value: 312, status: true,},
          //       {title: 'T0', name: "服务量", value: 32, status: false,}
          //     ]
          //   },
          // ]
        },
        {
          name: '前置流程',
          status: true,
          value: 60,
          // children: [
          //   {
          //     name: "视频IVVR",
          //     value: 312,
          //     status: false,
          //   }
          // ]
        }
      ],
      hasChildNodeArr: [],
      chartConfig: ""
    }
  },
  methods: {
    drawChart() {
      let chartConfig = {margin: {top: 10, right: 5, bottom: 0, left: 30}}
      chartConfig.chartWidth = d3.select('#svgWrap')._groups[0][0].clientWidth;
      this.textWith = chartConfig.chartWidth / 20
      chartConfig.chartHeight = d3.select('#svgWrap')._groups[0][0].clientHeight;
      let svg = d3.select('#svgWrap')
          .append('svg')
          .attr('width', chartConfig.chartWidth)
          .attr('height', chartConfig.chartHeight)
      const g = svg.append("g").attr("id", "svgWrap")
          .attr('transform', 'translate(20,-10)');
      //设置x轴
      const xScale = d3.scaleBand()
          .range([0, chartConfig.chartWidth])
          .padding(0.5)
          .domain(this.testData.map(function (d) {
            return d.label
          }))
      //tickFormat自定义刻度值
      const xAxis = d3.axisBottom(xScale)
          //刻度与数值之间的间隙
          .tickPadding(10)
          .tickFormat(function (d) {
            // console.log(d)
            return d
          })
      g.append("g")
          .attr('transform', 'translate(0,' + chartConfig.chartHeight + ')')
          .call(xAxis)
          .selectAll("text")
          .attr("class", "axis")
          .attr("style", "display:none")
          .attr("font-size", "16px")
          .attr("fill", "#00A698")
      // 设置y轴
      const yScale = d3.scaleLinear()
          .range([chartConfig.chartHeight, 0])
          .domain([0, d3.max(this.testData, (d) => {
            return d.value
          })])

      g.selectAll('.bar') // 画柱图
          .data(this.testData)
          .enter()
          .append('rect')
          .attr('class', 'bar')
          .attr('fill', '#007AFF')
          .attr('x', function (d) {
            return xScale(d.label)
          })
          .attr('y', chartConfig.chartHeight) // 控制动画由下而上
          .on('click', (d) => {
            console.log(d)
            alert('点击的是柱子');
          })
          .attr('width', xScale.bandwidth())
          .attr('height', 0) // 控制动画由下而上
          .transition()
          .duration(200)
          .attr('y', function (d) {
            return yScale(d.value)
          })
          .attr('height', function (d) {
            return chartConfig.chartHeight - yScale(d.value)
          })
    },
    drawMainChart() {
      //初始化svg图表配置
      this.getConfig()
      //初始化节点坐标
      // this.initPosition(this.rootData)
      //判断当前节点下面有无子节点
      this.collapse(this.rootData)
      console.log(this.rootData)



      var mainSvg = d3.select("#mainSvg")
          .append("svg")
          .attr("width", this.chartConfig.chartWidth)
          .attr("height", this.chartConfig.chartHeight);
      console.log(mainSvg)

      let start = {x: 50, y: 50}
      let end = {x: 300, y: 100}
      this.drawLine(mainSvg, start, end)

    },
    //初始化图表配置
    getConfig() {
      let config = {margin: {top: 10, right: 5, bottom: 0, left: 30}}
      config.chartWidth = d3.select('#mainSvg')._groups[0][0].clientWidth;
      config.chartHeight = d3.select('#mainSvg')._groups[0][0].clientHeight;
      config.centralHeight = 0;
      config.centralWidth = config.chartWidth / 2;
      config.linkLength = 230;//连线长度
      config.duration = 500; //动画时间
      config.lineHeight = 100;
      config.boxWidth = 120;
      config.boxHeight = 40;
      this.chartConfig = config
    },
    //初始化每个节点坐标
    // initPosition() {
    //   let originPosition = [this.chartConfig.chartWidth / 2, 0]
    //   console.log(originPosition)
    //   // arr.map((item,index) => {
    //   //
    //   // })
    // },
    //画贝塞尔曲线
    drawLine(svgBox, sourcePosition, endPosition) {
      let dx = 10, dy = 50
      // cpx1:它是贝塞尔曲线控制点的x1坐标。
      // cpy1:它是贝塞尔曲线控制点的y1坐标。
      // cpx2:它是贝塞尔曲线控制点的x2坐标。
      // cpy2:它是贝塞尔曲线控制点的y2坐标。
      // x:它是端点的x坐标。
      // y:它是端点的y坐标。
      var path = d3.path();
      let cpx1 = sourcePosition.x - dx;
      let cpy1 = sourcePosition.y + dy;
      let cpx2 = endPosition.x + dx;
      let cpy2 = endPosition.y - dy;
      path.moveTo(sourcePosition.x, sourcePosition.y);
      path.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, endPosition.x, endPosition.y);
      // path.quadraticCurveTo(cpx2, cpy2, 500, 100);
      // path.bezierCurveTo(cpx2, cpy2, 500, 100);
      svgBox.append('path')
          .attr('d', path.toString())
          .style('fill', 'none')
          .style('stroke', 'red')
          .style('stroke-width', '2');
    },
    //判断当前节点下有无子节点
    collapse(arr) {
      arr.forEach((item) => {
        if (item.children && item.children.length != 0) {
          item.spread = true;
          this.hasChildNodeArr.push(item);   //将有子集的 d 记录到hasChildNodeArr 控制加号显示
          this.collapse(item.children)  //递归将所有子集的 记录到hasChildNodeArr
        }
      })

    }

  },
  mounted() {
    this.drawChart()
    // this.drawMainChart()
  }
}
</script>
<style lang="scss" scoped>
.skillBox {
  height: 100%;
  width: 100%;
  overflow: auto;

  .importChart {
    width: 100%;
    height: 80vh;
    border: 1px solid red;

    #mainSvg {
      width: 100%;
      height: 100%;
    }
  }

  .mainChart {
    padding: 20px;
    height: 75%;

    ::v-deep .el-radio-button__orig-radio:checked + .el-radio-button__inner {
      background-color: #16388D;
      border-color: #16388D;
    }

    ::v-deep .el-radio-button__inner {
      background-color: #000000;
      border-color: #394280;
      color: #fff;
    }


    #svgWrap {
      cursor: pointer;
      position: relative;
      width: 90%;
      height: 35vh;
      margin: 0 auto;
      margin-top: 20px;

      .selectL {
        position: absolute;
        top: 30%;
        left: -3%;
        font-size: 29px;
        color: #70ECFA;
        display: inline-block;
        vertical-align: center;
      }

      .selectR {
        position: absolute;
        top: 30%;
        right: -3%;
        font-size: 29px;
        color: #70ECFA;
        display: inline-block;
        vertical-align: center;
      }
    }

    .barText {
      cursor: pointer;
      width: 90%;
      padding-left: 3%;
      display: flex;
      justify-content: space-around;
      color: #00A698;
      font-size: 15px;
      margin: 0 auto;

      .textBox {
        flex: 20;
        justify-content: flex-start;
        flex-wrap: wrap;

        .text {
          height: 3.7vh;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2 !important;
          -webkit-box-orient: vertical;
          margin-bottom: 3px;
        }

        .number {
          color: #fff;
        }
      }
    }

    .legend {
      width: 20%;
      margin: 0 auto;
      margin-top: 10px;

      .iconfont {
        color: #00A698;
        margin-right: 5%;
      }
    }
  }
}
</style>
