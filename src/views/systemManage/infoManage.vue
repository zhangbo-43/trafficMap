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
        :data="showTableData"
        style="width: 100%"
        :header-cell-style="{
          background: 'rgba(3,15,148,0.1)',
          color: '#4C5463',
          fontWeight: 500,
          padding: '10px 0px',
          textAlign: 'center',
        }"
        :row-style="{
          fontWeight: 300,
          fontFamily: 'PingFang SC',
          height: 10,
        }"
        :cell-style="{
          padding: '8px 0px',
          fontSize: 12,
          textAlign: 'center',
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
          :page-size.sync="pageSize"
          layout="total, prev, pager, next, jumper,sizes"
          :total="this.config.tableData.length"
          @current-change="handleCurrentChange"
          @size-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </el-main>

    <!-- 人员信息管理弹窗 -->
    <el-dialog title="新增人员" :visible.sync="dialogVisible" width="25%">
      <div>
        <el-form
          :model="newperson"
          :rules="rules"
          ref="newperson"
          label-width="100px"
          class="demo-ruleForm"
          size="mini"
        >
          <el-form-item label="姓名" prop="name">
            <el-input
              v-model="newperson.name"
              placeholder="请输入姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label="电话" prop="phoneNum">
            <el-input
              v-model.number="newperson.phoneNum"
              placeholder="请输入电话号"
            ></el-input>
          </el-form-item>
          <!-- <el-form-item label="密码" prop="password">
            <el-input
              v-model="newperson.password"
              placeholder="请输入"
            ></el-input>
          </el-form-item> -->
          <!-- <el-form-item label="用户状态" prop="state">
            <el-radio-group v-model="newperson.state">
              <el-radio label="正常"></el-radio>
              <el-radio label="禁用"></el-radio>
            </el-radio-group>
          </el-form-item> -->

          <!-- <el-form-item label="角色" prop="role">
            <el-select v-model="newperson.role" placeholder="请选择角色">
              <el-option label="全网管理员" value="shanghai"></el-option>
              <el-option label="分中心管理员" value="beijing"></el-option>
            </el-select>
          </el-form-item> -->

          <el-form-item label="身份证号" prop="ID">
            <el-input
              v-model="newperson.ID"
              placeholder="请输入身份证号"
            ></el-input>
          </el-form-item>

          <el-form-item label="组织机构" prop="Organization">
            <el-input
              v-model="newperson.Organization"
              placeholder="请输入组织机构"
            ></el-input>
          </el-form-item>

          <el-form-item label="员工类型" prop="type">
            <el-select v-model="newperson.type" placeholder="请选择员工类型">
              <el-option label="一类员工" value="personOne"></el-option>
              <el-option label="二类员工" value="personTow"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAddPerson">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 修改按钮弹窗 -->
    <el-dialog title="修改信息" :visible.sync="dialogRevise" width="25%">
      <div v-if="this.config.name == '人员信息管理'">
        <el-form
          :model="reviseData"
          :rules="rules"
          ref="reviseData"
          label-width="100px"
          class="demo-ruleForm"
          size="mini"
        >
          <el-form-item label="姓名" prop="name">
            <el-input
              v-model="reviseData.name"
              placeholder="请输入姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label="电话" prop="phoneNum">
            <el-input
              v-model.number="reviseData.phoneNum"
              placeholder="请输入电话号"
            ></el-input>
          </el-form-item>
          <el-form-item label="身份证号" prop="ID">
            <el-input
              v-model="reviseData.ID"
              placeholder="请输入身份证号"
            ></el-input>
          </el-form-item>

          <el-form-item label="组织机构" prop="Organization">
            <el-input
              v-model="reviseData.Organization"
              placeholder="请输入组织机构"
            ></el-input>
          </el-form-item>

          <el-form-item label="员工类型" prop="type">
            <el-select v-model="reviseData.type" placeholder="请选择员工类型">
              <el-option label="一类员工" value="personOne"></el-option>
              <el-option label="二类员工" value="personTow"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div v-else-if="this.config.name == '角色权限管理'">1111</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogRevise = false">取 消</el-button>
        <el-button type="primary" @click="handleRevisePerson">提 交</el-button>
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
      pageSize: 10,
      dialogVisible: false,
      dialogRevise: false,
      reviseIndex: null,
      reviseRow: null,
      reviseData: {
        name: "",
        phoneNum: "",
        ID: "",
        Organization: "",
        type: "一类员工",

        state: "正常",
        password: "",
      },

      // 验证规则
      verify: {
        name: /^[\u4e00-\u9fa5]{2,5}$/,
        phone: /^1[3465789]\d{9}$/,
        tel: /^0\d{2,3}-?\d{7,8}$/,
        ID: /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
      },
      newperson: {
        name: "",
        phoneNum: "",
        ID: "",
        Organization: "",
        type: "一类员工",

        state: "",
        password: "正常",
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          {
            validator: (rule, value, callback) => {
              if (!this.verify.name.test(value)) {
                callback(new Error("姓名为中文且长度在 2 到 6 个字符"));
              }
            },
            trigger: "blur",
          },
        ],
        phoneNum: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            type: "number",
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (
                !this.verify.phone.test(value) &&
                !this.verify.tel.test(value)
              ) {
                callback(new Error("手机号格式不正确"));
              }
            },
          },
        ],
        ID: [
          { required: true, message: "请输入身份证号", trigger: "blur" },
          {
            validator: (rule, value, callback) => {
              if (!this.verify.ID.test(value)) {
                callback(new Error("身份证号格式不正确"));
              }
            },
            trigger: "blur",
          },
        ],
      },
    };
  },
  props: ["config"],

  methods: {
    // 新增人员按钮点击操作
    addPersonClick() {
      this.dialogVisible = true;
      this.$refs.newperson.resetFields();
    },

    // 新增人员弹窗提交操作
    handleAddPerson() {
      if (
        this.verify.name.test(this.newperson.name) &&
        (this.verify.phone.test(this.newperson.phoneNum) ||
          this.verify.tel.test(this.newperson.phoneNum)) &&
        this.verify.ID.test(this.newperson.ID)
      ) {
        this.config.tableData.unshift(this.newperson);
        this.dialogVisible = false;
        this.handleCurrentChange();
      } else {
        this.$alert("新增人员信息错误，请返回修改", "信息错误", {
          confirmButtonText: "确定",
        });
      }
    },

    // 切换页面
    handleCurrentChange() {
      let show = (this.currentPage - 1) * this.pageSize;
      this.showTableData = this.config.tableData.slice(
        show,
        show + this.pageSize
      );
    },

    // 修改操作
    handleEdit(index, row) {
      this.reviseIndex = index;
      this.reviseRow = row;
      this.dialogRevise = true;
      this.$refs.reviseData.resetFields();
      // this.reviseData = {
      //   name: "",
      //   phoneNum: "",
      //   ID: "",
      //   Organization: "",
      //   type: "一类员工",

      //   state: "",
      //   password: "",
      // };
    },

    // 删除操作
    handleDelete(index, row) {
      this.config.tableData.splice(
        (this.currentPage - 1) * this.pageSize + index,
        1
      );
      this.handleCurrentChange();
      // if(this.showTableData.length == 0){
      //   this.currentPage -= 1
      // }

      console.log(index, row);
    },

    // 修改弹窗提交操作
    handleRevisePerson() {
      if (
        this.verify.name.test(this.reviseData.name) &&
        (this.verify.phone.test(this.reviseData.phoneNum) ||
          this.verify.tel.test(this.reviseData.phoneNum)) &&
        this.verify.ID.test(this.reviseData.ID)
      ) {
        this.$confirm("此操作将修改人员信息, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            Object.assign(
              this.config.tableData[
                (this.currentPage - 1) * this.pageSize + this.reviseIndex
              ],
              this.reviseData
            );

            this.dialogRevise = false;
            this.handleCurrentChange();

            this.$message({
              type: "success",
              message: "修改成功!",
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消修改",
            });
          });
      } else {
        this.$alert("新增人员信息错误，请返回修改", "信息错误", {
          confirmButtonText: "确定",
        });
      }
    },
  },

  mounted() {
    // 初始化表格
    this.columns = Object.keys(this.config.tableColumn);
    this.handleCurrentChange();
  },
  watch: {
    currentPage() {
      this.handleCurrentChange();
    },
  },
};
</script>

<style lang="scss" scoped>
.container-config {
  // height: 100%;
  width: 100%;
  padding-bottom: 50px;
  // overflow: hidden;
  margin-bottom: 40px;

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
    margin: 20px;
    margin-bottom: 30px;
    padding: 20px 30px 10px 30px;
    flex: 1;

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
}
</style>
