<template>
  <div>
    <el-date-picker class="selectDate"
                    v-model="value1" size="mini" :picker-options="pickerOptions"
                    type="date" format="MM-dd" :clearable="false"
                    placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: "timeRange",
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      value1: '',
      // currentDate: ''
    }
  },
  methods: {
    getPreMonth() {
      var allDate = new Date()
      var year = allDate.getFullYear()
      var month = allDate.getMonth() + 1
      var day = allDate.getDate()
      var days = new Date(year, month, 0)
      console.log(days)
      days = days.getDate()
      var year2 = year
      var month2 = parseInt(month) - 1
      if (month2 == 0) {
        year2 = parseInt(year2) - 1
        month2 = 12
      }
      var day2 = day
      var days2 = new Date(year2, month2, 0)
      days2 = days2.getDate()
      if (day2 > days2) {
        day2 = days2
      }
      if (month2 < 10) {
        month = "0" + month2
      }
      this.value1 = year2 + "-" + month2 + "-" + day2
      console.log(this.value1)
    }
  },
  created() {
    this.getPreMonth()
  }
}
</script>

<style lang="scss" scoped>
.el-date-editor.el-input, .el-date-editor.el-input__inner {
  width: 100px;
}

::v-deep .el-input--mini .el-input__inner {
  border-color: #394280;
  background-color: #060736;
  color: #fff;
}
</style>
