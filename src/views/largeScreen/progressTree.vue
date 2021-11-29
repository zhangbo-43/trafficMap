<template>
  <g class="progress">
    <g v-for="(item2, index2) in list" :key="index2">
      <treeMenus :list="item2.children">
        <g class="node" width="200" height="200"
          v-for="(item3, index3) in item2.children" :key="index3">
          <!-- 联线 -->
          <g>
            <path :d="drawPath(item2.x, item2.y, item3.x, item3.y)"
              stroke="#a09eff" fill="none" />
          </g>
          <!-- 展开折叠 -->
          <circle :cx="spreadX(item3.x)" :cy="spreadY(item3.y)" r="6"
            stroke="#fff">
          </circle>
          <text dy="4" dx="-4" :x="spreadX(item3.x)" :y="spreadY(item3.y)"
            fill="#fff" font-size="13" v-if="item3.isFold">+</text>
          <text dy="3" dx="-2" :x="item3.x" :y="item3.y" font-size="13"
            fill="#fff" v-else>-</text>

          <image opacity="1" stroke-width="1" stroke-opacity="1"
            fill-opacity="1" width="100" height="100" :x="imgX(item3.x)"
            :y="imgY(item3.y)" :href="
                item3.type == 1
                  ? toLaborImg
                  : item3.type == 2
                  ? toTelNormalImg
                  : toTelAbnormallImg
              ">
          </image>

          <g>
            <!-- <foreignObject
                width="80"
                height="20"
                :x="nameX(item3.x)"
                :y="nameY(item3.y)"
              >
                <p class="pro-text">{{ item3.name }}</p>
              </foreignObject> -->
            <!-- <text class="pro-text" :x="item3.nameX"
                :y="item3.nameY" fill="#fff">{{ item3.name }}</text> -->
            <text class="pro-text" text-anchor="middle"
              dominant-baseline="middle" :x="nameX(item3.x)" :y="nameY(item3.y)"
              fill="#fff">{{ item3.name }}</text>
            <image opacity="1" stroke-width="1" stroke-opacity="1"
              fill-opacity="1" width="16" height="16"
              :x="InterfaceImgX(item3.x)" :y="InterfaceImgY(item3.y)"
              :href="InterfaceImg"></image>
          </g>
          <g>
            <text class="pro-num" text-anchor="middle"
              dominant-baseline="middle" :x="totalNodeX(item3.x)"
              :y="totalNodeY(item3.y)" fill="#fff" font="12">节点总量
              {{ item3.totalVal }}</text>
          </g>
          <g>
            <text class="pro-text" :x="nodeX(item3.x)" :y="nodeY(item3.y)"
              fill="#fff">节点量{{ item3.value }}</text>
            <image opacity="1" stroke-width="1" stroke-opacity="1"
              fill-opacity="1" :x="trendImgX(item3.x)" :y="trendImgY(item3.y)"
              width="18" height="18" :href="trendImg"></image>
            <text class="pro-text" :x="breakOffX(item3.x)"
              :y="breakOffY(item3.y)" fill="#fff">{{ item3.abnormalVal }}</text>
            <image opacity="1" stroke-width="1" stroke-opacity="1"
              fill-opacity="1" width="16" height="16" :x="breakOffImgX(item3.x)"
              :y="breakOffImgY(item3.y)" :href="breakOffImg"></image>
          </g>
          <image opacity="1" stroke-width="1" stroke-opacity="1"
            fill-opacity="1" :x="bottomX(item3.x)" :y="bottomY(item3.y)"
            width="15" height="15" :href="arrowUrl"></image>
        </g>
      </treeMenus>
    </g>
  </g>
</template>

<script>
import * as d3 from "d3";
import d3Data from "./d3Data";
export default {
  name: "treeMenus",
  props: {
    list: Array
  },
  data() {
    return {
      dataList: [],
      frontImg: require("../../assets/images/type5.svg"),
      InterfaceImg: require("../../assets/images/Interface.svg"),
      breakOffImg: require("../../assets/images/break_off.svg"),
      trendImg: require("../../assets/images/trend.svg"),
      arrowUrl: require("../../assets/images/arrow.svg"),
      voiceIVRImg: require("../../assets/images/type9.svg"), //语音
      navigationToIVRImg: require("../../assets/images/type2.svg"), //导航转ivr
      voiceNavigationImg: require("../../assets/images/type8.svg"), //语音转ivr
      toLaborImg: require("../../assets/images/type7.svg"), //转人工
      toTelNormalImg: require("../../assets/images/type3.svg"),
      toTelAbnormallImg: require("../../assets/images/type4.svg"),
      videoIVRImg: require("../../assets/images/type1.svg"),
      height: 500,
      d3Data: d3Data,
      chartVisible: false,
      optionData: {},
    };
  },
  computed: {
    drawPathL: function () {
      return function (x1, y1, x2, y2) {
        var pathMX1 = x1 + 50 + 2;
        var pathMY1 = y1 + 120;
        var pathMX2 = x2 + 50 + 2;
        var pathMY2 = y2 + 20;
        // var dX = x2 - x1;
        // "pathD": "M788 278 L 769 320"
        var pathD =
          "M" + pathMX1 + " " + pathMY1 + "," + "L" + pathMX2 + " " + pathMY2;
        console.log(pathD);
        return pathD;
      };
    },
    drawPath: function () {
      return function (x1, y1, x2, y2) {
        var pathMX1 = x1 + 50 + 2;
        var pathMY1 = y1 + 150;
        var pathMX2 = x2 + 50 + 2;
        var pathMY2 = y2 + 10;
        var pathCX1 = pathMX1 - (pathMX1 - pathMX2) * 0.1;
        var pathCY1 = pathMY1 + (pathMY2 - pathMY1) * 0.1 + 50;
        var pathCX2 = pathMX1 - (pathMX1 - pathMX2) * 0.9;
        var pathCY2 = pathMY1 + (pathMY2 - pathMY1) * 0.9 - 50;
        console.log(pathCX2);
        var pathD =
          "M" +
          pathMX1 +
          " " +
          pathMY1 +
          " " +
          "C" +
          pathCX1 +
          " " +
          pathCY1 +
          " " +
          pathCX2 +
          " " +
          pathCY2 +
          "," +
          pathMX2 +
          " " +
          pathMY2;
        // console.log(pathD)
        //"pathD": "M765 440 C 710 470 490 430,515 480",
        return pathD;
      };
    },

    imgX() {
      return function (x) {
        return x;
      };
    },
    imgY() {
      return function (y) {
        return y;
      };
    },
    spreadX() {
      return function (x) {
        return x + 50 + 2;
      };
    },
    spreadY() {
      return function (y) {
        return y + 15;
      };
    },
    nameX() {
      return function (x) {
        return x + 50;
      };
    },
    nameY() {
      return function (y) {
        return y + 95;
      };
    },
    totalNodeX() {
      return function (x) {
        return x + 50;
      };
    },
    totalNodeY() {
      return function (y) {
        return y + 115;
      };
    },
    trendImgX() {
      return function (x) {
        return x + 90;
      };
    },
    trendImgY() {
      return function (y) {
        return y + 105;
      };
    },
    bottomX() {
      return function (x) {
        return x + 50 - 7;
      };
    },
    bottomY() {
      return function (y) {
        return y + 142;
      };
    },
    InterfaceImgX() {
      return function (x) {
        return x + 70;
      };
    },
    InterfaceImgY() {
      return function (y) {
        return y + 66;
      };
    },
    breakOffX() {
      return function (x) {
        return x + 100;
      };
    },
    breakOffY() {
      return function (y) {
        return y + 122;
      };
    },
    nodeX() {
      return function (x) {
        return x;
      };
    },
    nodeY() {
      return function (y) {
        return y + 140;
      };
    },
    breakOffImgX() {
      return function (x) {
        return x + 130;
      };
    },
    breakOffImgY() {
      return function (y) {
        return y + 110;
      };
    },
  },
  methods: {
    nodeOpen(params) {
      console.log(params);
      if (params.children) {
        params._children = params.children;
        params.children = null;
        params.isFold = false;
      } else {
        params.children = params._children;
        params._children = null;
        params.isFold = true;
      }
    },
    chart(params) {
      this.$emit("openDialog", params);
    },
    abnormal() {
      this.$emit("openTable", true);
    },
    add(d) {
      console.log(d);
      // if (d.children) {
      //   d._children = d.children;
      //   d.children = null;
      //   d.spread = false;
      //   d3.select(this).text('+')
      // } else {
      //   d.children = d._children;
      //   d._children = null;
      //   d.spread = true;
      //   d3.select(this).text('-')
      // }
      // update(d, originalData, g);
    },
    filter(targetId) {
      this.dataList = this.datasource.filer(
        (item) => item.targetId == targetId
      );
    },
    show(i) {
      console.log(i);
    },
  },
  mounted() {
    console.log(this.list)
    d3.selectAll("circle").on("click", this.add);
  },
};
</script>
<style lang="scss" scoped>
.progress {
  cursor: pointer;
}
.pro-text {
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
}
.pro-num {
  font-size: 14px;
}
</style>
