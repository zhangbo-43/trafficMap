<template>
  <g class="centerBox">
    <g class="lines">
      <g class="line" v-for="item in this.d3Data.dataset.nodes.children"
        :key="item.id">
        <line :x1="startX" :y1="startY" :x2="endX(item.x, item.size)"
          :y2="endY(item.y, item.size)" />
        <image class="cursor " :x="cursor(startX)" :y="cursor(startY)"
          width="30" height="30" :href="light"></image>
      </g>
    </g>
    <g class="center">
      <image :x="centerX" :y="centerY" :width="centerWidth"
        :height="centerHeight" :href="centerUrl"></image>
    </g>
    <g class="nodes">
      <g class="node" v-for="item in this.d3Data.dataset.nodes.children"
        :key="item.id">
        <image class="node-image" :x="positionX(item.x, item.size)"
          :y="positionY(item.y, item.size)" :width="size(item.size)"
          :height="size(item.size)" :href="imgUrl" @click="click(item)"></image>
        <text class="node-text" text-anchor="middle" dominant-baseline="middle"
          :x="textX(item.x, item.size)"
          :y="textY(item.y, item.size)">{{ item.name }}
        </text>
        <text class="node-count" text-anchor="middle" dominant-baseline="middle"
          :x="countX(item.x, item.size)"
          :y="countY(item.y, item.size)">{{ item.value }}
        </text>
        <image :x="arrowX(item.x, item.size)" :y="arrowY(item.y, item.size)"
          width="15" height="15" :href="arrowUrl"></image>
      </g>
    </g>
  </g>
</template>

<script>
import * as d3 from 'd3'
import d3Data from "../../views/largeScreen/d3Data";
import Bus from "@/utils/eventBus.js";
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
      return this.centerY + this.centerHeight / 2 + 10;
    },
    endX: function () {
      return function (x, size) {
        return x + ((!size || size === "default") ? 40 : size === "large" ? 50 : 30)
      };
    },
    endY: function () {
      return function (y, size) {
        return y + 20 + ((!size || size === "default") ? 53 : size === "large" ? 35 : 40)
      };
    },
    positionX: function () {
      return function (x, size) {
        return x + ((!size || size === "default") ? 20 : size === "large" ? 15 : 25)
      };
    },
    positionY: function () {
      return function (y, size) {
        return y + ((!size || size === "default") ? 20 : size === "large" ? 15 : 25)
      };
    },
    size: function () {
      return function (size) {
        return (!size || size === "default") ? 60 : size === "large" ? 70 : 50
      };
    },
    textX: function () {
      return function (x, size) {
        return x + ((!size || size === "default") ? 50 : size === "large" ? 50 : 50)
      };
    },
    textY: function () {
      return function (y, size) {
        return y + ((!size || size === "default") ? 95 : size === "large" ? 100 : 87)
      };
    },
    countX: function () {
      return function (x, size) {
        return x + ((!size || size === "default") ? 50 : size === "large" ? 70 : 50)
      };
    },
    countY: function () {
      return function (y, size) {
        return y + ((!size || size === "default") ? 10 : size === "large" ? 5 : 10)
      };
    },
    arrowX: function () {
      return function (x, size) {
        return x + ((!size || size === "default") ? 45 : size === "large" ? 45 : 45)
      };
    },
    arrowY: function () {
      return function (y, size) {
        return y + ((!size || size === "default") ? 105 : size === "large" ? 110 : 100);
      };
    },
  },
  data() {
    return {
      flag: true,
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
      if (this.flag) {
        this.$emit("getLineVisible", true)
        this.flag = false
      } else {
        this.$emit("getLineVisible", false)
        this.flag = true
      }
      Bus.$emit("nodeMessage", { id: data.id, arrowX: this.arrowX(data.x) + 7, arrowY: this.arrowY(data.y) + 7 })
    },
    imgTransition() {
      let run = () => {
        var cursorSvg = d3.selectAll(".cursor")
        var datas = this.d3Data.dataset.nodes.children;
        cursorSvg.attr('x', () => {
          return this.centerX + this.centerWidth / 2
        }).attr('y', () => {
          return this.centerY + this.centerHeight / 2 + 10;
        })
        cursorSvg.data(datas).transition('position')
          .attr('x', function (d) {
            return d.x + ((!d.size || d.size === "default") ? 20 : d.size === "large" ? 15 : 25) + 10
          })
          .attr('y', function (d) {
            return d.y + ((!d.size || d.size === "default") ? 53 : d.size === "large" ? 35 : 40)
          })
          .duration(1500)
          .on("end", run)
      }
      run()
    }
  },
  mounted() {
    this.imgTransition()
  },
  created() {
    this.$emit("getLineVisible", false)
  },
};
</script>
<style lang="scss" scoped>
.centerBox {
  cursor: pointer;
}
.node-text {
  font-size: 18px;
  fill: white;
}
.node-image {
  display: block;
}
.line line {
  stroke: rgb(20, 81, 248);
  stroke-width: 2px;
}

.node-count {
  fill: rgba(6, 202, 195);
}

/* 动态线（移动线）样式 */
.animation {
  stroke-dasharray: 5, 30;
  stroke-dashoffset: 8;
  animation: ani-line 3s linear 1s infinite alternate;
}

.rev-animation {
  stroke-dasharray: 5, 30;
  stroke-dashoffset: 8;
  animation: ani-rev-line 3s linear 1s infinite alternate;
}

@keyframes ani-line {
  from {
    stroke-dashoffset: 150;
  }

  to {
    stroke-dashoffset: 0;
  }
}

@keyframes ani-rev-line {
  from {
    stroke-dashoffset: 0;
  }

  to {
    stroke-dashoffset: 150;
  }
}
</style>
