<template>
  <g id="histogram">
    <!-- 柱子加字体总高度320 -->
    <g id="pillar" v-for="item in quantity" :key="item.id">
      <g class="pillar-rect">
        <!-- 柱子宽度30 总高度为200 -->
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

      <!--  -->
      <foreignObject
        width="50"
        height="25"
        :x="item.x + pillarWidth + 5"
        :y="item.y + pillarWidth + 10"
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <body class="value-text" xmlns="http://www.w3.org/1999/xhtml">
          <p>
            <span> {{ item.value }} </span>
          </p>
        </body>
      </foreignObject>

      <!-- 字体总高度为120，横轴坐标应为柱子横轴坐标减20，纵轴坐标应为柱子最上面的坐标加200 -->
      <foreignObject
        :x="item.x - 20"
        :y="item.y + 200"
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
  </g>
</template>

<script>
import d3Data from "./d3Data";
export default {
  data() {
    return {
      quantity: d3Data.dataset.quantity,

      // 柱子宽度
      pillarWidth: 30,
    };
  },
  methods: {},
  beforeMount() {
    this.quantity.forEach((el) => {
      el.height = Math.round((el.value / el.totalVal) * 20) * 10;
      el.bgHeight = 200 - el.height;
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
  p{
    width: 100%;height: 100%;
    border: 1px solid #fff;
    border-radius: 5px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>