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
      <div class="chartBox" ref="chartRef">
      </div>
    </div>
  </div>
</template>

<script>
//引入d3
import * as d3 from 'd3';

export default {
  name: "skillChart",
  data() {
    return {
      chartType: "排队量"
    }
  },
  methods: {
    drawSkillChart() {
      const width = 1640
      const height = 250
      // const margin = { top: 120, right: 200, bottom: 100, left: 200}
      // const innerWidth = width - margin.left - margin.right
      // const innerHeight = height - margin.top - margin.bottom
      const svg = d3.select(".chartBox")
          .append("svg")
          .attr("width", width)
          .attr("height", height)
      const g = svg.append("g").attr("id","mainGroup")
      .attr("transform",'translate(0,0)')
      console.log(g)
      const naiveData = [
        {month: "2021-11-09", apples: 3840, bananas: 1920, cherries: 960, dates: 400},
        {month:"2021-11-10", apples: 1600, bananas: 1440, cherries: 960, dates: 400},
        {month: "2021-11-11", apples:  640, bananas:  960, cherries: 640, dates: 400},
        {month: "2021-11-12", apples:  320, bananas:  480, cherries: 640, dates: 400}
      ];
      const naiveKeys = ["apples", "bananas", "cherries", "dates"];
      var naiveStack = d3.stack()
      .keys(naiveKeys)
      .order(d3.stackOrderNone)(naiveData)
      const xValue = (datum) => {
        return datum.month
      };
      const yScale = d3.scaleLinear()
      .domain([0,d3.max(naiveStack, d=> d3.max(d,subd => subd[1]))])
      .range([innerHeight,0]).nice()

      const xScale = d3.scaleBand()
      .domain(naiveData.map(d => xValue(d)))
      .range([0,innerWidth])
      .padding(0.5)
      // naiveAxes()
      const color = d3.scaleOrdinal()
          .domain(naiveKeys)
          .range(d3.schemeSet3)

      g.selectAll('.datagroup').data(naiveStack).join('g')
          .attr('class', 'datagroup')
          .attr('fill', d => color(d.key))
          .selectAll('.datarect').data(d => d).join('rect')
          .attr('class', 'datarect')
          .attr('y', d => yScale(d[1]))
          .attr('x', d => xScale(xValue(d.data)))
          .attr('height', d => yScale(d[0]) - yScale(d[1]))
          .attr('width', xScale.bandwidth());

      // d3.selectAll('.tick text').attr('font-size', '2em');
      // d3.selectAll('#xaxis text').attr('y', '10')


    }
  },
  mounted() {
    this.drawSkillChart()
  }
}
</script>

<style lang="scss" scoped>
.skillBox {
  height: 35vh;
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

    .chartBox {
      height: 90%;
    }
  }
}
</style>
