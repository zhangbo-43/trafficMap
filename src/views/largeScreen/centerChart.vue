<template>
  <g class="centerBox">
    <g class="lines">
      <g class="line" v-for="item in this.centerData"
         :key="item.id">
        <line :x1="startX" :y1="startY" :x2="endX(item.x, item.size)"
              :y2="endY(item.y, item.size)"/>
        <image class="cursor " :x="startX" :y="startY"
               width="20" height="20" :href="light"></image>
      </g>
    </g>
    <g class="center">
      <image :x="centerX" :y="centerY" :width="centerWidth"
             :height="centerHeight" :href="centerUrl"></image>
    </g>
    <g class="nodes">
      <g class="node" v-for="item in this.centerData"
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
    // cursor: function () {
    //   return function (x) {
    //     return x - 10;
    //   };
    // },
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
      width: 1920, //总宽度
      nodeWidth: 100, //节点宽度
      nodeDistance: 50, //节点与节点距离
      lineHeight: 100, //每层数据高度
      centerData: [
        {
          id: "21",
          size: "mini",  //default large mini
          value: 1500,
          name: "互联网话务",
        },
        {
          id: "23",
          size: "default",  //default large mini
          value: 2000,
          name: "语音话务",
        },
        {
          id: "24",
          size: "large",  //default large mini
          value: 1200,
          name: "溢出流程"
        },
        {
          id: "25",
          size: "default",  //default large mini
          value: 1000,
          name: "视频话务",
        },
        {
          id: "22",
          size: "mini",  //default large mini
          value: 900,
          name: "跨网支撑"
        },
      ],
      flag: false,
      d3Data: d3Data,
      centerX: 0,
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
    /**
     * 获取开始节点x坐标
     * @param {同级数据长度} len
     * @param {中心位置} center
     * @returns
     */
    getStartX(len, center) {
      let startX = 0;
      console.log(center)
      if (len % 2 === 0) { //如果是偶数个数
        //减去一半节点宽度，减去一半间距宽度 ，加上1/2间距宽度
        startX = center - (len / 2) * this.nodeWidth - (len / 2) * this.nodeDistance + this.nodeDistance / 2;
      } else {
        //减去一半节点宽度，减去一半间距宽度 ，加上1/2节点宽度      -20是为了让中间图标居中
        startX = center - (len / 2) * this.nodeWidth - (len / 2) * this.nodeDistance + this.nodeWidth / 2 - 20;
      }
      return startX;
    },
    forRoot(dataSet) {
      this.centerX = this.width / 2 - this.centerWidth / 2
      const startX = this.getStartX(dataSet.length, this.width / 2);
      for (let i = 0; i < dataSet.length; i++) {
        let level = 0
        //item.x = startX + index * (this.nodeWidth + this.nodeDistance);
        if (i == 0 || i == 4) {
          level = 0.5
          dataSet[i].x = startX + i * (this.nodeWidth + this.nodeDistance);
          dataSet[i].y = level * this.lineHeight;
        } else if (i == 1) {
          level = 1.5
          dataSet[i].x = startX + i * (this.nodeWidth / 2 + this.nodeDistance);
          dataSet[i].y = level * this.lineHeight;
        } else if (i == 3) {
          level = 1.5
          dataSet[i].x = startX + i * (this.nodeWidth + this.nodeDistance) + this.nodeWidth / 2;
          dataSet[i].y = level * this.lineHeight;
        }else {
          level = 1.7
          dataSet[i].x = startX + i * (this.nodeWidth + this.nodeDistance);
          dataSet[i].y = level * this.lineHeight;
        }
      }
    },
    click(data) {
      // this.flag = !this.flag
      // console.log(this.flag)
      Bus.$emit("nodeMessage", {
        type: "node",
        // show: this.flag,
        id: data.id,
        arrowX: this.arrowX(data.x) + 7,
        arrowY: this.arrowY(data.y) + 7
      })
    },
    imgTransition() {
      let run = () => {
        var cursorSvg = d3.selectAll(".cursor")
        var datas = this.centerData
        cursorSvg.attr('x', () => {
          return this.centerX + this.centerWidth / 2
        }).attr('y', () => {
          return this.centerY + this.centerHeight / 2 + 10;
        })
        cursorSvg.data(datas).transition('position')
            .attr('x', function (d) {
              return d.x + ((!d.size || d.size === "default") ? 22 : d.size === "large" ? 17 : 27) + 12
            })
            .attr('y', function (d) {
              return d.y + ((!d.size || d.size === "default") ? 55 : d.size === "large" ? 37 : 42)
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
    this.forRoot(this.centerData)
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
