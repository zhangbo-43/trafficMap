<template>
  <el-container class="container-config">
    <el-header class="header-title">
      <span>{{ config.name }}</span>
    </el-header>
    <el-main class="main-table">
      <div class="table-title">
        <span class="table-name">{{ config.tableTitle }}</span>
        <el-button
          type="primary"
          size="small"
          plain
          @click="addPersonClick"
          v-if="config.buttonName"
          >{{ config.buttonName }}</el-button
        >
      </div>
      <el-table
        max-height="438px"
        :data="showTableData"
        style="width: 100%"
        :header-cell-style="{
          background: 'rgba(3,15,148,0.1)',
          color: '#4C5463',
          fontWeight: 500,
          padding: '10px 0px',
        }"
        :row-style="{
          fontWeight: 300,
          fontFamily: 'PingFang SC',
          height: 10,
        }"
        :cell-style="{
          padding: '8px 0px',
          fontSize: 12,
        }"
      >
        <el-table-column
          v-for="(item, index) in columns"
          :key="index"
          :prop="item"
          :label="config.tableColumn[item]"
        >
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >修改</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              v-if="config.name === '人员信息管理'"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="select-page">
        <el-pagination
          :current-page.sync="currentPage"
          :page-size="10"
          layout="prev, pager, next, jumper"
          :total="this.config.tableData.length"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </el-main>

    <!-- 人员信息管理弹窗 -->
    <el-dialog title="新增人员" :visible.sync="dialogVisible" width="40%">
      <div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          size="mini"
        >
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="登录账号" prop="account">
            <el-input v-model="ruleForm.account"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="phoneNum">
            <el-input v-model="ruleForm.phoneNum" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="用户状态" prop="state">
            <el-radio-group v-model="ruleForm.state" >
              <el-radio label="正常"></el-radio>
              <el-radio label="禁用"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="角色" prop="role">
            <el-select v-model="ruleForm.role" placeholder="请选择角色">
              <el-option label="全网管理员" value="shanghai"></el-option>
              <el-option label="分中心管理员" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAddPerson">提 交</el-button>
      </span>
    </el-dialog>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      columns: [],
      showTableData: [],
      currentPage: 1,
      dialogVisible: false,
      ruleForm: {
        name: "",
        region: "",
        state: "",
        account: "",
        phoneNum: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
        //   {  trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
      },
    };
  },
  props: ["config"],

  methods: {
    // 新增人员按钮事件
    addPersonClick() {
      this.dialogVisible = true;
    },

    // 新增人员弹窗中确定按钮处理事件
    handleAddPerson() {
      this.dialogVisible = false;
    },
    handleCurrentChange() {
      let show = (this.currentPage - 1) * 10;
      this.showTableData = this.config.tableData.slice(show, show + 10);
    },
    handleEdit(index, row) {
      console.dir(index);
      console.dir(row);
    },
  },
  mounted() {
    this.columns = Object.keys(this.config.tableColumn);
    this.handleCurrentChange();
  },
};
</script>

<style lang="scss" scoped>
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
.main-table {
  background-color: #fff;
  margin-top: 20px;
  padding: 20px 30px 10px 30px;

  .table-title {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    .table-name {
      color: #121212;
      display: flex;
      align-items: center;
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
.dialog-footer {
  display: flex;
  justify-content: center;
}
</style>
