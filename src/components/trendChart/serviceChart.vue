<template>
<div class="mainContent">
  <el-dialog
      class="echartDialog"
      :modal="false"
      modal-append-to-body
      :title=optionData.echartTitle
      :visible.sync="chartVisible"
      width="35%" :before-close="handleClose">
    <el-row class="timeSelect">
      <el-col :span="12">
        <span class="notice">注：虚线为选择日期的趋势线</span>
      </el-col>
      <el-col :span="12" style="text-align: right">
        <time-select></time-select>
      </el-col>
    </el-row>
    <Echart
        :options="optionData.options"
        id="windowChart"
        height="50vh"
        width="100%"
    >
    </Echart>
  </el-dialog>
</div>
</template>

<script>
import timeSelect from '@/components/timeRange.vue'
import Echart from '@/common/echart'
export default {
  name: "serviceChart",
  props: ['chartVisible','optionData'],
  components: {
    Echart,
    timeSelect
  },
  data() {
    return {
    }
  },
 methods: {
   handleClose() {
     this.$emit("closeDialog",false)
   }
 }
}
</script>

<style lang="scss" scoped>
.mainContent {
  .timeSelect {
    cursor: pointer;
    z-index: 9999;
    margin-bottom: 10px;
    .notice {
      font-size: 17px;
      font-weight: 700;
      color: rgb(241, 151, 35);
    }
  }
}
::v-deep .el-dialog {
  background-color: #070B47;
  box-shadow: inset 0px 0px 15px #2773ff;
}
::v-deep .el-dialog__header {
  border-bottom: 1px solid #2773FF;
}
::v-deep .el-dialog__title {
  color: #2773FF;
}
::v-deep .el-dialog__close {
  color: #2773FF;
}
</style>
