<template>
<g>
 <g v-if="nodeLineData.length !==0">
   <g v-for="item in nodeLineData" :key="item.id">
<!--     <line class="node_line" :x1=item.startX :y1=item.startY :x2=item.endX :y2=item.endY stroke="rgba(185, 153, 67)" stroke-width="5" marker-end='url(#markerArrow)'-->
<!--     ></line>-->
     <path :d=item.pathD stroke="rgba(185, 153, 67)" stroke-width="2"  />
   </g>
   <defs>
     <marker id='markerArrow' markerWidth='13' markerHeight='13' refx='2' refy='6' orient='auto'>
       <path d='M2,2 L2,11 L10,6 L2,2' style='fill:red' />
     </marker>
   </defs>
 </g>
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
      nodeLineData: [],
      nodeId: "",
      startX : 0,
      startY: 0,
      endX: 0,
      endY: 0
    }
  },
  watch: {
    nodeId(newValue,oldValue) {
      console.log(newValue)
      console.log(oldValue)
    },
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

  },
  created() {
    Bus.$on("nodeMessage", (message) => {
      console.log(message)
      this.nodeId = message.id
      this.startX = message.arrowX
      this.startY = message.arrowY
      const allLineData = this.$store.state.d3DataList.lines
      this.nodeLineData = []
      allLineData.map(item => {
        if(item.sourceid == this.nodeId) {
          item.startX = message.arrowX
          item.startY = message.arrowY
          this.nodeLineData.push(item)
        }
      })
      const endPositionList = this.$store.state.barChartList
      console.log(endPositionList)
      endPositionList.map((item) => {
        this.nodeLineData.map((item1) => {
          if(item.id == item1.targetid) {
            if(item.x && item.y) {
              item1.endX = item.x + 15
              item1.endY = item.y
              item1.pathD = "M" + item1.startX + " " + item1.startY + " " + "L" + item1.endX  + " " + item1.endY
            } else {
              item1.endX = 1920
              item1.endY = 580
              item1.pathD = "M" + item1.startX + " " + item1.startY + " " + "L" + item1.endX  + " " + item1.endY
            }

          }
        })
      })
      console.log(this.nodeLineData)
      console.log(this.$store.state.barChartList)
    });
    console.log()
  }
}
</script>

<style lang="scss" scoped>
.node_line {
  fill: red;
  stroke-width: 2px;
}
</style>
