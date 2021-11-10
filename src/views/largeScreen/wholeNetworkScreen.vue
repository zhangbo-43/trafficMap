<template>
  <div class="whole-Screen">
    <dv-loading v-if="loading">Loading...</dv-loading>
    <div class="whole-Screen-body">
      <!-- 看板大屏头部开始 -->
      <div class="title-top">
        <div class="title-times">
          <div class="title">话务地图看板大屏</div>
          <div class="times">
            <span class="text"
              >{{ dateYear }} {{ dateWeek }} {{ dateDay }}</span
            >
            <span>数据时间: 12:00</span>
          </div>
        </div>
        <div class="right-box">
          <div class="province-box">
            <span> 云南省 </span>
          </div>
          <!-- <img src="" alt="" /> -->
        </div>
      </div>
      <!-- 看板大屏头部结束 -->
      <!-- 看板大屏数据展示主体部分 -->
      <div class="map-main-content">
        <!-- 热线话务历史趋势 -->
        <div class="map-left-top">热线话务历史趋势部分</div>
        <!-- 热线话务历史趋势结束 -->
        <div class="map-main">
          <!-- 话务总量头部  -->
          <div class="total-traffic">
            <div class="traffic">
              <label for="">Total traffic</label>
            </div>
            <div class="traffic-percent">
              BICC占比： ，ISBC占比： ，RTC占比：
            </div>
          </div>
          <!-- 话务总量头部结束  -->
          <!--看板大屏主图部分  -->
          <div class="map-line-content">这里是地图主体核心部分</div>
          <!--看板大屏主图部分结束  -->
        </div>
        <!-- 异常挂断情况 -->
        <div class="map-right-top">异常挂断情况</div>
        <!-- 异常挂断情况结束 -->
      </div>
      <!-- 看板大屏数据展示主体部分结束 -->
    </div>
  </div>
</template>

<script>
import drawMixin from "../../utils/drawMixin";
import { formatTime } from "../../utils/index.js";
export default {
  name: "wholeNetworkScreen",
  mixins: [drawMixin],
  data() {
    return {
      timing: null,
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    };
  },
  components: {},
  mounted() {
    this.timeFn();
    this.cancelLoading();
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
  },
};
</script>

<style lang="scss" scoped>
.title-top {
  position: relative;
  .title-times {
    text-align: center;
    color: #73f1ff;
    .title {
      font-size: 20px;
    }
    .times {
      font-size: 12px;
      font-weight: normal;
      margin-top: 6px;
    }
    .title {
    }
  }
  .right-box {
    position: absolute;
    right: 10px;
    top: -6px;
    .province-box {
      width: 86px;
      height: 36px;
      background: #060b2f;
      border: 2px solid #001aff;
      border-radius: 4px;
      text-align: center;
      line-height: 36px;
      font-size: 14px;
      box-shadow: 2px #001aff;
    }
  }
}
.map-main-content {
  position: relative;
  .map-left-top {
    border: 1px solid #001aff;
    width: 300px;
    height: 180px;
    position: absolute;
    left: 10px;
    top: 10px;
  }
  .map-right-top {
    border: 1px solid #001aff;
    width: 300px;
    height: 180px;
    position: absolute;
    right: 10px;
    top: 10px;
  }
}
</style>
