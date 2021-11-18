<template>
  <el-dialog
    :title="data.dialongTitle"
    :visible.sync="dialogVisible"
    width="35%"
    :before-close="handleClose"
    custom-class="dialong-table"
    :modal="false"
  >
    <div class="table">
      <div class="table-title" v-if="data.tableTitle">
        <div class="select-table">
          <el-button
            class="select-tab-btn show-tab-btn"
            size="mini"
            :autofocus="true"
            @click="handleTableChange($event, 'interface')"
            >Interface</el-button
          >
          <el-button
            size="mini"
            class="select-tab-btn"
            @click="handleTableChange($event, 'CSF')"
            >CSF接口</el-button
          >
        </div>

        <div class="select-date">
          <el-select
            v-model="selectDate"
            class="select"
            placeholder="请选择"
            size="mini"
          >
            <!-- <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            > -->
            <el-option label="5-13" :value="5.13"> </el-option>
            <el-option label="5-14" :value="5.14"> </el-option>
          </el-select>
        </div>
      </div>
      <el-table
        :data="showTableData"
        highlight-current-row
        style="width: 100%"
        max-height="400px"
        border
        :header-cell-style="{
          background: '#16388D',
          color: 'rgba(255,255,255,0.5)',
          fontWeight: 300,
          padding: '10px 0px',
          textAlign: 'center',
        }"
        :row-style="{
          color: 'rgba(255,255,255,0.5)',
          fontWeight: 300,
          fontFamily: 'PingFang SC',
          height: 10,
          background: 'rgba(0,0,0,0)',
        }"
        :cell-style="{
          padding: '4px 0px',
          fontSize: 12,
          textAlign: 'center',
        }"
      >
        <el-table-column
          v-for="(item, index) in columns"
          :key="index"
          :prop="item"
          :label="tableColumn[item]"
        >
        </el-table-column>
      </el-table>
      <div class="select-page">
        <el-pagination
          :current-page.sync="currentPage"
          :page-size.sync="pageSize"
          layout="total, prev, pager, next, jumper,sizes"
          :total="this.tableData.length"
          @current-change="handleCurrentChange"
          @size-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      selectDate: "",
      showTable: "interface",
      tableData: [],
      showTableData: [],
      tableColumn: [],
      columns: [],
      currentPage: 1,
      pageSize: 10,
    };
  },
  props: {
    dialogVisible: Boolean,
    data: {},
  },
  methods: {
    //  关闭弹窗
    handleClose(done) {
      console.log(done);
      this.$emit("closeDialogtable");
    },

    // 切换页面
    handleCurrentChange() {
      let show = (this.currentPage - 1) * this.pageSize;
      this.showTableData = this.tableData.slice(show, show + this.pageSize);
    },

    // 切换要显示的表格
    handleTableChange(e, show) {
      document
        .getElementsByClassName("show-tab-btn")[0]
        .classList.remove("show-tab-btn");

      let target = e.target;
      if (!e.target.children.length) {
        target = e.target.parentNode;
      }
      target.classList.add("show-tab-btn");
      if (show == "interface") {
        this.tableColumn = this.data.tableColumn.intTabCol;
        this.tableData = this.data.tableData.intTabData;
      } else if (show == "CSF") {
        this.tableColumn = this.data.tableColumn.csfCol;
        this.tableData = this.data.tableData.csfData;
      }
      this.columns = Object.keys(this.tableColumn);
      this.handleCurrentChange();
    },
  },
  mounted() {
    this.tableColumn = this.data.tableColumn.intTabCol;
    this.columns = Object.keys(this.tableColumn);
    this.tableData = this.data.tableData.intTabData;
    this.handleCurrentChange();
    console.log(this.data)
  },
  watch: {
    currentPage() {
      this.handleCurrentChange();
    },
  },
};
</script>

<style lang="scss" scope>
.dialong-table {
  overflow: hidden;
  background-color: #070b47;
  border: 1px solid #2773ff;
  box-shadow: inset 0px 0px 10px #2773ff;
  max-height: 78vh;

  .el-dialog__title {
    color: #2773ff;
  }
  .table {
    .table-title {
      display: flex;
      justify-content: space-between;
      padding-bottom: 10px;
      .select-table {
        flex: 1;
        .select-tab-btn {
          background-color: #000;
          border: 0;
          color: #f4f5f8;
        }
        .show-tab-btn {
          background-color: #2773ff;
        }
      }

      .select-date {
        flex: 1;
        height: 20px;
        padding-left: 30%;
        .el-select {
          background-color: #060736 !important;
          .el-input--suffix .el-input__inner {
            // width: 70%;
            background-color: #060736 !important;
          }
        }
      }
    }

    // 表格背景设置
    .el-table,
    .el-table__expanded-cell {
      background-color: rgba(0, 0, 0, 0);
      .el-table__row:hover > td {
        background-color: #151c77 !important;
      }

      //表格内部下边框设置
      th.el-table__cell.is-leaf {
        border: 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      }
      td.el-table__cell,
      th.el-table__cell.is-leaf {
        border: 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      }

      // 表格滚动条设置
      th.el-table__cell.gutter {
        background-color: rgb(163, 163, 163) !important;
        // border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      }
      .el-table__body-wrapper::-webkit-scrollbar {
        height: 3px; // 纵向滚动条 必写
        background-color: rgb(163, 163, 163);
      }
      .el-table__body-wrapper::-webkit-scrollbar-thumb {
        background-color: rgb(125, 125, 125);
        border-radius: 3px;
      }
    }
    // 表格边框设置
    .el-table--border,
    .el-table--group {
      border: 0;
    }
    .el-table__header-wrapper th:nth-last-of-type(2) {
      border-right: none;
    }
    .el-table--border td:nth-last-of-type(1) {
      border-right: none;
    }
    .el-table--border::after,
    .el-table--group::after {
      width: 0;
    }

    // 分页设置
    .select-page {
      padding-top: 10px;
      display: flex;
      justify-content: flex-end;
      .el-pagination {
        color: rgba(255, 255, 255, 0.5);
        .btn-prev,
        .btn-next {
          background-color: rgba(0, 0, 0, 0);
          i {
            color: rgba(255, 255, 255, 0.5);
          }
          :hover {
            color: #409eff;
          }
        }
      }
      .el-pager li {
        background-color: rgba(0, 0, 0, 0);
      }
      .el-input__inner {
        background-color: rgba(0, 0, 0, 0);
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
}
// 下拉框选项设置
.el-select-dropdown {
  border: 0;
  .el-scrollbar {
    background-color: #060736 !important;
  }
  .hover {
    background-color: #262879 !important;
  }
}
</style>