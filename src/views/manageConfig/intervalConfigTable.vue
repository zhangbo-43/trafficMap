<template>
  <el-container class="container-config">
    <el-header class="header-title">
      <span>{{ configTableData.name }}</span>
    </el-header>
    <el-main class="main-table">
      <div class="annotation">
        <p>{{ configTableData.annotation }}</p>
      </div>

      <div class="table">
        <div class="config-button">
          <el-button
            type="primary"
            size="small"
            plain
            @click="configInterval"
            >{{ configTableData.buttonName }}</el-button
          >
        </div>
        <el-table
          :data="showTableData"
          style="width: 100%"
          :header-cell-style="{
            background: 'rgba(3,15,148,0.1)',
            color: '#4C5463',
            fontWeight: 500,
            padding: '10px 90px',
          }"
          :row-style="{
            fontSize: 16,
            fontWeight: 300,
            fontFamily: 'PingFang SC',
            height: 10,
          }"
          :cell-style="{
            padding: '8px 90px',
          }"
        >
          <el-table-column
            prop="interval"
            :label="configTableData.column.interval"
          >
          </el-table-column>
          <el-table-column
            prop="setPerson"
            :label="configTableData.column.setPerson"
          >
          </el-table-column>
          <el-table-column
            prop="setTime"
            :label="configTableData.column.setTime"
          >
          </el-table-column>
        </el-table>
        <div class="select-page">
          <el-pagination
            :current-page.sync="currentPage"
            :page-size="10"
            layout="prev, pager, next, jumper"
            :total="tableData.length"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </div>
    </el-main>
    <!-- <el-footer class="footer-table"> </el-footer> -->

    <!-- 数据刷新配置的弹窗 -->
    <el-dialog
      center
      :show-close="false"
      :visible.sync="dialogVisible"
      width="25%"
    >
      <el-row class="select-updata">
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <p>设置数据刷新频次:</p>
          </div></el-col
        >
        <el-col :span="5"
          ><div class="grid-content bg-purple">
            <select v-model="selectData">
              <option value="5">5秒</option>
              <option value="10">10秒</option>
              <option value="30">30秒</option>
              <option value="60">60秒</option>
            </select>
          </div></el-col
        >
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="selectInterval">确 定</el-button>
      </span>
    </el-dialog>
  </el-container>
</template>

<script>
import { formatTime } from "../../utils/index.js";
export default {
  data() {
    return {
      dateDay: null,
      dateYear: null,
      dialogVisible: false,
      currentPage: 1,
      tableData: [
        { interval: 1, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 2, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 3, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 4, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 5, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 6, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 7, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 8, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 9, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 10, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 11, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 12, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 13, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 14, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 15, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 16, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 17, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 18, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 19, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 20, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 21, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
      ],
      showTableData: [],
      selectData: "5",
    };
  },
  props: ["configTableData"],
  methods: {
    // 设置弹窗
    configInterval: function () {
      if (this.configTableData.name == "数据刷新配置") {
        this.dialogVisible = true;
      } else {
        this.$prompt(this.configTableData.alertTitle, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          inputPattern:
            /^([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-3][0-5][0-9][0-9]|3600)$/,
          inputErrorMessage: "请输入1~3600之间的正整数",
        }).then(({ value }) => {
          this.confirmData(value);
        });
      }
    },

    // 确认要修改的数据
    confirmData(value) {
      value = Number(value);
      this.$confirm("否调整瞬时区间为" + value + "秒", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.setTableData(value, "李四");
          this.$message({
            type: "success",
            message: "设置成功，次日生效",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "设置失败+失败原因",
          });
        });
    },

    // 获取当前时间
    timeFn() {
      let dateDay = formatTime(new Date(), "HH: mm: ss");
      let dateYear = formatTime(new Date(), "yyyy-MM-dd");
      return dateYear + "\xa0" + dateDay;
    },

    // 保存设置的数据并渲染到页面中
    setTableData(interval, setPerson = "张三") {
      this.timeFn();
      this.tableData.unshift({
        interval: interval,
        setPerson: setPerson,
        setTime: this.timeFn(),
      });
      this.currentPage = 1;
      this.handleCurrentChange();
    },

    // 选择数据区间
    selectInterval() {
      this.dialogVisible = false;
      this.confirmData(this.selectData);
    },

    // 选择第N页
    handleCurrentChange() {
      let show = (this.currentPage - 1) * 10;
      this.showTableData = this.tableData.slice(show, show + 10);
    },
  },
  mounted() {
    this.handleCurrentChange();
  },
};
</script>

<style lang="scss" scoped>
.container-config {
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  overflow: hidden;

  .header-title {
    background-color: #fff;
    display: flex;
    align-items: center;
    flex: 0 0 60px;
    line-height: 60px;

    span {
      font-size: 22px;
      color: #121212;
      font-weight: bolder;
    }
  }

  .main-table {
    flex: 1;
    padding-bottom: 30px;
    background-color: rgb(242, 243, 255);
    display: flex;
    flex-direction: column;
    .annotation {
      padding: 0 30px;
      line-height: 60px;
      margin-bottom: 10px;
      background: #fff;
      p {
        color: #f59e07;
        font-size: 17px;
      }
    }
    .table {
      flex: 1;
      background: #fff;
      padding: 10px 30px;
      padding-bottom: 10px;
      .config-button {
        margin-bottom: 5px;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
  .select-page {
    padding-top: 5px;
    .el-pagination {
      display: flex;
      justify-content: flex-end;
    }
  }
  .select-updata {
    display: flex;
    justify-content: center;
  }
}
</style>
