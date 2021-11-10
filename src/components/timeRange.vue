<template>
<div>
  <el-row class="titleBox">
    <el-col :span="12">
      <span class="notice">注：虚线为选择日期的趋势线</span>
    </el-col>
    <el-col :span="12">
      <el-date-picker class="selectDate"
                      v-model="value1" size="mini" :picker-options="pickerOptions"
                      type="date" format="MM-dd" :clearable="false"
                      placeholder="选择日期">
      </el-date-picker>
    </el-col>
  </el-row>


</div>
</template>

<script>
export default {
  name: "timeRange",
  data() {
    return {
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      },
      value1: '',
      // currentDate: ''
    }
  },
  methods: {
    getPreMonth(date) {
      var arr = date.split('-')
      var year = arr[0]
      var month = arr[1]
      var day = arr[2]
      var days = new Date(year,month,0)
      console.log(days)
      days = days.getDate()
      var year2 = year
      var month2 = parseInt(month) - 1
      if(month2 == 0) {
        year2 = parseInt(year2) - 1
        month2 = 12
      }
      var day2 = day
      var days2 = new Date(year2,month2,0)
      days2 = days2.getDate()
      if(day2 > days2) {
        day2 = days2
      }
      if(month2 < 10) {
        month = "0" + month2
      }
     this.value1 = year2 + "-" + month2 + "-" + day2
    }
  },
  created() {
    this.currentDate = new Date().getFullYear() + '-' + ( new Date().getMonth() + 1) + '-' +  new Date().getDate()
    this.getPreMonth(this.currentDate)
  }
}
</script>

<style lang="scss" scoped>
.titleBox {
  .notice {
    font-size: 17px;
    font-weight: 700;
  }
  .selectDate {
    float: right;
  }
}

.el-date-editor.el-input, .el-date-editor.el-input__inner {
  width: 100px;
}
::v-deep .el-input--mini .el-input__inner {
  border-color: #394280;
  background-color: #060736;
  color: #fff;
}
</style>
