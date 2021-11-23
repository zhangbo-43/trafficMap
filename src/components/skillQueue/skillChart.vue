<template>
  <g class="centerBox">
    <g>
      <line  v-for="(item) in this.d3Data.dataset.nodes.children" :key="item.id" x1="920" y1="200" :x2=item.x2 :y2=item.y2 style="stroke:rgb(20, 81, 248);stroke-width:2"/>
      <circle  v-for="(item) in this.d3Data.dataset.markList" :key="item.id" r="4" fill="#fff" :cx=item.x :cy=item.y></circle>
    </g>
    <g>
      <image  opacity="1" stroke-width="1" stroke-opacity="1" fill-opacity="1" :x=this.d3Data.dataset.nodes.x :y=this.d3Data.dataset.nodes.y  width="400" height="400" :href="centerUrl"></image>
    </g>
    <g v-for="item in this.d3Data.dataset.nodes.children" :key="item.id">
      <image  opacity="1" stroke-width="1" stroke-opacity="1" fill-opacity="1" :x=item.x :y=item.y :width=item.width :height=item.width :href="imgUrl" ></image>
<!--    :style="{transform:translate(0,item.y)}"  :style="{transform:translate(100,100)}"-->
      <text fill="#fff" :x=item.x  :y=item.y text-anchor="start" dx="0" dy="70">{{item.name}}</text>
      <text  fill="rgba(6, 202, 195)" :x=item.valueX  :y=item.valueY text-anchor="start">{{item.value}}</text>
      <image  opacity="1" stroke-width="1" stroke-opacity="1" fill-opacity="1"  :x=item.bottomX  :y=item.bottomY width="15" height="15" :href="arrowUrl"></image>
    </g>

<!--    <g>-->
<!--      <image  opacity="1" stroke-width="1" stroke-opacity="1" fill-opacity="1" :x=this.testData[0].children[0].x :y=this.testData[0].children[0].y :width=this.testData[0].children[0].width :height=this.testData[0].children[0].width :href="this.testData[0].children[0].imgUrl" transform="translate(-30,-30)"></image>-->
<!--      <text x="70" y="30"  fill="rgba(6, 202, 195)" transform="translate(-45,35)">{{this.testData[0].children[0].value}}</text>-->
<!--&lt;!&ndash;      <text x="280" y="100"  fill="rgba(6, 202, 195)" transform="translate(-25,55)">{{this.testData[0].children[0].value}}</text>&ndash;&gt;-->
<!--      <image  opacity="1" stroke-width="1" stroke-opacity="1" fill-opacity="1"  x="278" y="290" width="15" height="15" :href="this.arrowUrl" transform="translate(-30,-30)"></image>-->
<!--      <text fill="#fff" :x=this.testData[0].children[0].x  :y=this.testData[0].children[0].y text-anchor="middle" transform="translate(0,30)">{{this.testData[0].children[0].label}}</text>-->
<!--&lt;!&ndash;     &ndash;&gt;-->
<!--&lt;!&ndash;      &ndash;&gt;-->
<!--&lt;!&ndash;      &ndash;&gt;-->
<!--&lt;!&ndash;      &ndash;&gt;-->
<!--    </g>-->
<!--    <g>-->
<!--      <image  opacity="1" stroke-width="1" stroke-opacity="1" fill-opacity="1" :x=this.testData[0].children[1].x :y=this.testData[0].children[1].y :width=this.testData[0].children[1].width :height=this.testData[0].children[1].width :href="this.testData[0].children[1].imgUrl" transform="translate(-30,-30)"></image>-->
<!--      <text x="70" y="30"  fill="rgba(6, 202, 195)" transform="translate(-45,35)">{{this.testData[0].children[0].value}}</text>-->
<!--      <image  opacity="1" stroke-width="1" stroke-opacity="1" fill-opacity="1"  x="68" y="150" width="15" height="15" :href="this.arrowUrl" transform="translate(-30,-30)"></image>-->
<!--      <text fill="#fff" :x=this.testData[0].children[1].x  :y=this.testData[0].children[1].y text-anchor="middle">{{this.testData[0].children[1].label}}</text>-->
<!--    </g>-->
<!--    <g>-->
<!--      <image  opacity="1" stroke-width="1" stroke-opacity="1" fill-opacity="1" :x=this.testData[0].children[2].x :y=this.testData[0].children[2].y :width=this.testData[0].children[2].width :height=this.testData[0].children[2].width :href="this.testData[0].children[2].imgUrl" transform="translate(-30,-30)"></image>-->
<!--      <text x="130" y="80"  fill="rgba(6, 202, 195)" transform="translate(-30,45)">2000</text>-->
<!--      <image  opacity="1" stroke-width="1" stroke-opacity="1" fill-opacity="1"  x="143" y="220" width="15" height="15" :href="this.arrowUrl" transform="translate(-30,-30)"></image>-->
<!--      <text fill="#fff" :x=this.testData[0].children[2].x  :y=this.testData[0].children[2].y text-anchor="middle">{{this.testData[0].children[2].label}}</text>-->
<!--    </g>-->
<!--    <g>-->
<!--      <image  opacity="1" stroke-width="1" stroke-opacity="1" fill-opacity="1" :x=this.testData[0].children[3].x :y=this.testData[0].children[3].y :width=this.testData[0].children[3].width :height=this.testData[0].children[3].width :href="this.testData[0].children[3].imgUrl" transform="translate(-30,-30)"></image>-->
<!--      <text x="400" y="80"  fill="rgba(6, 202, 195)" transform="translate(-30,45)">1000</text>-->
<!--      <text fill="#fff" :x=this.testData[0].children[3].x  :y=this.testData[0].children[3].y text-anchor="middle">{{this.testData[0].children[3].label}}</text>-->
<!--      <image  opacity="1" stroke-width="1" stroke-opacity="1" fill-opacity="1"  x="414" y="220" width="15" height="15" :href="this.arrowUrl" transform="translate(-30,-30)"></image>-->
<!--    </g>-->
<!--    <g>-->
<!--      <image  opacity="1" stroke-width="1" stroke-opacity="1" fill-opacity="1" :x=this.testData[0].children[4].x :y=this.testData[0].children[4].y :width=this.testData[0].children[4].width :height=this.testData[0].children[4].width :href="this.testData[0].children[4].imgUrl" transform="translate(-30,-30)"></image>-->
<!--      <text x="465" y="30"  fill="rgba(6, 202, 195)" transform="translate(-35,35)">900</text>-->
<!--      <text fill="#fff" :x=this.testData[0].children[4].x  :y=this.testData[0].children[4].y text-anchor="middle">{{this.testData[0].children[4].label}}</text>-->
<!--      <image  opacity="1" stroke-width="1" stroke-opacity="1" fill-opacity="1"  x="468" y="150" width="15" height="15" :href="this.arrowUrl" transform="translate(-30,-30)"></image>-->
<!--    </g>-->
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
        testData: [
          {
            x: 760,
            y: 0,
            id: 1,
            children: [
              //  第一层左侧
              {
                x: 580,
                y: 160,
                x2: 580,
                y2: 190,
                id: 3,
                label: "互联网话务",
                value: 1500,
                bottomX:60,
                bottomY:180
              },
              //  第二层左侧
              {
                x: 640,
                y: 270,
                x2: 700,
                y2: 310,
                id: 5,
                label: "语音话务",
                value: 2000,
                bottomX:130,
                bottomY:240
              },
              //  中点
              {
                x: 880,
                y: 350,
                x2: 920,
                y2: 360,
                id: 2,
                label: "溢出流程",
                value: 1200,
                bottomX:270,
                bottomY:270
              },
              //  第二层右侧
              {
                x: 1140,
                y: 270,
                x2: 1160,
                y2: 320,
                id: 6,
                label: "视频话务",
                value: 1000,
                bottomX:405,
                bottomY:240
              },
              //  第一层右侧
              {
                x: 1220,
                y: 160,
                x2: 1220,
                y2: 190,
                id: 4,
                label: "跨网支撑",
                value: 900,
                bottomX:470,
                bottomY:180
              },
            ]
          },
          {markList: [
              //  第一层左右两个点
              {
                x: 730,
                y: 195,
                id: 12
              }, {
                x: 760,
                y: 280,
                id: 13
              },
              //  第二层左右两个点
              {
                x: 920,
                y: 320,
                id: 14
              }, {
                x: 1080,
                y: 280,
                id: 15
              }, {
                x: 1140,
                y: 195,
                id: 16
              },
            ]}
          ],
    }
  },
  methods: {
    // getPoint() {
    //   this.slides = d3.range(25).map(function (i) { //生成多个圆数据用于渲染流星效果
    //     return {
    //       r: i * 0.2
    //     }
    //   });
    //   console.log(this.slides)
    // },
  },
  mounted() {
    // this.getPoint()
    console.log(this.d3Data)

  },
  created() {
      this.testData[0].width=80
      this.testData[0].height=80
    if(this.testData[0].children.length == 1) {
      this.testData[0].children[0].width = 70
      this.testData[0].children[0].height = 70
    } else if(this.testData[0].children.length == 2) {
      this.testData[0].children[0].width = 50
      this.testData[0].children[0].height = 50
      this.testData[0].children[1].width == 50
      this.testData[0].children[1].height == 50
    } else if(this.testData[0].children.length == 3) {
      this.testData[0].children[0].width = 50
      this.testData[0].children[0].height = 50
      this.testData[0].children[1].width = 70
      this.testData[0].children[1].height = 70
      this.testData[0].children[2].width = 50
      this.testData[0].children[2].height = 50
    }else if(this.testData[0].children.length == 4) {
      this.testData[0].children[0].width = 50
      this.testData[0].children[0].height = 50
      this.testData[0].children[1].width = 60
      this.testData[0].children[1].height = 60
      this.testData[0].children[2].width = 60
      this.testData[0].children[2].height = 60
      this.testData[0].children[3].width = 50
      this.testData[0].children[3].height = 50
    } else {
      this.testData[0].children[0].width = 50
      this.testData[0].children[0].height = 50
      this.testData[0].children[0].dx = this.testData[0].children[0].x - this.testData[0].children[0].width
      this.testData[0].children[0].dy = this.testData[0].children[0].y - this.testData[0].children[0].height
      this.testData[0].children[1].width = 60
      this.testData[0].children[1].height = 60
      this.testData[0].children[1].dx = this.testData[0].children[1].x - this.testData[0].children[1].width
      this.testData[0].children[1].dy = this.testData[0].children[1].y - this.testData[0].children[1].height
      this.testData[0].children[1].width = 60
      this.testData[0].children[1].height = 60
      this.testData[0].children[1].dx = this.testData[0].children[1].x - this.testData[0].children[1].width
      this.testData[0].children[1].dy = this.testData[0].children[1].y - this.testData[0].children[1].height
      this.testData[0].children[2].width = 70
      this.testData[0].children[2].height = 70
      this.testData[0].children[2].dx = this.testData[0].children[2].x - this.testData[0].children[2].width
      this.testData[0].children[2].dy = this.testData[0].children[2].y - this.testData[0].children[2].height
      this.testData[0].children[3].width = 60
      this.testData[0].children[3].height = 60
      this.testData[0].children[3].dx = this.testData[0].children[3].x - this.testData[0].children[3].width
      this.testData[0].children[3].dy = this.testData[0].children[3].y - this.testData[0].children[3].height
      this.testData[0].children[4].width = 50
      this.testData[0].children[4].height = 50
      this.testData[0].children[4].dx = this.testData[0].children[4].x - this.testData[0].children[4].width
      this.testData[0].children[4].dy = this.testData[0].children[4].y - this.testData[0].children[4].height
    }
    console.log(this.testData)
  }
}
</script>
<style lang="scss" scoped>
</style>
