<template>
  <div class="mainScreen">
    <div class="centerChart">

    </div>
    <div class="bottomChart">
      <skill-chart></skill-chart>
    </div>
  </div>
</template>

<script>
//引入d3
import * as d3 from 'd3';
import skillChart from "../../components/skillQueue/skillChart";

export default {
  name: "subCenterScreen",
  components: {
    skillChart
  },
  data() {
    return {}
  },
  methods: {
    drawSkillChart() {
      const width = 1640
      const height = 500
      // const margin = { top: 120, right: 200, bottom: 100, left: 200}
      // const innerWidth = width - margin.left - margin.right
      // const innerHeight = height - margin.top - margin.bottom
      const svg = d3.select(".centerChart")
          .append("svg")
          .attr("width", width)
          .attr("height", height)
      const g = svg.append("g").attr("id", "mainGroup")
          // .attr("transform", `translate(${margin.left}, ${margin.top})`)
      console.log(g)
      const naiveData = [
        {month: "2021-11-09", apples: 1, bananas: 2, cherries: 3, dates: 4},
        {month: "2021-11-10", apples: 5, bananas: 6, cherries: 7, dates: 8},
        {month: "2021-11-11", apples: 9, bananas: 10, cherries: 11, dates: 12},
        {month: "2021-11-12", apples: 13, bananas: 14, cherries: 15, dates: 16}
      ];
      const naiveKeys = ["apples", "bananas", "cherries", "dates"];
      var naiveStack = d3.stack()
          .keys(naiveKeys)
          .order(d3.stackOrderNone)(naiveData)
      const xValue = (datum) => {
        return datum.month
      };
      const yScale = d3.scaleLinear()
          .domain([0, d3.max(naiveStack, d => d3.max(d, subd => subd[1]))])
          .range([innerHeight, 0]).nice()

      const xScale = d3.scaleBand()
          .domain(naiveData.map(d => xValue(d)))
          .range([0, innerWidth])
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
.mainScreen {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/pageBg.png");
  background-size: cover;
  background-position: center center;
  padding: 20px;

  .centerChart {
    height: 55vh;
  }
}
</style>
