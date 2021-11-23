<template>
  <g class="progress">
    <g v-for="(item, index) in d3Data.dataset.nodes.children" :key="index">
      <g class="nodes" v-for="(item1, index1) in item.children" :key="index1">
        {{ item1.name }}
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
            :x="item1.imgX"
            :y="item1.imgY"
          ></image>
          <text
            class="pro-text"
            fill="#fff"
            :x="item1.nameX"
            :y="item1.nameY"
            >{{ item1.name }}</text
          >
          <g>
            <text
              class="pro-num"
              :x="item1.totalNodeX"
              :y="item1.totalNodeY"
              fill="#fff"
              font="12"
              >节点量 {{ item1.totalVal }}</text
            >
            <image
              opacity="1"
              stroke-width="1"
              stroke-opacity="1"
              fill-opacity="1"
              :x="item1.trendImgX"
              :y="item1.trendImgY"
              width="18"
              height="18"
              :href="trendImg"
            ></image>
          </g>
        </g>

        <!-- 第二级 -->
        <g
          class="node"
          width="200"
          height="200"
          v-for="(item2, index2) in item1.children"
          :key="index2"
          translate="tranform(0,0)"
        >
          <!-- 联线 -->
          <line
            :x1="item1.x"
            :y1="item1.y"
            :x2="item2.x"
            :y2="item2.y"
            style="stroke: #a09eff; stroke-width: 2"
          />
          <image
            opacity="1"
            stroke-width="1"
            stroke-opacity="1"
            fill-opacity="1"
            width="100"
            height="100"
            :x="item2.imgX"
            :y="item2.imgY"
            :href="frontImg"
          ></image>
          <g>
            <text
              class="pro-text"
              :x="item2.nameX"
              :y="item2.nameY"
              fill="#fff"
              >{{ item2.name }}</text
            >
            <image
              opacity="1"
              stroke-width="1"
              stroke-opacity="1"
              fill-opacity="1"
              width="16"
              height="16"
              :x="item2.imgX"
              :y="item2.imgY"
              :href="InterfaceImg"
            ></image>
          </g>
          <g>
            <text
              class="pro-num"
              :x="item2.totalNodeX"
              :y="item2.totalNodeY"
              fill="#fff"
              font="12"
              >节点总量 {{ item2.totalVal }}</text
            >
            <image
              opacity="1"
              stroke-width="1"
              stroke-opacity="1"
              fill-opacity="1"
              :x="item2.trendImgX"
              :y="item2.trendImgY"
              width="18"
              height="18"
              :href="trendImg"
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
  font-size: 14px;
}
.pro-num {
  font-size: 14px;
}
</style>
