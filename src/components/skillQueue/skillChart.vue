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
      rootData: {
        "downward": {
          "direction": "downward",
          "name": "集成电路",
          "children": [
            {
              "name": "异方性导电胶膜",
              "amount": "100",
              "ratio": "55%",
              "hasHumanholding": true,
              "hasChildren": true,
              "isExpand": false,
              "children": [
                {
                  "name": "异方性导电胶",
                  "hasHumanholding": false,
                  "hasChildren": true,
                  "amount": "100",
                  "ratio": "55%",
                  "children": []
                },
                {
                  "name": "异方性导电",
                  "hasHumanholding": false,
                  "hasChildren": true,
                  "amount": "100",
                  "ratio": "55%",
                  "children": []
                }
              ]
            },
            {
              "name": "异方性导电1",
              "amount": "100",
              "ratio": "55%",
              "hasHumanholding": true,
              "hasChildren": true,
              "isExpand": false,
              "children": [
                {
                  "name": "异方性导电2",
                  "hasHumanholding": false,
                  "hasChildren": true,
                  "amount": "100",
                  "ratio": "55%",
                  "children": []
                },
                {
                  "name": "异方性导电3",
                  "hasHumanholding": false,
                  "hasChildren": true,
                  "amount": "100",
                  "ratio": "55%",
                  "children": []
                }
              ]
            },
            {
              "name": "异方性导电胶膜1",
              "amount": "100",
              "ratio": "55%",
              "hasHumanholding": true,
              "hasChildren": true,
              "isExpand": false,
              "children": [
                {
                  "name": "异方性导电12",
                  "hasHumanholding": false,
                  "hasChildren": true,
                  "amount": "100",
                  "ratio": "55%",
                  "children": []
                },
                {
                  "name": "异方性导电13",
                  "hasHumanholding": false,
                  "hasChildren": true,
                  "amount": "100",
                  "ratio": "55%",
                  "children": []
                }
              ]
            },
            {
              "name": "异方性导电胶16",
              "hasHumanholding": false,
              "hasChildren": true,
              "amount": "100",
              "ratio": "55%",
              "children": []
            },
            {
              "name": "异方性导电19",
              "hasHumanholding": false,
              "hasChildren": true,
              "isExpand": false,
              "amount": "100",
              "ratio": "55%",
              "children": [
                {
                  "name": "异方性导电20",
                  "hasHumanholding": false,
                  "amount": "100",
                  "ratio": "55%",
                  "children": []
                },
                {
                  "name": "异方性1",
                  "hasHumanholding": false,
                  "amount": "100",
                  "ratio": "55%",
                  "children": []
                },
                {
                  "name": "异方性导电5",
                  "hasHumanholding": false,
                  "amount": "100",
                  "ratio": "55%",
                  "children": []
                },
                {
                  "name": "sdafad",
                  "hasHumanholding": false,
                  "amount": "100",
                  "ratio": "55%",
                  "children": []
                }
              ]
            }
          ]
        },
      },
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
      ]
    }
  },
  methods: {
    drawChart() {
      let chartConfig = {margin: {top: 10, right: 5, bottom: 0, left: 30}}
      chartConfig.chartWidth = d3.select('#svgWrap')._groups[0][0].clientWidth;
      this.textWith = chartConfig.chartWidth / 20
      chartConfig.chartHeight = d3.select('#svgWrap')._groups[0][0].clientHeight;

      // let zoom = d3.behavior.zoom().scaleExtent([0.5, 2]).on('zoom', redraw);
      let svg = d3.select('#svgWrap')
          .append('svg')
          .attr('width', chartConfig.chartWidth)
          .attr('height', chartConfig.chartHeight)
      // .call(zoom)

      const g = svg.append("g").attr("id", "svgWrap")
          // .attr('transform', `translate(20,${chartConfig.chartHeight})`);

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
      // var str = ['111','222']
      g.append("g")
          .attr('transform', 'translate(0,' + chartConfig.chartHeight + ')')
          .call(xAxis)
          .selectAll("text")
          // .append("tspan")
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
      // const yAxis = d3.axisLeft(yScale)
      // g.append("g").call(yAxis)
      // const barWidth = (chartConfig.chartWidth / this.testData.length) * 0.9 // 用于绘制每条柱
      // const stepArray = d3.ticks(0, d3.max(this.testData, d => d.value), 10) // 用于生成背景柱
      // const colors = ['#ccc', '#ddd'] // 用于生成背景柱

      // let tip = d3Tip() // 设置tip
      //     .attr('class', 'd3-tip')
      //     .offset([-10, 0])
      //     .html(function(d) {
      //       return (
      //           '<strong>星期' +
      //           d.letter +
      //           "<br>空置率:</strong> <span style='color:#ffeb3b'>" +
      //           (d.frequency * 100).toFixed(2) +
      //           '%</span>'
      //       )
      //     })
      //
      // chart.call(tip)
      // let tip = d3Tip() // 设置tip
      //     .attr('class', 'd3-tip')
      //     .offset([-10, 0])
      //     .html(function(d) {
      //       return (
      //           '<strong>技能队列名称' +
      //           d.label +
      //           "<br>数量:</strong> <span style='color:#ffeb3b'>" +
      //           d.value +
      //           '</span>'
      //       )
      //       // return (
      //       //     '<strong>技能队列名称' +
      //       //     d.label +
      //       //     "<br>空置率:</strong> <span style='color:#ffeb3b'>" +
      //       //     (d.frequency * 100).toFixed(2) +
      //       //     '%</span>'
      //       // )
      //     })
      // svg.call(tip)
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
          // .on('mouseover', (d) => {
          //   console.log(d)
          // })
          // .on('mouseout', () => {
          //   console.log('222')
          // })
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
      let treeConfig = {margin: {top: 10, right: 5, bottom: 0, left: 30}}
      treeConfig.chartWidth = d3.select('#mainSvg')._groups[0][0].clientWidth;
      treeConfig.chartHeight = d3.select('#mainSvg')._groups[0][0].clientHeight;
      // treeConfig.centralHeight = treeConfig.chartHeight / 2;
      treeConfig.centralHeight = 0;
      treeConfig.centralWidth = treeConfig.chartWidth / 2;
      treeConfig.linkLength = 230;//连线长度
      treeConfig.duration = 500; //动画时间
      treeConfig.lineHeight = 60;
      treeConfig.boxWidth = 120;
      treeConfig.boxHeight = 40;
      console.log(treeConfig)

      let svg = d3.select('#mainSvg')
          .append('svg')
          .attr('width', treeConfig.chartWidth)
          .attr('height', treeConfig.chartHeight)
      console.log(svg)

      let data = this.rootData
      data.x0 = 0


      // let treeG = svg.append("g")


    }
  },
  mounted() {
    this.drawChart()
    this.drawMainChart()
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
    height:80vh;
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
