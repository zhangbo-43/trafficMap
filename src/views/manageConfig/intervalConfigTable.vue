<template>
  <el-container>
    <el-header>
      <span>{{ configTableData.name }}</span>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="7"
          ><div class="grid-content bg-purple">
            {{ configTableData.effect }}
          </div></el-col
        >
        <el-col :span="13"
          ><div class="grid-content bg-purple-light">
            {{ configTableData.annotation }}
          </div></el-col
        >
        <el-col :span="4"
          ><el-button
            type="primary"
            size="small"
            plain
            @click="configInterval"
            >{{ configTableData.buttonName }}</el-button
          >
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <el-table :data="tableData" style="width: 100%">
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
        <el-table-column prop="setTime" :label="configTableData.column.setTime">
        </el-table-column>
      </el-table>
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
// import Selectinput from "./selectInput.vue";
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
      ],
      selectData: "5",
    };
  },
  props: ["configTableData"],
  methods: {
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
        });
      }
    },
    timeFn() {
      let dateDay = formatTime(new Date(), "HH: mm: ss");
      let dateYear = formatTime(new Date(), "yyyy-MM-dd");
      return dateYear + "\xa0" + dateDay;
    },
    setTableData(interval, setPerson = "张三") {
      this.timeFn();
      this.tableData.unshift({
        interval: interval,
        setPerson: setPerson,
        setTime: this.timeFn(),
      });
    },
    selectInterval() {
      this.dialogVisible = false;
      this.setTableData(this.selectData, "王五");
    },
  },
};
</script>

<style lang="scss" scoped>
.el-container {
  margin-top: 5%;
  .el-header {
    display: flex;
    align-items: center;
    span {
      font-size: 20px;
    }
  }
  .el-main {
    .el-row {
      .el-col {
        display: flex;
        button {
          position: absolute;
          flex: right;
          justify-self: flex-end;
        }
      }
    }
  }
}
</style>
