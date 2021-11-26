<template>
  <!-- 柱状图区域总高度320 -->
  <g id="histogram">
    <!-- 柱状图上部分割线 -->
    <line
      :x1="x + 20"
      :y1="y"
      :x2="1920 - 40"
      :y2="y"
      style="stroke: #001a44; stroke-width: 5"
    />

    <!-- 排队量服务量选择按钮 -->
    <foreignObject
      width="140"
      height="35"
      :x="x + 20"
      :y="y + 10"
      requiredExtensions="http://www.w3.org/1999/xhtml"
    >
      <body xmlns="http://www.w3.org/1999/xhtml" class="select-button">
        <div>
          <p class="cilck">
            <span>排队量</span>
          </p>
          <p>
            <span>服务量</span>
          </p>
        </div>
      </body>
    </foreignObject>

    <!-- 左右箭头 -->
    <g>
      <svg
        t="1637896064824"
        :x="x + 65 - 24"
        :y="y + 150 - 24"
        class="icon"
        viewBox="0 0 1037 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1409"
        width="48"
        height="48"
      >
        <path
          d="M1019.524214 941.185253a47.593401 47.593401 0 0 1-63.866555 70.554152l-3.232338-3.343799-463.004656-462.335896a47.593401 47.593401 0 0 1 0-66.875973l462.558816-461.890056a47.593401 47.593401 0 1 1 70.442692 63.866554q-1.560439 1.671899-3.343799 3.343799L590.514845 512.621724z m-475.488171 0a47.593401 47.593401 0 0 1-66.875973 66.875973L13.932494 546.05971a47.593401 47.593401 0 0 1 0-66.875973L476.37985 16.290541a47.593401 47.593401 0 0 1 66.875974 66.875974L114.915214 512.621724z"
          p-id="1410"
          fill="rgba(112,236,250,0.47)"
        ></path>
      </svg>
      <svg
        t="1637896551647"
        :x="1920 - 65 - 48"
        :y="y + 150 - 24"
        class="icon"
        viewBox="0 0 1036 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1715"
        width="48"
        height="48"
      >
        <path
          d="M16.728382 82.303638a47.620126 47.620126 0 0 1 63.902417-70.593771l3.234154 3.345676 463.264648 462.595513a47.620126 47.620126 0 0 1 0 66.913527L84.311043 1006.714006a47.620126 47.620126 0 0 1-73.381834-60.668264 39.925071 39.925071 0 0 1 2.899586-3.234154q1.561316-1.672838 3.345677-3.345676l428.692659-428.358092z m475.755173 0a47.620126 47.620126 0 0 1 66.913526-66.913527l463.487694 462.260945a47.620126 47.620126 0 0 1 0 66.913527L560.177739 1007.717709a47.620126 47.620126 0 0 1-66.913526-66.913527l428.581137-429.696362z"
          p-id="1716"
          fill="rgba(112,236,250,0.47)"
        ></path>
      </svg>
    </g>

    <!-- 柱子加字体总高度270 -->
    <g id="pillar" v-for="item in quantityData" :key="item.id">
      <g class="pillar-rect">
        <!-- 柱子宽度30 总高度为150 -->
        <rect
          :width="pillarWidth"
          :x="item.x"
          :y="item.y"
          :height="item.bgHeight"
          fill="url(#bg-rects)"
        />
        <rect
          :width="pillarWidth"
          :x="item.x"
          :y="item.y + item.bgHeight"
          :height="item.height"
          fill="url(#data-rects)"
        />

        <pattern
          id="bg-rects"
          x="0"
          y="0"
          :width="pillarWidth"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <rect
            class="bg-rect"
            x="0"
            y="5"
            :width="pillarWidth"
            height="5"
            style="fill: #032154"
          />
        </pattern>

        <pattern
          id="data-rects"
          x="0"
          y="0"
          :width="pillarWidth"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="5"
            :width="pillarWidth"
            height="5"
            style="fill: #007aff"
          />
        </pattern>
      </g>

      <!-- 柱子右上角显示数据量 -->
      <foreignObject
        width="40"
        height="25"
        :x="item.x + pillarWidth + 5"
        :y="item.y + pillarWidth + 10"
        requiredExtensions="http://www.w3.org/1999/xhtml"
        v-if="showValue"
      >
        <body class="value-text" xmlns="http://www.w3.org/1999/xhtml">
          <p>
            <span> {{ item.value }} </span>
          </p>
        </body>
      </foreignObject>

      <!-- 字体总高度为120，横轴坐标应为柱子横轴坐标减25，纵轴坐标应为柱子最上面的坐标加150 -->
      <foreignObject
        :x="item.x - 25"
        :y="item.y + 140"
        width="80"
        height="120"
        fill="null"
      >
        <body class="txt-body" xmlns="http://www.w3.org/1999/xhtml">
          <p class="pillar-text">
            <span class="pillar-name">三星级用户技能队列</span>
            <span
              ><span class="icon iconfont icon-daoru1"></span>
              {{ item.checkInVal }}
            </span>
            <span
              ><span class="icon iconfont icon-paiduizhong"></span>
              {{ item.inLineVal }}
            </span>
            <span>
              <span class="icon iconfont icon-yonghuming"></span>
              {{ item.inService }}
            </span>
          </p>
        </body>
      </foreignObject>
    </g>

    <foreignObject :x="960 - 150" :y="y + 302" width="300" height="30" fill="null">
      <body class="logotype" xmlns="http://www.w3.org/1999/xhtml">
        <p class="logo-text">
          <span>
            <span class="icon iconfont icon-daoru1"></span>
            签入坐席
          </span>
          <span>
            <span class="icon iconfont icon-paiduizhong"></span>
            排队中
          </span>
          <span>
            <span class="icon iconfont icon-yonghuming"></span>
            服务中
          </span>
        </p>
      </body>
    </foreignObject>
  </g>
</template>

<script>
import d3Data from "./d3Data";
export default {
  data() {
    return {
      x: d3Data.dataset.quantity.x,
      y: d3Data.dataset.quantity.y,
      beginX: d3Data.dataset.quantity.x + 125,
      beginY: d3Data.dataset.quantity.y + 50,
      quantityData: d3Data.dataset.quantity.data,
      showQuantityData:[],
      showValue: false,

      // 柱子宽度
      pillarWidth: 30,
    };
  },
  methods: {},
  beforeMount() {
    this.quantityData.forEach((el, index) => {
      el.height = Math.round((el.value / el.totalVal) * 14) * 10;
      el.bgHeight = 140 - el.height;
      el.x = this.beginX + index * 85;
      el.y = this.beginY;

      //每次渲染要循环20次原数据,若原数据过大可能造成卡顿，记录下次优化
      d3Data.dataset.quantity.data.forEach(item => {
        if(item.id==el.id){
          item.x = el.x + 15
          item.y = el.y
        }
      });
      
    });
  },
};
</script>

<style scope lang="scss">
.txt-body {
  background-color: rgba(0, 0, 0, 0);
  margin: 0;
  padding: 0;
  padding-top: 10px;

  .pillar-text {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    text-align: left;

    .pillar-name {
      -webkit-line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #00a698;
    }

    .icon {
      color: #00a698;
      opacity: 0.84;
    }
  }
}

.value-text {
  background-color: rgba(0, 0, 0, 0);
  display: none;

  p {
    width: 100%;
    height: 100%;
    border: 1px solid #fff;
    border-radius: 5px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.select-button {
  background-color: #000;
  height: 100%;
  width: 100%;
  div {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #394280;
    p {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .cilck {
      background-color: #394280;
    }
  }
}

.logotype {
  background-color: rgba(0, 0, 0, 0);
  p {
    display: flex;
    justify-content: space-between;
    .icon {
      color: #00a698;
      opacity: 0.84;
    }
  }
}
</style>