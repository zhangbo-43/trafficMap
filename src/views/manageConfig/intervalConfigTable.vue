<template>
  <el-container class="container-config">
    <el-header class="header-title">
      <span>{{ configTableData.name }}</span>
    </el-header>
    <el-main class="main-annotation">
      <p>{{ configTableData.annotation }}</p>
    </el-main>
    <el-footer>
      <div class="footer-table">
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
          max-height="440"
          :data="tableData"
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
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="10"
            layout="prev, pager, next, jumper"
            :total="100"
          >
          </el-pagination>
        </div>
      </div>
    </el-footer>

    <!-- 数据刷新配置的弹窗 -->
    <el-dialog center :visible.sync="dialogVisible" width="25%">
      <el-row>
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
      tableData: [
        { interval: 10, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 50, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 20, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 10, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 50, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 20, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 10, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 20, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 20, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 20, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
        { interval: 20, setPerson: "张三", setTime: "2021-11-05   16: 18: 33" },
      ],
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
    },

    // 选择数据区间
    selectInterval() {
      this.dialogVisible = false;
      this.confirmData(this.selectData);
    },
  },
};
</script>

<style lang="scss" scoped>
.container-config {
  .header-title {
    background-color: #fff;
    display: flex;
    align-items: center;

    span {
      font-size: 22px;
      color: #121212;
      font-weight: bolder;
    }
  }

  .main-annotation {
    padding: 15px 30px;
    margin: 20px 20px 10px 20px;
    // height: 60px;
    background-color: #fff;
    p {
      color: #f59e07;
      font-size: 17px;
    }
  }

  .footer-table {
    background-color: #fff;
    padding: 20px 30px;

    .config-button {
      margin-bottom: 10px;
      display: flex;
      justify-content: flex-end;
    }
    .cell {
      display: flex;
      justify-content: center;
      text-align: center;
    }
  }
}
</style>
