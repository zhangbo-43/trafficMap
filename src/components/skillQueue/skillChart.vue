<template>
  <g class="centerBox">
    <g>
      <line
        v-for="item in this.d3Data.dataset.nodes.children"
        :key="item.id"
        x1="962"
        y1="90"
        :x2="item.x2"
        :y2="item.y2"
        style="stroke: rgb(20, 81, 248); stroke-width: 2"
      />
    </g>
    <g>
      <image
        opacity="1"
        stroke-width="1"
        stroke-opacity="1"
        fill-opacity="1"
        :x="this.d3Data.dataset.nodes.x"
        :y="this.d3Data.dataset.nodes.y"
        width="242"
        height="194"
        :href="centerUrl"
      ></image>
    </g>
    <g v-for="item in this.d3Data.dataset.nodes.children" :key="item.id">
      <image
        opacity="1"
        stroke-width="1"
        stroke-opacity="1"
        fill-opacity="1"
        :x="item.x"
        :y="item.y"
        :width="item.width"
        :height="item.width"
        :href="imgUrl"
        style="display: block"
        @click="click(item)"
      ></image>
      <text fill="#fff" :x="item.textX" :y="item.textY" text-anchor="start">{{
        item.name
      }}</text>
      <text
        fill="rgba(6, 202, 195)"
        :x="item.valueX"
        :y="item.valueY"
        text-anchor="start"
        >{{ item.value }}</text
      >
      <image
        opacity="1"
        stroke-width="1"
        stroke-opacity="1"
        fill-opacity="1"
        :x="item.bottomX"
        :y="item.bottomY"
        width="15"
        height="15"
        :href="arrowUrl"
      ></image>
      <image :x="item.pointX" :y="item.pointY" :href="item.pointUrl"></image>
      <image
        :x="item.patchX"
        :y="item.patchY"
        width="23"
        height="23"
        :href="item.patchUrl"
      ></image>
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
  methods: {
    click(data) {
      console.log(data)
    }
  },
  mounted() {
    // this.getPoint()
    console.log(this.d3Data);
  },
  created() {
    this.d3Data.dataset.nodes.width = 80;
    this.d3Data.dataset.nodes.height = 80;
    if (this.d3Data.dataset.nodes.children.length == 1) {
      this.d3Data.dataset.nodes.children[0].width = 70;
      this.d3Data.dataset.nodes.children[0].height = 70;
    } else if (this.d3Data.dataset.nodes.children.length == 2) {
      this.d3Data.dataset.nodes.children[0].width = 50;
      this.d3Data.dataset.nodes.children[0].height = 50;
      this.d3Data.dataset.nodes.children[1].width == 50;
      this.d3Data.dataset.nodes.children[1].height == 50;
    } else if (this.d3Data.dataset.nodes.children.length == 3) {
      this.d3Data.dataset.nodes.children[0].width = 50;
      this.d3Data.dataset.nodes.children[0].height = 50;
      this.d3Data.dataset.nodes.children[1].width = 70;
      this.d3Data.dataset.nodes.children[1].height = 70;
      this.d3Data.dataset.nodes.children[2].width = 50;
      this.d3Data.dataset.nodes.children[2].height = 50;
    } else if (this.d3Data.dataset.nodes.children.length == 4) {
      this.d3Data.dataset.nodes.children[0].width = 50;
      this.d3Data.dataset.nodes.children[0].height = 50;
      this.d3Data.dataset.nodes.children[1].width = 60;
      this.d3Data.dataset.nodes.children[1].height = 60;
      this.d3Data.dataset.nodes.children[2].width = 60;
      this.d3Data.dataset.nodes.children[2].height = 60;
      this.d3Data.dataset.nodes.children[3].width = 50;
      this.d3Data.dataset.nodes.children[3].height = 50;
    } else {
      this.d3Data.dataset.nodes.children[0].width = 50;
      this.d3Data.dataset.nodes.children[0].height = 50;
      this.d3Data.dataset.nodes.children[1].width = 60;
      this.d3Data.dataset.nodes.children[1].height = 60;
      this.d3Data.dataset.nodes.children[1].width = 60;
      this.d3Data.dataset.nodes.children[1].height = 60;
      this.d3Data.dataset.nodes.children[2].width = 70;
      this.d3Data.dataset.nodes.children[2].height = 70;
      this.d3Data.dataset.nodes.children[3].width = 60;
      this.d3Data.dataset.nodes.children[3].height = 60;
      this.d3Data.dataset.nodes.children[4].width = 50;
      this.d3Data.dataset.nodes.children[4].height = 50
    }
  },
};
</script>
<style lang="scss" scoped>
</style>
