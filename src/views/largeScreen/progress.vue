<template>
  <g class="progress">
    <g v-for="(item, index) in d3Data.dataset.nodes.children" :key="index">
      <g class="nodes" v-for="(item1, index1) in item.children" :key="index1">
        <!-- 联线 -->
        <defs>  
          <marker id='markerArrow' markerWidth='13' markerHeight='13' refx='2' refy='6' orient='auto'>
              <path d='M2,2 L2,11 L10,6 L2,2' style='fill:#00ff00' />
          </marker>
        </defs>  
        <g>
          <path :d="drawPathL(item.x,item.y,item1.x,item1.y)" stroke="#a09eff"
            fill="none" />
        </g>
        <!-- 第一级 -->
        <g class="node" width="200" height="200">
          <image opacity="1" stroke-width="1" stroke-opacity="1"
            fill-opacity="1" width="100" height="100" :href="frontImg"
            :x="item1.imgX" :y="item1.imgY"></image>
          <circle :cx="item1.spreadX" :cy="item1.spreadY" r="6" stroke="#fff">
          </circle>
          <text dy="4" dx="-4" :x="item1.spreadX" :y="item1.spreadY" fill="#fff"
            font-size="13" v-if="item1.isFold"
            style="display: block; cursor: pointer"
            @click="nodeOpen(item1)">+</text>
          <text dy="3" dx="-2" :x="item1.spreadX" :y="item1.spreadY"
            font-size="13" fill="#fff" v-else
            style="display: block; cursor: pointer"
            @click="nodeOpen(item1)">-</text>
          <text class="pro-text" fill="#fff" :x="item1.nameX" :y="item1.nameY"
            dx="20">{{ item1.name }}</text>
          <g>
            <text class="pro-num" dx="20" :x="item1.totalNodeX"
              :y="item1.totalNodeY" fill="#fff" font="12">节点量
              {{ item1.totalVal }}</text>
            <image opacity="1" stroke-width="1" stroke-opacity="1"
              fill-opacity="1" :x="item1.trendImgX" :y="item1.trendImgY"
              width="18" height="18" :href="trendImg" style="display: block"
              @click="chart('nodeTrend')"></image>
          </g>
          <image opacity="1" stroke-width="1" stroke-opacity="1"
            fill-opacity="1" :x="item1.bottomX" :y="item1.bottomY" width="15"
            height="15" :href="arrowUrl"></image>
        </g>
        <!-- 第二级 -->
        <g class="node" width="200" height="200"
          v-for="(item2, index2) in item1.children" :key="index2">
          <!-- 联线 -->
          <g>
            <!-- 
            <path d="M740 650 C510 660,550 660,550 700" stroke="#a09eff"
              fill="none" /> -->
            <path :d="drawPath(item1.x,item1.y,item2.x,item2.y)" 
              stroke="#a09eff" fill="none" style="marker-mid: url(#markerArrow);"/>
          </g>
          <circle :cx="item2.spreadX" :cy="item2.spreadY" r="6" stroke="#fff">
          </circle>
          <image opacity="1" stroke-width="1" stroke-opacity="1"
            fill-opacity="1" width="100" height="100" :x="item2.imgX"
            :y="item2.imgY"
            :href="item2.type == 1 ? voiceIVRImg :(item2.type ==2 ? voiceNavigationImg : navigationToIVRImg ) ">
          </image>
          <text dy="4" dx="-4" :x="item2.spreadX" :y="item2.spreadY" fill="#fff"
            font-size="13" v-if="item2.isFold"
            style="display: block; cursor: pointer"
            @click="nodeOpen(item2)">+</text>
          <text dy="3" dx="-2" :x="item2.spreadX" :y="item2.spreadY"
            font-size="13" fill="#fff" v-else
            style="display: block; cursor: pointer"
            @click="nodeOpen(item2)">-</text>
          <g>
            <text class="pro-text" :x="item2.nameX" :y="item2.nameY"
              fill="#fff">{{ item2.name }}</text>
            <!-- <image
                opacity="1"
                stroke-width="1"
                stroke-opacity="1"
                fill-opacity="1"
                width="16"
                height="16"
                :x="item2.imgX"
                :y="item2.imgY"
                :href="InterfaceImg"
              ></image> -->
          </g>
          <g>
            <text class="pro-num" :x="item2.totalNodeX" :y="item2.totalNodeY"
              fill="#fff" font="12">节点总量
              {{ item2.totalVal }}</text>
            <image opacity="1" stroke-width="1" stroke-opacity="1"
              fill-opacity="1" :x="item2.trendImgX" :y="item2.trendImgY"
              width="18" height="18" :href="trendImg"></image>
          </g>
          <image opacity="1" stroke-width="1" stroke-opacity="1"
            fill-opacity="1" :x="item2.bottomX" :y="item2.bottomY" width="15"
            height="15" :href="arrowUrl"></image>
          <!-- 第三级 -->
          <g class="node" width="200" height="200"
            v-for="(item3, index3) in item2.children" :key="index3">
            <!-- 联线 -->
            <g>
              <path :d="drawPath(item2.x,item2.y,item3.x,item3.y)"
                stroke="#a09eff" fill="none" />
            </g>
            <!-- 展开折叠 -->
            <circle :cx="item3.spreadX" :cy="item3.spreadY" r="6" stroke="#fff">
            </circle>
            <text dy="4" dx="-4" :x="item3.spreadX" :y="item3.spreadY"
              fill="#fff" font-size="13" v-if="item3.isFold">+</text>
            <text dy="3" dx="-2" :x="item3.spreadX" :y="item3.spreadY"
              font-size="13" fill="#fff" v-else>-</text>

            <image opacity="1" stroke-width="1" stroke-opacity="1"
              fill-opacity="1" width="100" height="100" :x="item3.imgX"
              :y="item3.imgY"
              :href="item3.type == 1 ? toLaborImg :(item3.type ==2 ? toTelNormalImg : toTelAbnormallImg ) ">
            </image>

            <g>
              <foreignObject width="80" height="20" :x="item3.nameX"
                :y="item3.nameY">
                <p class="pro-text">{{ item3.name }}</p>
              </foreignObject>
              <!-- <text class="pro-text" :x="item3.nameX"
                :y="item3.nameY" fill="#fff">{{ item3.name }}</text> -->
              <image opacity="1" stroke-width="1" stroke-opacity="1"
                fill-opacity="1" width="16" height="16" :x="item3.InterfaceImgX"
                :y="item3.InterfaceImgY" :href="InterfaceImg"></image>
            </g>
            <g>
              <text class="pro-num" :x="item3.totalNodeX" :y="item3.totalNodeY"
                fill="#fff" font="12">节点总量
                {{ item3.totalVal }}</text>
            </g>
            <g>
              <text class="pro-text" :x="item3.nodeX" :y="item3.nodeY"
                fill="#fff">节点量{{ item3.value }}</text>
              <image opacity="1" stroke-width="1" stroke-opacity="1"
                fill-opacity="1" :x="item3.trendImgX" :y="item3.trendImgY"
                width="18" height="18" :href="trendImg"></image>
              <text class="pro-text" :x="item3.breakOffX" :y="item3.breakOffY"
                fill="#fff">{{ item3.abnormalVal }}</text>
              <image opacity="1" stroke-width="1" stroke-opacity="1"
                fill-opacity="1" width="16" height="16" :x="item3.breakOffImgX"
                :y="item3.breakOffImgY" :href="breakOffImg"></image>
            </g>
            <image opacity="1" stroke-width="1" stroke-opacity="1"
              fill-opacity="1" :x="item3.bottomX" :y="item3.bottomY" width="15"
              height="15" :href="arrowUrl"></image>
          </g>
          <!-- 第三级 -->
        </g>
        <!-- 第三级 -->
      </g>
    </g>
  </g>
</template>

<script>
import * as d3 from "d3";
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
        var pathMX1 = x1 + 50;
        var pathMY1 = y1 + 120;
        var pathMX2 = x2 + 50;
        var pathMY2 = y2 + 20;
        // "pathD": "M788 278 L 769 320"
        var pathD = "M" + pathMX1 + " " + pathMY1 + " " + "L" + pathMX2 + " " + pathMY2
        console.log(pathD)
        return pathD;
      };
    },
    drawPath: function () {
      return function (x1, y1, x2, y2) {
        var pathMX1 = x1 + 50;
        var pathMY1 = y1 + 150;
        var pathMX2 = x2 + 50;
        var pathMY2 = y2 + 0;
        var pathCX1 = pathMX1 - (pathMX1 - pathMX2) * 0.1;
        var pathCY1 = pathMY1 + (pathMY2 - pathMY1) * 0.1 + 50;
        var pathCX2 = pathMX1 - (pathMX1 - pathMX2) * 0.9;
        var pathCY2 = pathMY1 + (pathMY2 - pathMY1) * 0.9 - 50;
        console.log(pathCX2)
        var pathD = "M" + pathMX1 + " " + pathMY1 + " " + "C" + pathCX1 + " " + pathCY1 + " " + pathCX2 + " " + pathCY2 + "," + pathMX2 + " " + pathMY2
        // console.log(pathD)
        //"pathD": "M765 440 C 710 470 490 430,515 480",
        // var pathD = "M" + pathMX1 + " " + pathMY1 + " " + "Q" + pathCX1 + " " + pathCY1 + " " + (pathMX1+pathMX2)/2 + " " + (pathMY1+pathMY2)/2 + " " + "T" + pathMX2 + " " + pathMY2
        return pathD;
      };
    }
  },
  methods: {
    nodeOpen(params) {
      console.log(params)
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
      this.$emit("openDialog", params)
    },
    abnormal() {
      this.$emit("openTable", true)
    },
    add(d) {
      console.log(d)
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
    console.log(d3.selectAll("circle"));
    d3.selectAll("circle").on("click", this.add);
    console.log(this.d3Data);
    console.log(this.d3Data.dataset.nodes);
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
