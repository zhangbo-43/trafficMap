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

    <!-- 柱子加字体总高度270 -->
    <g id="pillar" v-for="item in showData" :key="item.id">
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

    <!-- 底部图标 -->
    <foreignObject
      :x="960 - 150"
      :y="y + 302"
      width="300"
      height="30"
      fill="null"
    >
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

    <!-- 柱状图右上角搜索排序选择 -->
    <foreignObject
      width="100%"
      height="100%"
      x="0"
      y="0"
      requiredExtensions="http://www.w3.org/1999/xhtml"
    >
      <div style="position: absolute; right: 20px; top: 540px">
        <searchsetflexible />
      </div>
    </foreignObject>

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
          <span
            class="active"
            @click="handleSelectShowTable($event, 'showQueuingData')"
            >排队量</span
          >
          <span @click="handleSelectShowTable($event, 'showServicedata')"
            >服务量</span
          >
        </div>
      </body>
    </foreignObject>

    <!-- 左右箭头 -->
    <g>
      <image
        @click="handlecurrentchange('left')"
        opacity="1"
        stroke-width="1"
        stroke-opacity="1"
        fill-opacity="1"
        width="48"
        height="48"
        :href="towLeftsvg"
        :x="x + 65 - 24"
        :y="y + 150 - 24"
      ></image>

      <image
        @click="handlecurrentchange('right')"
        opacity="1"
        stroke-width="1"
        stroke-opacity="1"
        fill-opacity="1"
        width="48"
        height="48"
        :href="towRightsvg"
        :x="1920 - 65 - 48"
        :y="y + 150 - 24"
      ></image>
    </g>
  </g>
</template>

<script>
import d3Data from "./d3Data";
import searchsetflexible from "../../components/searchSetFlexible.vue";
export default {
  data() {
    return {
      x: d3Data.dataset.quantity.x,
      y: d3Data.dataset.quantity.y,
      beginX: d3Data.dataset.quantity.x + 125,
      beginY: d3Data.dataset.quantity.y + 50,
      showValue: false,

      showData: [],
      showQueuingData: {
        currentPage: 1,
        data: [],
      },
      showServicedata: {
        currentPage: 1,
        data: [],
      },

      // 柱子宽度
      pillarWidth: 30,
      towLeftsvg: require("../../assets/images/towLeftsvg.svg"),
      towRightsvg: require("../../assets/images/towRightsvg.svg"),
    };
  },
  components: { searchsetflexible },
  methods: {
    // 选择排队量或排队量
    handleSelectShowTable(e, show) {
      document.getElementsByClassName("active")[0].classList.remove("active");
      e.target.classList.add("active");
      this.showData = this[show].data;
      if (show == "showQueuingData") {
        d3Data.dataset.quantity.showData.target == "queuingData";
      } else if (show == "showServicedata") {
        d3Data.dataset.quantity.showData.target == "servicedata";
      }
    },

    // 翻页
    handlecurrentchange(direction) {
      if (this.showData == this.showQueuingData.data) {
        if (direction == "left") {
          this.showQueuingData.currentPage -= 1;
        } else if (direction == "right") {
          this.showQueuingData.currentPage += 1;
        }
        this.initData("showQueuingData", d3Data.dataset.quantity.queuingData);
        this.showData = this.showQueuingData.data;
      } else if (this.showData == this.showServicedata.data) {
        if (direction == "left") {
          this.showServicedata.currentPage -= 1;
        } else if (direction == "right") {
          this.showServicedata.currentPage += 1;
        }
        this.initData("showServicedata", d3Data.dataset.quantity.servicedata);
        this.showData = this.showServicedata.data;
      }
      // d3Data.dataset.quantity.showData.data = this.showData;
    },

    // 初始化要显示在页面中的排队量和服务量数据
    initData(target, data) {
      let show = (this[target].currentPage - 1) * 20;

      if (data.slice(show, show + 20).length == 0) {
        if (this[target].currentPage <= 0) {
          this[target].currentPage = 1;
        }
        if (this[target].currentPage > 1) {
          this[target].currentPage -= 1;
        }
      } else {
        this[target].data = data.slice(show, show + 20);
        this[target].data.forEach((el, index) => {
          el.height = Math.round((el.value / el.totalVal) * 14) * 10;
          el.bgHeight = 140 - el.height;
          el.x = this.beginX + index * 85;
          el.y = this.beginY;
        });
      }
      if (data.slice(show - 20, show).length == 0) {
        d3Data.dataset.quantity.showData.leftHaveData = false;
      }
      if (data.slice(show + 20, show + 40).length == 0) {
        d3Data.dataset.quantity.showData.rightHaveData = false;
      }
    },
  },
  beforeMount() {
    this.initData("showQueuingData", d3Data.dataset.quantity.queuingData);
    this.initData("showServicedata", d3Data.dataset.quantity.servicedata);
    this.showData = this.showQueuingData.data;
    d3Data.dataset.quantity.showData.data = this.showData;
    this.$store.commit("changeBarDatas", d3Data.dataset.quantity.showData.data);
  },
  computed: {
    D3ShowData() {
      return d3Data.dataset.quantity.showData.data;
    },
  },
  watch: {
    showData() {
      d3Data.dataset.quantity.showData.data = this.showData;
    },

    D3ShowData(){
      this.D3ShowData.forEach((el, index) => {
          el.height = Math.round((el.value / el.totalVal) * 14) * 10;
          el.bgHeight = 140 - el.height;
          el.x = this.beginX + index * 85;
          el.y = this.beginY;
        });
      this.showData = this.D3ShowData
    }
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

    span {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .active {
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