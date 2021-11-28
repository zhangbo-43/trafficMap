<template>
<g>
  <line class="node_line" :x1=startX :y1=startY :x2=endX :y2=endY stroke="red" stroke-width="5"
  ></line>
</g>
</template>

<script>
import d3Data from "./d3Data";
import Bus from "@/utils/eventBus.js";
export default {
  name: "nodeLines.vue",
  props: ["barData"],
  data() {
    return {
      d3Data: d3Data,
      quantityData: [],
      allLineData: [],
      nodeLineData: [],
      nodeId: "",
      startX : 0,
      startY: 0,
      endX: 0,
      endY: 0
    }
  },
  computed: {
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
  mounted() {
    console.log(this.d3Data.dataset.lines);
    this.allLineData = this.d3Data.dataset.lines
    Bus.$on("nodeMessage", (message) => {
      this.nodeId = message.id
      this.startX = message.arrowX
      this.startY = message.arrowY
      this.allLineData.map((item) => {
        if(item.sourceid == this.nodeId) {
          this.nodeLineData.push(item)
        }
      })
    });
    console.log(this.nodeLineData)
  },
  created() {
    Bus.$on("quantityData",(message) => {
      this.quantityData = message
    })
  }
}
</script>

<style lang="scss" scoped>
.node_line {
  fill: red;
  stroke-width: 2px;
}
</style>
