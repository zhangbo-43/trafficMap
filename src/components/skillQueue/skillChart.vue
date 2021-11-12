<template>
  <div class="skillBox" ref="skillRef">
    <div class="mainChart">
      <el-row>
        <el-col>
          <el-radio-group v-model="chartType">
            <el-radio-button label="排队量"></el-radio-button>
            <el-radio-button label="服务量"></el-radio-button>
          </el-radio-group>
        </el-col>
      </el-row>
      <div class="chartBox" ref="chartRef">
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "skillChart",
  data() {
    return {
      chartType: "排队量"
    }
  },
}
</script>

<style lang="scss" scoped>
.skillBox {
  height: 35vh;
  width: 100%;
  border: 1px solid red;

  .mainChart {
    padding: 20px;
    height: 100%;

    ::v-deep .el-radio-button__orig-radio:checked + .el-radio-button__inner {
      background-color: #16388D;
      border-color: #16388D;
    }

    ::v-deep .el-radio-button__inner {
      background-color: #000000;
      border-color: #394280;
      color: #fff;
    }

    .chartBox {
      height: 90%;
    }
  }
}
</style>
