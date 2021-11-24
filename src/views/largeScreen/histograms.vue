<template>
  <g id="histogram">

    <!-- 柱子宽度30 总高度为200 -->
    <g id="pillar">
      <rect width="30" x="0" y="0" height="50" fill="url(#bg-rects)" />
      <rect width="30" x="0" y="50" height="150" fill="url(#data-rects)" />

      <pattern
        id="bg-rects"
        x="0"
        y="0"
        width="30"
        height="10"
        patternUnits="userSpaceOnUse"
      >
        <rect
          class="bg-rect"
          x="0"
          y="5"
          width="30"
          height="5"
          style="fill: #032154"
        />
      </pattern>

      <pattern
        id="data-rects"
        x="0"
        y="0"
        width="30"
        height="10"
        patternUnits="userSpaceOnUse"
      >
        <rect x="0" y="5" width="30" height="5" style="fill: #007aff" />
      </pattern>
    </g>

    <g>
      <use href="#pillar" x="1200" y="400" fill="blue" />

        <!-- 柱子下面的文字，横坐标为柱子横坐标减20，纵坐标为柱子纵坐标加200 -->
      <foreignObject x="1180" y="600" width="80" height="100" fill="null">
        <body xmlns="http://www.w3.org/1999/xhtml">
          <p class="pillar-text">
            <span class="pillar-name">三星级用户技能队列</span>
            <span><span class="icon iconfont icon-daoru1"></span> 213 </span>
            <span
              ><span class="icon iconfont icon-paiduizhong"></span> 500</span
            >
            <span>
              <span class="icon iconfont icon-yonghuming"></span> 364</span
            >
          </p>
        </body>
      </foreignObject>
    </g>
  </g>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scope lang="scss">
body {
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
</style>