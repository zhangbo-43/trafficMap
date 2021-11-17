<template>
  <div class="skillBox" ref="skillRef">
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
      chartType: "排队量"
    }
  },
  methods: {
    drawChart() {
      // function redraw() {
      //   treeG.attr('transform', 'translate(' + d3.event.translate + ')' +
      //       ' scale(' + d3.event.scale + ')');
      // }

      const testData = [
        {label: '三星级1用户级技能队列', value: 100},
        {label: '三星2', value: 200},
        {label: '三星3', value: 300},
        {label: '三星4', value: 400},
        {label: '三星5', value: 500},
        {label: '三星6', value: 600},
        {label: '三星7', value: 710},
        {label: '三星8', value: 840},
        {label: '三星9', value: 900},
        {label: '三星10', value: 600},
        {label: '三星11', value: 300},
        {label: '三星12', value: 500},
        {label: '三星13', value: 800},
        {label: '三星14', value: 450},
        {label: '三星15', value: 320},
        {label: '三星16', value: 410},
        {label: '三星17', value: 640},
        {label: '三星18', value: 840},
        {label: '三星18', value: 940},
        {label: '三星20', value: 1040},
      ];
      // const naiveKeys = ["apples", "bananas", "cherries", "dates"];

      let chartConfig = {margin: {top: 10, right: 5, bottom: 0, left: 30}}
      chartConfig.chartWidth = d3.select('#svgWrap')._groups[0][0].clientWidth;
      chartConfig.chartHeight = d3.select('#svgWrap')._groups[0][0].clientHeight;
      console.log(chartConfig)

      // let zoom = d3.behavior.zoom().scaleExtent([0.5, 2]).on('zoom', redraw);
      let svg = d3.select('#svgWrap')
          .append('svg')
          .attr('width', chartConfig.chartWidth)
          .attr('height', chartConfig.chartHeight)
      // .call(zoom)

      const g = svg.append("g").attr("id", "svgWrap")
          .attr('transform', 'translate(20,-40)');

      //设置x轴
      const xScale = d3.scaleBand()
          .range([0, chartConfig.chartWidth])
          .padding(0.5)
          .domain(testData.map(function (d) {
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
          .attr("class", "axis")
          .call(xAxis)
          .selectAll("text")
          .attr("font-size", "16px")
          .attr("fill", "#00A698")
          .attr("width",100)
      // .text((d) => {
      //   console.log(d.label)
      //   return d.label
      // })
      // .append("tspan")
      // .data(str)


      // .append("text")
      // .attr("x", config.boxWidth/2)
      // .attr('dy', 16)
      // .attr("text-anchor", 'middle')
      // .text(function (d) {
      //   return (d.name.length > 10) ? d.name.substr(0, 10) : d.name;
      // })
      // .style({
      //   'fill': '#3377ff',
      //   'font-size': 14,
      // })

      // svg.xAxis.tickFormat(function(d) {
      //   return d.label
      // })

      // 设置y轴
      const yScale = d3.scaleLinear()
          .range([chartConfig.chartHeight, 0])
          .domain([0, d3.max(testData, (d) => {
            return d.value
          })])
      // const yAxis = d3.axisLeft(yScale)
      // g.append("g").call(yAxis)
      // const barWidth = (chartConfig.chartWidth / testData.length) * 0.9 // 用于绘制每条柱
      // const stepArray = d3.ticks(0, d3.max(testData, d => d.value), 10) // 用于生成背景柱
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
          .data(testData)
          .enter()
          .append('rect')
          .attr('class', 'bar')
          .attr('fill', '#007AFF')
          .attr('x', function (d) {
            return xScale(d.label)
          })
          .attr('y', chartConfig.chartHeight) // 控制动画由下而上
          // .on('click', (d) => {
          //   console.log(d)
          //   alert('点击的是柱子');
          // })
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


    }
  },
  mounted() {
    this.drawChart()
  }
}
</script>

<style lang="scss" scoped>
.skillBox {
  height: 45vh;
  width: 100%;
  border: 1px solid red;

  .mainChart {
    padding: 20px;
    height: 100%;

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
  }
}
</style>
