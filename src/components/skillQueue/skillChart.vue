<template>
  <g class="centerBox">
    <g class="lines">
      <g class="line" v-for="item in this.d3Data.dataset.nodes.children"
        :key="item.id">
        <line :x1="startX" :y1="startY" :x2="endX(item.x, item.size)"
          :y2="endY(item.y, item.size)" />
        <image class="cursor" :x="cursor(startX)" :y="cursor(startY)" width="20"
          height="20" :href="light"></image>
      </g>
    </g>
    <!-- <g class="center">
      <image :x="centerX" :y="centerY" :width="centerWidth"
        :height="centerHeight" :href="centerUrl"></image>\  
    </g> -->
    <g class="nodes">
      <g class="node" v-for="item in this.d3Data.dataset.nodes.children"
        :key="item.id">
        <image class="node-image" :x="positionX(item.x, item.size)"
          :y="positionY(item.y, item.size)" :width="size(item.size)"
          :height="size(item.size)" :href="imgUrl" @click="click(item)"></image>
        <text class="node-text" text-anchor="middle" dominant-baseline="middle"
          :x="textX(item.x, item.size)"
          :y="textY(item.y, item.size)">{{ item.name }}</text>
        <text class="node-count" text-anchor="middle" dominant-baseline="middle"
          :x="countX(item.x, item.size)"
          :y="countY(item.y, item.size)">{{ item.value }}</text>
        <image :x="arrowX(item.x, item.size)" :y="arrowY(item.y, item.size)"
          width="15" height="15" :href="arrowUrl"></image>
      </g>
    </g>
  </g>
</template>

<script>

import d3Data from "../../views/largeScreen/d3Data";

export default {
  computed: {
    cursor: function () {
      return function (x) {
        return x - 10;
      };
    },
    startX: function () {
      return this.centerX + this.centerWidth / 2;
    },
    startY: function () {
      return this.centerY + this.centerHeight / 2;
    },
    endX: function () {
      return function (x, size) {
        return x + (size === "default" ? 50 : 30);
      };
    },
    endY: function () {
      return function (y, size) {
        return y + (size === "default" ? 50 : 30);
      };
    },
    positionX: function () {
      return function (x, size) {
        return x + (size === "default" ? 20 : 30);
      };
    },
    positionY: function () {
      return function (y, size) {
        return y + (size === "default" ? 20 : 30);
      };
    },
    size: function () {
      return function (size) {
        return size === "default" ? 60 : 100;
      };
    },
    textX: function () {
      return function (x, size) {
        return x + (size === "default" ? 50 : 100);
      };
    },
    textY: function () {
      return function (y, size) {
        return y + (size === "default" ? 95 : 100);
      };
    },
    countX: function () {
      return function (x, size) {
        return x + (size === "default" ? 50 : 100);
      };
    },
    countY: function () {
      return function (y, size) {
        return y + (size === "default" ? 5 : 100);
      };
    },
    arrowX: function () {
      return function (x, size) {
        return x + (size === "default" ? 42 : 100);
      };
    },
    arrowY: function () {
      return function (y, size) {
        return y + (size === "default" ? 105 : 100);
      };
    },
  },
  data() {
    return {
      d3Data: d3Data,
      centerX: 835,
      centerY: 0,
      centerWidth: 242,
      centerHeight: 194,
      light: require("../../assets/images/light1.png"),
      pointUrl: require("../../assets/images/abnormal.svg"),
      imgUrl: require("../../assets/images/little.svg"),
      centerUrl: require("../../assets/images/person.png"),
      arrowUrl: require("../../assets/images/arrow.svg"),
      slides: [],
    };
  },
  methods: {
    click(data) {
      console.log(data);
    },
  },
  mounted() {
    // d3.selectAll("")
  },
  created() {

  },
};
</script>
<style lang="scss" scoped>
.node-text {
  font-size: 18px;
  fill: white;
}
.line line {
  stroke: rgb(20, 81, 248);
  stroke-width: 2px;
}
.node-count {
  fill: rgba(6, 202, 195);
}
</style>
