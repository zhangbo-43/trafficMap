<template>
  <g class="progress">
    <g v-for="(item, index) in d3Data.dataset.nodes.children" :key="index">
      <g class="nodes" v-for="(item1, index1) in item.children" :key="index1">
        <!-- 第一级 -->
        <g class="node" width="200" height="200">
          <image
            opacity="1"
            stroke-width="1"
            stroke-opacity="1"
            fill-opacity="1"
            width="100"
            height="100"
            :href="frontImg"
          ></image>
          <text class="pro-text" dx="26" dy="95" fill="#fff">{{
            item1.name
          }}</text>
          <g>
            <text class="pro-num" dx="30" dy="115" fill="#fff" font="12"
              >节点量 {{ item1.totalVal }}</text
            >
            <image
              opacity="1"
              stroke-width="1"
              stroke-opacity="1"
              fill-opacity="1"
              x="120"
              y="100"
              width="20"
              height="20"
              :href="trendImg"
            ></image>
          </g>
        </g>
        <!-- 联线 -->
        <line
          x1="80"
          y1="80"
          x2="10"
          y2="200"
          style="stroke: rgb(255, 0, 0); stroke-width: 2"
        />
        <!-- 第二级 -->
        <g
          class="node"
          width="200"
          height="200"
          v-for="(item2, index2) in item1.children"
          :key="index2"
          translate="tranform(0,0)"
        >
          <image
            opacity="1"
            stroke-width="1"
            stroke-opacity="1"
            fill-opacity="1"
            width="100"
            height="100"
            :x="item2.x"
            :y="item2.y"
            :href="frontImg"
          ></image>
          <g>
            <text class="pro-text" dx="26" dy="295" fill="#fff">{{
              item2.name
            }}</text>
            <image
              opacity="1"
              stroke-width="1"
              stroke-opacity="1"
              fill-opacity="1"
              width="16"
              height="16"
              x="80"
              y="280"
              :href="InterfaceImg"
            ></image>
          </g>
          <g dx="26" dy="95">
            <text class="pro-num" x="30" y="315" fill="#fff" font="12"
              >节点总量 1234</text
            >
            <image
              opacity="1"
              stroke-width="1"
              stroke-opacity="1"
              fill-opacity="1"
              x="120"
              y="300"
              width="20"
              height="20"
              href="data:image/png;base64,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"
            ></image>
          </g>
        </g>
        <!-- 第二级 -->
      </g>
    </g>
  </g>
</template>    

<script>
import d3Data from "./d3Data";
export default {
  props: ["datasource"],
  data() {
    return {
      dataList: [],
      frontImg: require("../../assets/images/type5.svg"),
      InterfaceImg: require("../../assets/images/Interface.svg"),
      breakOffImg: require("../../assets/images/break_off.svg"),
      trendImg: require("../../assets/images/trend.svg"),
      height: 500,
      d3Data: d3Data,
    };
  },
  methods: {
    filter(targetId) {
      this.dataList = this.datasource.filer(
        (item) => item.targetId == targetId
      );
    },
  },
  mounted() {
    console.log(this.d3Data);
    console.log(this.d3Data.dataset.nodes);
  },
};
</script>
<style lang="scss" scoped>
.progress {
  width: 800px;
}
.pro-text {
  font-size: 12px;
}
.pro-num {
  font-size: 12px;
}
</style>
