<template>
  <div>
    <el-time-picker is-range  arrow-control class="selectDate"
                    :popper-append-to-body="false"
                    popper-class="set-time-style"
                    v-model="value1"
                    range-separator="—" 
                    start-placeholder="00:00"
                    end-placeholder="12:00" size="mini" :picker-options="pickerOptions"
                    format="HH:mm" :clearable="true"
                    placeholder="选择时间范围">
    </el-time-picker>
  </div>
</template>

<script>
export default {
  name: "timePoint",
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      value1: '',
      // currentDate: ''
    }
  },
  methods: {
    getPreMonth() {
      console.log('时间区间选择')
    }
  },
  created() {
    this.getPreMonth()
  }
}
</script>
<style>
.el-picker-panel {
  background-color: #15244D;
  color: #fff;
  border: none;
  line-height: initial;
}
.el-picker-panel__icon-btn {
  color: #fff;
}
.el-date-picker__header-label {
  color: #fff;
}
.el-date-table th {
  color: #fff;
}
.set-time-style .el-time-panel__footer .el-time-panel__btn.cancel{
    color:#FFFFFF;
    opacity: 0.5;
    }
  .set-time-style  .el-time-range-picker__body {
        border-radius: 2px;
        border: 1px solid #394280;
    }
  .set-time-style  .el-time-panel__footer{
    border: 1px solid #394280;
  }
 .set-time-style  .el-time-panel__content::before{
    border-top: 1px solid #394280;
    border-bottom: 1px solid #394280;
  }
   .set-time-style  .el-time-panel__content::after{
    border-top: 1px solid #394280;
    border-bottom: 1px solid #394280;
  }
 .set-time-style .el-time-spinner__item{
   color:#999999
  }
 .set-time-style .el-time-spinner__item.active:not(.disabled){
   color:#fff
  }
  .set-time-style .el-time-spinner__wrapper.is-arrow .el-time-spinner__item:hover:not(.disabled):not(.active) {
    background:none;
    color:#394280;
    cursor: default;
}
</style>
<style lang="scss" scoped>
.el-date-editor.el-input, .el-date-editor.el-input__inner {
  width: 120px;
  border-color: #394280;
  background-color: #060736;
  color: #fff;
}
::v-deep .el-range-editor--mini .el-range-separator {
    color: #fff;
}
::v-deep .el-range-editor--mini .el-range-input {
  border-color: #394280;
  background-color: #060736;
  color: #fff;
}
::v-deep .el-icon-time{
  // display: none;
  width:0;
}
::v-deep .el-icon-time:before {
   content: "\e790";
   color:#41B5F0;
   right: 5px;
   position: absolute;
}
::v-deep .el-date-editor .el-range__close-icon{
    color:#41B5F0;
    content: "\e790";
    display: none;
}
</style>
