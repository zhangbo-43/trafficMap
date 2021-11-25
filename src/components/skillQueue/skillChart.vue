<template>
  <g class="centerBox">
    <g class="lines" v-for="item in this.d3Data.dataset.nodes.children"
       :key="item.id">
      <line class="line" :x1="centerX(d3Data.dataset.nodes.x)"
        :y1="centerY(d3Data.dataset.nodes.y)"
        :x2="lineEndX(item.x,item.size)"
        :y2="lineEndY(item.y,item.size)"
      />
      <image :x="item.pointX" :y="item.pointY" :href="item.pointUrl"></image>
      <image
          :x="item.patchX"
          :y="item.patchY"
          width="23"
          height="23"
          :href="item.patchUrl"
      ></image>
    </g>
    <g class="center">
      <image class="centerImg"
        :x="this.d3Data.dataset.nodes.x"
        :y="this.d3Data.dataset.nodes.y"
        :href="centerUrl"
      ></image>
    </g>
<!--    各个节点坐标-->
    <g class="nodes">
      <g v-for="item in this.d3Data.dataset.nodes.children" :key="item.id">
        <image
            :x="item.x"
            :y="item.y"
            :width="sizeWidth(item.size)"
            :height="sizeWidth(item.size)"
            :href="imgUrl"
            style="display: block"
            @click="click(item)"
        ></image>
        <text class="text_nodes" :x="nameX(item.x,item.size)" :y="nameY(item.y,item.size)" >{{
            item.name
          }}</text>
        <text class="number_nodes"
            :x="valueX(item.x,item.size)"
            :y="valueY(item.y,item.size)"
        >{{ item.value }}</text
        >
        <image class="arrow_nodes"
            :x="arrowX(item.x,item.size)"
            :y="arrowY(item.y,item.size)"
            :href="arrowUrl"
        ></image>

      </g>
    </g>
  </g>
</template>

<script>
// import * as d3 from 'd3'
import d3Data from "../../views/largeScreen/d3Data";
export default {
  name: "skillChart",
  data() {
    return {
      d3Data: d3Data,
      pointX: 400,
      pointY: 100,
      height: 100,
      pointUrl: require("../../assets/images/abnormal.svg"),
      imgUrl: require("../../assets/images/little.svg"),
      centerUrl: require("../../assets/images/person.png"),
      arrowUrl: require("../../assets/images/arrow.svg"),
      slides: [],

    };
  },
  computed: {
    //中点坐标
    centerX:function() {
      return function(x) {
        return x + 125
      }
    },
    centerY:function() {
      return function(y) {
        return y + 95
      }
    },
    //节点图片的宽度
    sizeWidth: function () {
      return function(size) {
        return (!size || size === "default") ? 60 : size === "large" ? 70 : 50
      }
    },
    //数值坐标
    valueY: function() {
      return function(y,size) {
        return y - ((!size || size === "default") ? 10 : size === "large" ? 0 : 10)
      }
    },
    valueX: function() {
      return function(x,size) {
        return x + ((!size || size === "large") ? 50 : 8)
      }
    },
    //节点名称坐标
    nameX:function() {
      return function(x,size) {
        return x - ((!size || size === "default") ? 0 : size === "large" ? 0 : 6)
      }
    },
    nameY: function() {
      return function(y,size) {
        return y + 20 + ((!size || size === "default") ? 60 : size === "large" ? 70 : 50)
      }
    },
    //底部箭头坐标
    arrowX:function() {
      return function(x,size) {
        return x - 5 + ((!size || size === "default") ? 30 : size === "large" ? 35 : 25)
      }
    },
    arrowY:function() {
      return function(y,size) {
        return y + 25 + ((!size || size === "default") ? 60 : size === "large" ? 70 : 50)
      }
    },
    //连线终点坐标
    lineEndX:function() {
      return function(x,size) {
        return x  + ((!size || size === "default") ? 30 : size === "large" ? 35 : 25)
      }
    },
    lineEndY:function() {
      return function(y,size) {
        return y + 10 + ((!size || size === "default") ? 45 : size === "large" ? 35 : 25)
      }
    }
  },
  methods: {
    click(data) {
      console.log(data)
    }
  },
  mounted() {
    // this.getPoint()
    console.log(this.d3Data);
  },
};
</script>
<style lang="scss" scoped>
.centerImg {
  width: 242px;
  height:194px;
}
.line {
  stroke: rgb(20, 81, 248);
  stroke-width: 2
}
.text_nodes {
  fill: #fff;
  text-anchor: start;
}
.number_nodes {
  fill: rgba(6, 202, 195);
  text-anchor: start;
}
.arrow_nodes {
  width: 15px;
  height: 15px;
}
</style>
