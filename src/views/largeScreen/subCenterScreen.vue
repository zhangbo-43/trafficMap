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
            <span class="text"
              >{{ dateYear }} {{ dateWeek }} {{ dateDay }}</span
            >
            <span>数据时间: 12:00</span>
          </div>
        </div>
        <div class="right-box clearfix">
          <!-- <div class="province-box">
            <span class="text-cut-1"> 云南省</span>
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </div> -->
          <el-select
            v-model="provinceVal"
            :popper-append-to-body="false"
            placeholder="请选择"
            popper-class="select-info"
          >
            <el-option
              v-for="item in provinceList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <img
            v-show="!fullscreen"
            class="fullscreen-btn"
            src="../../assets/images/fullscreen.png"
            @click="fullScreen"
          />
          <img
            v-show="fullscreen"
            class="fullscreen-btn"
            src="../../assets/images/unfullscreen.png"
            @click="unFullScreen"
          />
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
          <!-- 话务总量头部  -->
          <div class="total-traffic">
            <div class="traffic">
              <label for="">话务总量</label>
              <span class="allCount">30,658,240</span>
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
            <svg
              id="traffice"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="1920"
              height="500"
            >
              <g class="topolog">
                <traffice datasource="[]"></traffice>
                <skillChart></skillChart>
                <Progress datasource="[]"></Progress>
              </g>
              <g class="quantity"></g>
              <g class="lines"></g>
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
 </div> 
</template>

<script>
import skillChart from "../../components/skillQueue/skillChart.vue";
import drawMixin from "../../utils/drawMixin";
import { formatTime } from "../../utils/index.js";
import Bus from "@/utils/eventBus.js";
import topLeft from "../topLeft";
import topRight from "../topRight";
import mainSelect from "../mainSelect";
import traffice from "./traffice";
import Progress from "./progress.vue";

export default {
  name: "wholeNetworkScreen",
  mixins: [drawMixin],
  data() {
    return {
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
    };
  },
  components: { topLeft, topRight, mainSelect, traffice, Progress, skillChart },
  mounted() {
    this.timeFn();
    this.cancelLoading();
    //监听键盘按键事件
    let self = this;
    this.$nextTick(function () {});
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
  background-image: url("../../assets/images/pageBg.png");
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
    .title {
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
    span {
      font-family: "allcount";
      color: #06ebdf;
      font-size: 30px;
      border-bottom: 2px solid #3a3c56;
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
  padding: 10px;
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
