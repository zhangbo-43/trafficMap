<template>
  <g class="progress">

    <g class="node" width="200" height="200" v-for="(item3, index3) in list"
      :key="index3">
      <!-- 联线 -->
      <g>
        <path :d="drawPath(itemX1, itemY1, item3.x, item3.y)" stroke="#a09eff"
          fill="none" />
      </g>
      <!-- 展开折叠 -->
      <circle :cx="spreadX(item3.x)" :cy="spreadY(item3.y)" r="6" stroke="#fff">
      </circle>
      <text class="fold-text" dy="4" dx="-4" :x="spreadX(item3.x)"
        :y="spreadY(item3.y)" fill="#fff" font-size="13" v-if="item3.isFold"
        @click="nodeOpen(item3)">+</text>
      <text class="fold-text" dy="3" dx="-2" :x="item3.x" :y="item3.y"
        font-size="13" fill="#fff" v-else @click="nodeOpen(item3)">-</text>
      <image width="100" height="100" :x="imgX(item3.x)" :y="imgY(item3.y)"
        :href="
                item3.type == 1
                  ? toLaborImg
                  : item3.type == 2
                  ? toTelNormalImg
                  : toTelAbnormallImg
              ">
      </image>
      <g>
        <foreignObject width="80" height="20" :x="nameX(item3.x)"
          :y="nameY(item3.y)">
          <p class="pro-text">{{ item3.name }}</p>
        </foreignObject>
        <!-- <text class="pro-text" text-anchor="middle" dominant-baseline="middle"
          :x="nameX(item3.x)" :y="nameY(item3.y)"
          fill="#fff">{{ item3.name }}</text> -->
        <image width="16" height="16" :x="InterfaceImgX(item3.x)"
          :y="InterfaceImgY(item3.y)" :href="InterfaceImg"></image>
      </g>
      <g>
        <!-- <text class="pro-num" text-anchor="middle" dominant-baseline="middle"
          :x="totalNodeX(item3.x)" :y="totalNodeY(item3.y)" fill="#fff"
          font="12">节点总量
          {{ item3.totalVal }}</text> -->
        <foreignObject width="80" height="20" :x="totalNodeX(item3.x)"
          :y="totalNodeY(item3.y)">
          <p class="pro-text">总量
            {{ item3.totalVal }}</p>
        </foreignObject>
      </g>
      <g>
        <!-- <text class="pro-text" :x="nodeX(item3.x)" :y="nodeY(item3.y)"
          fill="#fff">节点量{{ item3.value }}</text> -->
        <foreignObject width="80" height="20" :x="nodeX(item3.x)"
          :y="nodeY(item3.y)">
          <p class="pro-text">节点量
            {{ item3.value }}</p>
        </foreignObject>
        <image opacity="1" stroke-width="1" stroke-opacity="1" fill-opacity="1"
          :x="trendImgX(item3.x)" :y="trendImgY(item3.y)" width="18" height="18"
          :href="trendImg"></image>
        <!-- <text class="pro-text" :x="breakOffX(item3.x)" :y="breakOffY(item3.y)"
          fill="#fff">{{ item3.abnormalVal }}</text> -->
        <foreignObject width="40" height="20" :x="breakOffX(item3.x)"
          :y="breakOffY(item3.y)">
          <p class="pro-text">{{ item3.abnormalVal }}</p>
        </foreignObject>
        <image opacity="1" stroke-width="1" stroke-opacity="1" fill-opacity="1"
          width="16" height="16" :x="breakOffImgX(item3.x)"
          :y="breakOffImgY(item3.y)" :href="breakOffImg"></image>
      </g>
      <image opacity="1" stroke-width="1" stroke-opacity="1" fill-opacity="1"
        :x="bottomX(item3.x)" :y="bottomY(item3.y)" width="15" height="15"
        :href="arrowUrl"></image>
      <treeMenus :list="item3.children" :itemX1="item3.x" :itemY1="item3.y">
      </treeMenus>
    </g>
  </g>
</template>

<script>
import * as d3 from "d3";
import d3Data from "./d3Data";
const width = 1720; //总宽度

const nodeWidth = 100; //节点宽度

const nodeDistance = 120 //节点与节点距离

const lineHeight = 450; //每层数据高度

export default {
  name: "treeMenus",
  props: {
    list: Array,
    itemX1: Number,
    itemY1: Number,
    // lists: Object
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
        // return x + 50;
        return x;
      };
    },
    nameY() {
      return function (y) {
        // return y + 95;
        return y + 85;
      };
    },
    totalNodeX() {
      return function (x) {
        // return x + 50;
        return x;
      };
    },
    totalNodeY() {
      return function (y) {
        return y + 105;
      };
    },
    trendImgX() {
      return function (x) {
        return x + 80;
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
        return x + 80;
      };
    },
    InterfaceImgY() {
      return function (y) {
        return y + 86;
      };
    },
    breakOffX() {
      return function (x) {
        return x + 96;
      };
    },
    breakOffY() {
      return function (y) {
        return y + 126;
      };
    },
    nodeX() {
      return function (x) {
        return x;
      };
    },
    nodeY() {
      return function (y) {
        return y + 126;
      };
    },
    breakOffImgX() {
      return function (x) {
        return x + 130;
      };
    },
    breakOffImgY() {
      return function (y) {
        return y + 126;
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
    handD3List() {
      var that = this;
      this.list.forEach(function (value) {
        console.log(value)
        that.dList(value)
      })
    },
    dList(value) {
      var that = this;
      if (value.children && value.children.length > 0) {
        value.children.forEach(function (value1) {
          value1.isFold = true;
          var len = value.children.length;
          var num = Math.ceil(len / 2);
          console.log('value.x' + value.x)
          console.log('value1.x' + value1.x)
          if (num) {
            value1.x = value.x + 100
          }
          if (value1.children && value1.children.length > 0) {
            that.dList(value1)
          }
        })
      }
    },
    forRoot(dataSet) {
      console.log(dataSet)
      const startX = this.getStartX(dataSet.length, width / 2);
      console.log('startX' + startX)
      for (let i = 0; i < dataSet.length; i++) {
        this.addCoordinate(dataSet[i], i, 1, startX);
      }
    },
    addCoordinate(item, index, level, startX) {
      //开始位置=(节点宽度+间距宽度) * 第几个
      item.x = startX + index * (nodeWidth + nodeDistance);
      //第几层 * 每层高度 
      item.y = level * lineHeight;
      console.log('y---------------' + item.y)
      if (item.children && item.children.length > 0) {
        //子节点中心位置
        const center = nodeWidth / 2 + item.x;
        //子节点开始位置
        const childStartX = this.getStartX(item.children.length, center);
        for (let i = 0; i < item.children.length; i++) {
          this.addCoordinate(item.children[i], i, level + 1, childStartX);
        }
      }
    },
    getStartX(len, center) {
      let startX = 0;
      if (len % 2 === 0) { //如果是偶数个数
        //减去一半节点宽度，减去一半间距宽度 ，加上1/2间距宽度
        startX = center - (len / 2) * nodeWidth - (len / 2) * nodeDistance + nodeDistance / 2;
      } else {
        //减去一半节点宽度，减去一半间距宽度 ，加上1/2节点宽度
        startX = center - (len / 2) * nodeWidth - (len / 2) * nodeDistance - nodeWidth / 2;
      }
      return startX;
    }
  },
  created() {
    console.log(this.list)
    this.forRoot(this.list)
  },
  mounted() {
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
  text-align: center;
}
.pro-num {
  font-size: 14px;
}
.fold-text {
  cursor: pointer;
  display: block;
}
</style>
