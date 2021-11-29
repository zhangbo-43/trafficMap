<template>
  <g>
    <g v-if="nodeLineData.length !==0">
      <g v-for="item in nodeLineData" :key="item.id">
        <!--     <line class="node_line" :x1=item.startX :y1=item.startY :x2=item.endX :y2=item.endY stroke="rgba(185, 153, 67)" stroke-width="5" marker-end='url(#markerArrow)'-->
        <!--     ></line>-->
        <path :d=item.pathD stroke="rgba(185, 153, 67)" stroke-width="2" marker-end='url(#markerArrow)'/>
        <!--        <image class="node-image" :x="(item.startX + item.endX) / 2 - 5" width="15" height="15"-->
        <!--               :y="(item.startY + item.endY) / 2" :href="arrowUrl" ></image>-->
      </g>
      <defs>
        <marker id="markerArrow" markerWidth="8" markerHeight="8" refx="2" refy="5" orient="auto">
          <path d="M 0,0 V 4 L6,2 Z" style="fill: #61a8e0;"/>
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
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0,
      // arrowUrl:require('../../assets/images/arrowDown.svg')
    }
  },
  watch: {
    nodeId(newValue, oldValue) {
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
    arrowPath:function () {
      return function(x1, y1, x2, y2) {
        var path;
        var slopy, cosy, siny;
        var Par = 10.0;
        var x3, y3;
        slopy = Math.atan2((y1 - y2), (x1 - x2));
        cosy = Math.cos(slopy);
        siny = Math.sin(slopy);

        path = "M" + x1 + "," + y1 + " L" + x2 + "," + y2;

        x3 = (Number(x1) + Number(x2)) / 2;
        y3 = (Number(y1) + Number(y2)) / 2;

        path += " M" + x3 + "," + y3;

        path += " L" + (Number(x3) + Number(Par * cosy - (Par / 2.0 * siny))) + "," + (Number(y3) + Number(Par * siny + (Par / 2.0 * cosy)));

        path += " M" + (Number(x3) + Number(Par * cosy + Par / 2.0 * siny) + "," + (Number(y3) - Number(Par / 2.0 * cosy - Par * siny)));
        path += " L" + x3 + "," + y3;

        return path;
      }
    }
  },
  methods: {

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
      if (message.type == "node") {
        allLineData.map(item => {
          if (item.sourceid == message.id) {
            item.startX = message.arrowX
            item.startY = message.arrowY
            this.nodeLineData.push(item)
          }
        })
        const endPositionList = this.$store.state.barChartList
        console.log(endPositionList)
        endPositionList.map((item) => {
          this.nodeLineData.map((item1) => {
            if (item.id == item1.targetid) {
              if (item.x && item.y) {
                item1.endX = item.x + 15
                item1.endY = item.y
                item1.pathD = "M" + item1.startX + " " + item1.startY + " " + "L" + item1.endX + " " + item1.endY
              } else {
                item1.endX = 1920
                item1.endY = 580
                item1.pathD = "M" + item1.startX + " " + item1.startY + " " + "L" + item1.endX + " " + item1.endY
              }
            }
          })
        })
      } else if (message.type == "bar") {
        allLineData.map(item => {
          if (item.targetid == message.id && item.x1 && item.y1) {
            item.endX = message.endX
            item.endY = message.endY
            item.startX = this.arrowX(item.x1) + 7
            item.startY = this.arrowY(item.y1) + 8
            item.pathD = "M" + item.startX + " " + item.startY + " " + "L" + item.endX + " " + item.endY
            this.nodeLineData.push(item)
          }
        })
        console.log(this.nodeLineData)
      }
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

.node-image {
  color: red;
}
</style>
