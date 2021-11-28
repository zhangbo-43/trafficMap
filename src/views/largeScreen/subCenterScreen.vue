<template>
  <div id="index" ref="appRef">
    <div class="whole-Screen">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div class="whole-Screen-body">
        <!-- 看板大屏头部开始 -->
        <div class="title-top">
          <div class="title-times">
            <div class="title">云南话务地图看板大屏</div>
            <div class="times">
              <span class="text">{{ dateYear }} {{ dateWeek }}
                {{ dateDay }}</span>
              <span>数据时间: 12:00</span>
            </div>
          </div>
          <div class="right-box clearfix">
            <!-- <div class="province-box">
            <span class="text-cut-1"> 云南省</span>
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </div> -->
            <el-select v-model="provinceVal" :popper-append-to-body="false"
              placeholder="请选择" popper-class="select-info">
              <el-option v-for="item in provinceList" :key="item.value"
                :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <img v-show="!fullscreen" class="fullscreen-btn"
              src="../../assets/images/fullscreen.png" @click="fullScreen" />
            <img v-show="fullscreen" class="fullscreen-btn"
              src="../../assets/images/unfullscreen.png"
              @click="unFullScreen" />
          </div>
        </div>
        <!-- 看板大屏头部结束 -->
        <!-- 看板大屏数据展示主体部分 -->
        <div class="map-main-content">
          <!-- 热线话务历史趋势 -->
          <div class="map-left-top">
            <dv-border-box-7 :color="['#070D43', '#2773FF']">
              <topLeft />
            </dv-border-box-7>
          </div>
          <!-- 热线话务历史趋势结束 -->
          <div class="map-main">
            <div style="position: absolute; left: 10px; top: 310px">
              <mainSelect />
            </div>
            <div style="position: absolute; right: 0; top: 620px">
              <searchsetflexible />
            </div>
            <div style="position: absolute; right: 10px; top: 310px">
              <div class="zoom-in-out">
                <div class="zoom-line">
                  <span class="zoom-start-value">0</span>
                  <el-slider v-model="zoomValue" :step="10" :marks="remarks">
                  </el-slider>
                  <span class="zoom-start-value">100</span>
                </div>
              </div>
              <div class="nodes-point">
                <div class="node-total">
                  <span>正常节点<i class="el-icon-phone"
                      style="color: #09f0f5"></i></span>
                  <span>异常节点<i class="el-icon-phone"
                      style="color: #ed1858"></i></span>
                  <span>异常挂断<i class="icon iconfont icon-duankaiyichang"
                      style="color: #c77e3e"></i></span>
                  <span>接口异常<i class="icon iconfont icon-jiekouyichang"
                      style="color: #c33dc7"></i></span>
                </div>
                <div class="num-total">
                  <span><i class="icon iconfont icon-jiekouyichang"
                      style="color: #c33dc7"></i>接口异常总量：{{ Number(1568954).toLocaleString() }}</span>
                </div>
              </div>
            </div>
            <!-- 话务总量头部  -->
            <div class="total-traffic">
              <div class="traffic">
                <label for="">话务总量</label>
                <span class="allCount">30,658,240</span>
                <label for="" class="second">新增话务</label>
                <em class="allCount">30,658,240</em>
              </div>
              <!-- <div class="traffic-percent">
              <label for="">BICC占比: </label>
              <span>20%</span>
              <label for="">，RTC占比: </label>
              <span>40%</span>
              <label for=""> ，RTC占比: </label>
              <span>80%</span>
            </div> -->
            </div>
            <!-- 话务总量头部结束  -->

            <!--看板大屏主图部分  -->
            <div class="map-line-content">
              <svg id="traffice" version="1.1"
                xmlns="http://www.w3.org/2000/svg" width="1920" height="100vh">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                  width="100vw" height="100vh">
                  <g class="topolog">
                    <traffice datasource="[]"></traffice>
                    <center-chart>
                    </center-chart>
                    <Progress datasource="[]" @openDialog="openDialog"
                      @openTable="openTable"></Progress>
                  </g>
                </svg>

                <svg v-if="false">
                  <g class="quantity">
                    <Histograms></Histograms>
                  </g>
                </svg>
                <svg v-if="nodeVisible">
                  <g class="lines">
                    <node-Lines></node-Lines>
                  </g>
                </svg>
              </svg>
            </div>
            <!--看板大屏主图部分结束  -->

          </div>
          <!-- 异常挂断情况 -->
          <div class="map-right-top">
            <dv-border-box-7 :color="['#070D43', '#2773FF']">
              <topRight />
            </dv-border-box-7>
          </div>
          <!-- 异常挂断情况结束 -->
        </div>
        <!-- 看板大屏数据展示主体部分结束 -->
      </div>
    </div>
    <!--    服务量趋势图页面-->
    <service-chart :chartVisible="chartVisible" @closeDialog="handleClose"
      :optionData="optionData"></service-chart>
  </div>
</template>

<script>
import d3Data from "./d3Data";
import centerChart from "./centerChart.vue";
import drawMixin from "../../utils/drawMixin";
import { formatTime } from "../../utils/index.js";
import Bus from "@/utils/eventBus.js";
import topLeft from "../topLeft";
import topRight from "../topRight";
import mainSelect from "../mainSelect";
import traffice from "./traffice";
import Progress from "./progress.vue";
import Histograms from "./histograms.vue";
import serviceChart from "../../components/trendChart/serviceChart";
import searchsetflexible from "../../components/searchSetFlexible.vue";
import nodeLines from "./nodeLines";
import CenterChart from "./centerChart";
// import * as d3 from 'd3'
export default {
  name: "wholeNetworkScreen",
  mixins: [drawMixin],
  data() {
    return {
      nodeVisible: true,
      remarks: {},
      zoomValue: 50,
      // marks: {
      //     0: '0',
      //     50: {
      //       style: {
      //         color: '#1989FA'
      //       },
      //       label: this.$createElement('strong', '50')
      //     },
      //     100:'100'
      //   },
      d3Data: d3Data,
      max: 1,
      timing: null,
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      provinceList: [
        {
          value: "1",
          label: "云南省",
        },
        {
          value: "2",
          label: "北京市",
        },
        {
          value: "3",
          label: "河南省",
        },
        {
          value: "4",
          label: "河北省",
        },
        {
          value: "5",
          label: "天津市",
        },
        {
          value: "6",
          label: "内蒙古自治区",
        },
        {
          value: "7",
          label: "河北省",
        },
        {
          value: "8",
          label: "天津市",
        },
        {
          value: "9",
          label: "内蒙古自治区",
        },
      ],
      provinceVal: "云南省",
      fullscreen: false,
      chartVisible: false,
      optionData: {},
      dialogVisible: false,
      dialogTableData: {
        dialongTitle: "异常接口明细",
        tableTitle: true,
        defCol: "setTabCol",
        defData: "setTabData",
        tableColumn: {
          intTabCol: {
            name: "异常接口名称",
            count: "异常次数",
            offer: "接口提供方",
            CSFCode: "CSF编码",
          },
          csfCol: {
            name: "异常接口名称",
            count: "异常次数",
            offer: "接口提供方",
            CSFCode: "CSF编码",
          },
        },
        tableData: {},
      },
    };
  },
  components: {
    CenterChart,
    topLeft,
    topRight,
    mainSelect,
    traffice,
    Progress,
    centerChart,
    Histograms,
    serviceChart,
    searchsetflexible,
    nodeLines
  },
  created() {
    this.$store.commit('changeD3Datas', this.d3Data.dataset)
  },
  mounted() {
    console.log(this.d3Data.dataset.nodes);
    this.timeFn();
    this.cancelLoading();
    //监听键盘按键事件
    let self = this;
    this.$nextTick(function () { });
    document.addEventListener("keyup", function (e) {
      // console.log(e);
      if (e.keyCode == 27) {
        self.unFullScreen();
      }
    });
  },
  unMounted() {
    clearInterval(this.timing);
  },
  methods: {
    //关闭设置弹窗
    closeDialogtable(data) {
      this.multipleSelection = data;
      this.dialogTableData = false;
      console.log(data);
    },
    openDialog(params) {
      this.chartVisible = true;
      if (params == "nodeTrend") {
        this.optionData = {
          echartTitle: "节点服务量趋势图",
          options: {
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "cross",
              },
            },
            color: ["rgb(101, 158, 178)", "rgb(167, 3, 30)"],
            legend: {},
            toolbox: {
              show: true,
            },
            xAxis: {
              type: "category",
              boundaryGap: false,
              data: [
                "00:00",
                "02:00",
                "04:00",
                "06:00",
                "08:00",
                "10:00",
                "12:00",
                "14:00",
                "16:00",
                "18:00",
                "20:00",
                "22:00",
                "24:00",
              ],
            },
            // xAxis: {
            //   type:"time",
            //   axisLabel: {
            //     formatter: function (val) {
            //       var date= new Date(val)
            //       var texts=[date.getHours(),date.getMinutes()]
            //       return texts.join(":")
            //     }
            //   }
            // },
            yAxis: {
              type: "value",
              axisLine: {
                show: false,
              },
              splitLine: {
                show: true,
                lineStyle: {
                  type: "solid",
                  color: "#191D39",
                },
              },
              // axisLabel: {
              //   formatter: '{value} W'
              // },
              axisPointer: {
                snap: true,
              },
            },
            // visualMap: {
            //   show: false,
            //   dimension: 0,
            //   pieces: [
            //     {
            //       lte: 6,
            //       color: 'green'
            //     },
            //     {
            //       gt: 6,
            //       lte: 8,
            //       color: 'red'
            //     },
            //     {
            //       gt: 8,
            //       lte: 14,
            //       color: 'green'
            //     },
            //     {
            //       gt: 14,
            //       lte: 17,
            //       color: 'red'
            //     },
            //     {
            //       gt: 17,
            //       color: 'green'
            //     }
            //   ]
            // },
            series: [
              {
                name: "节点服务量",
                type: "line",
                // lineStyle: {
                //   normal: {
                //     color: "rgb(101, 158, 178)"
                //   }
                // },
                showSymbol: false,
                symbol: "circle",
                smooth: true,
                // prettier-ignore
                data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
                // markArea: {
                //   itemStyle: {
                //     color: 'rgba(255, 173, 177, 0.4)'
                //   },
                //   data: [
                //     [
                //       {
                //         name: 'Morning Peak',
                //         xAxis: '07:30'
                //       },
                //       {
                //         xAxis: '10:00'
                //       }
                //     ],
                //     [
                //       {
                //         name: 'Evening Peak',
                //         xAxis: '17:30'
                //       },
                //       {
                //         xAxis: '21:15'
                //       }
                //     ]
                //   ]
                // }
              },
              {
                name: "节点异常挂断量",
                type: "line",
                smooth: true,
                showSymbol: false,
                symbol: "circle",
                // itemStyle: {
                //   normal: {
                //     lineStyle: {
                //       type: "dashed",
                //       normal: {
                //         color: "rgb(167, 3, 30)"
                //       }
                //     }
                //   }
                // },
                data: [
                  100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 350, 390,
                  400, 500, 600, 750, 800, 389, 290, 500,
                ],
              },
            ],
          },
        };
      } else {
        this.optionData = {
          echartTitle: "技能队列服务排队趋势图",
          options: {
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "cross",
              },
            },
            color: ["rgb(101, 158, 178)", "rgb(167, 3, 30)"],
            legend: {},
            toolbox: {
              show: true,
            },
            xAxis: {
              type: "category",
              boundaryGap: false,
              data: [
                "00:00",
                "02:00",
                "04:00",
                "06:00",
                "08:00",
                "10:00",
                "12:00",
                "14:00",
                "16:00",
                "18:00",
                "20:00",
                "22:00",
                "24:00",
              ],
            },
            yAxis: {
              type: "value",
              axisLine: {
                show: false,
              },
              splitLine: {
                show: true,
                lineStyle: {
                  type: "solid",
                  color: "#191D39",
                },
              },
              axisPointer: {
                snap: true,
              },
            },
            series: [
              {
                name: "排队量趋势图",
                type: "line",
                smooth: true,
                showSymbol: false,
                symbol: "circle",
                // itemStyle: {
                //   normal: {
                //     lineStyle: {
                //       // type: "dashed",
                //       normal: {
                //         color: "rgb(103, 160, 180)"
                //       }
                //     }
                //   }
                // },
                data: [
                  120, 220, 320, 420, 520, 620, 720, 140, 160, 180, 200, 220,
                  240, 260,
                ],
              },
              {
                name: "服务量趋势图",
                type: "line",
                smooth: true,
                showSymbol: false,
                symbol: "circle",
                itemStyle: {
                  normal: {
                    lineStyle: {
                      type: "dashed",
                      normal: {
                        color: "rgb(103, 160, 180)",
                      },
                    },
                  },
                },
                data: [
                  240, 280, 320, 360, 400, 440, 480, 140, 160, 180, 200, 220,
                  240, 260, 180,
                ],
              },
            ],
          },
        };
      }
    },
    openTable() {
      this.dialogVisible = true;
    },
    // svgZoom() {
    //   let zoom = d3.behavior.zoom().scaleExtent([0.5, 2]).on('zoom', this.redraw);
    //   let svg = d3.select('#traffice')
    //       .call(zoom)
    //       .on('dblclick.zoom', null);
    //   svg.attr('transform', 'translate(' + d3.event.translate + ')' +
    //       ' scale(' + d3.event.scale + ')');
    // },
    // redraw() {
    //   let svg = d3.select('#traffice')
    //   svg.attr('transform', 'translate(' + d3.event.translate + ')' +
    //       ' scale(' + d3.event.scale + ')');
    // },
    timeFn() {
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), "HH: mm: ss");
        this.dateYear = formatTime(new Date(), "yyyy-MM-dd");
        this.dateWeek = this.weekday[new Date().getDay()];
      }, 1000);
    },
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
    //全屏
    fullScreen() {
      let element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        // IE11
        element.msRequestFullscreen();
      }
      this.fullscreen = true;
      Bus.$emit("fullScreen", this.fullscreen);
    },
    unFullScreen() {
      // var document = document.documentElement;
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      this.fullscreen = false;
      Bus.$emit("fullScreen", this.fullscreen);
    },
    handleClose(status) {
      this.chartVisible = status;
      console.log(status);
    },
  },
};
</script>

<style lang="scss" scoped>
#index {
  color: #d3d6dd;
  // width: 1920px;
  // height: 1080px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left top;
  overflow: hidden;
}
.whole-Screen {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/ztbj.png");
  background-size: cover;
  background-position: center center;
}
.whole-Screen-body {
  height: 100%;
}
.title-top {
  position: relative;
  .title-times {
    background: url("../../assets/images/title_bg.png") no-repeat center center;
    background-size: 100% auto;
    text-align: center;
    color: #73f1ff;
    width: 70%;
    margin: 0 auto;
    height: 90px;
    .title {
      font-size: 20px;
      padding-top: 20px;
    }
    .times {
      font-size: 12px;
      font-weight: normal;
      margin-top: 6px;
      span {
        margin-right: 10px;
      }
    }
  }
  .right-box {
    position: absolute;
    right: 10px;
    top: 10px;
    .province-box {
      width: 78px;
      height: 36px;
      background: url("../../assets/images/province_bg.png") no-repeat center;
      background-size: 100% auto;
      border-radius: 4px;
      text-align: center;
      line-height: 36px;
      font-size: 14px;
      padding: 0 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      float: left;
      margin-right: 10px;
      span {
        width: 60px;
        color: #3eb6f5;
        display: inline-block;
        font-size: 12px;
      }
      .el-icon-caret-bottom {
        position: relative;
      }
      .el-icon-caret-bottom:before {
        color: #3eb6f5;
        top: 50%;
      }
    }
    .fullscreen-btn {
      width: 24px;
      float: right;
      margin-top: 6px;
    }
    .el-select {
      margin-right: 10px;
    }
  }
}
.map-main-content {
  position: relative;
  .map-left-top {
    // border: 1px solid #001aff;
    // width: calc((100%-200px)/3.5);
    // height: calc(25vh+58px);
    width: 540px;
    height: 300px;
    position: absolute;
    left: 10px;
    top: 10px;
  }
  .map-main {
    .zoom-in-out {
      padding: 29px 29px 0 0;
      overflow: hidden;
      .zoom-line {
        width: 266px;
        float: right;
        .el-slider {
          width: 200px;
          display: inline-grid;
          margin: 0 12px;
          ::v-deep .el-slider__runway {
            height: 2px;
            background: #001a44;
            border-radius: 1px;
          }
          ::v-deep .el-slider__bar {
            display: none;
          }
          ::v-deep .el-slider__button {
            width: 9px;
            height: 9px;
            background: #0e2ecc;
            border: 2px solid #0071fe;
            // opacity: 0.31;
            border-radius: 50%;
          }
          ::v-deep .el-slider__stop {
            display: none;
          }
        }
        .zoom-start-value {
          font-size: 18px;
          opacity: 0.5;
        }
      }
    }
    .nodes-point {
      .node-total {
        margin-bottom: 17px;
        span {
          margin-right: 15px;
          i {
            margin-left: 4px;
          }
        }
      }
      .num-total {
        text-align: right;
        span {
          margin-right: 15px;
          i {
            margin-right: 4px;
          }
        }
      }
    }
  }
  .map-right-top {
    // border: 1px solid #001aff;
    width: 540px;
    height: 300px;
    position: absolute;
    right: 10px;
    top: 10px;
  }
}
.total-traffic {
  margin-top: 10px;
  text-align: center;
  .traffic {
    padding-top: 6px;
    margin-bottom: 10px;
    label {
      font-size: 18px;
      color: #ffffff;
      opacity: 0.6;
      margin-right: 6px;
    }
    .second {
      font-size: 14px;
      padding-left: 10px;
    }
    span {
      font-family: "allcount";
      color: #06ebdf;
      font-size: 30px;
      border-bottom: 2px solid #3a3c56;
    }
    em {
      font-family: "allcount";
      color: #06ebdf;
      font-style: normal;
      font-size: 18px;
    }
  }
  .traffic-percent {
    label {
      font-size: 12px;
      color: #ffffff;
      opacity: 0.6;
      margin-right: 6px;
    }
    span {
      color: #06ebdf;
      font-size: 12px;
    }
  }
}
.map-line-content {
  text-align: center;

  //padding: 10px;
}
.right-box {
  ::v-deep .el-input--suffix .el-input__inner {
    width: 78px;
    height: 36px;
    border: none;
    background: url("../../assets/images/province_bg.png") no-repeat center;
    background-size: 100% auto;
    border-radius: 4px;
    font-size: 12px;
    padding: 0 8px;
    color: #3eb6f5;
  }
  ::v-deep .el-icon-arrow-up:before {
    content: "\e790";
  }
  ::v-deep.el-input__icon {
    line-height: 36px;
  }
  ::v-deep .el-input--suffix .el-input__inner::-webkit-input-placeholder {
    color: #3eb6f5;
    font-size: 12px;
  }
  ::v-deep .el-select .el-input .el-select__caret {
    color: #3eb6f5;
  }
}
::v-deep .select-info {
  background-color: #00284d !important;
  box-shadow: none !important;
  border: none !important;
  float: left;
  margin-right: 10px;
  >>> .el-scrollbar__wrap {
    background: #00284d;
  }
  >>> .el-select-dropdown__list {
    background: #00284d;
  }
  .el-select-dropdown__item {
    background: #00284d;
    color: #fff;
    font-size: 12px;
    padding: 0 14px;
  }
  .el-select-dropdown__item:hover {
    // background: #070c49;
    color: #ccc;
  }
  .el-select-dropdown__item.selected {
    color: #409eff;
  }
}
::v-deep .el-popper[x-placement^="bottom"] .popper__arrow {
  border-bottom-color: #00284d !important;
}
::v-deep .el-popper[x-placement^="bottom"] .popper__arrow::after {
  border-bottom-color: #00284d !important;
}
::v-deep.el-select-dropdown__list {
  padding: 0 !important;
}
#traffice {
  margin: 0 auto;
}
</style>
