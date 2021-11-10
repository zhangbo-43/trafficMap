<template>
  <div class="mainTable">
    <el-header class="header-title">
      <span>菜单权限管理</span>
    </el-header>
    <el-row class="table">
      <el-card class="box-card">
        <div>菜单节点信息</div>
        <el-divider></el-divider>
        <div class="title">
          <el-button type="primary" size="small">添加顶级节点</el-button>
          <el-button class="el-button--reset" size="small">刷新树</el-button>
        </div>
        <el-tree
            :data="data"
            node-key="id"
            :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <span>{{ node.label }}</span>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-circle-plus-outline">
          <el-button
              type="text"
              size="mini"
              @click="() => append(data)">
            新增
          </el-button>
        </el-dropdown-item>
        <el-dropdown-item icon="el-icon-edit">
          <el-button
              type="text"
              size="mini" style="color: #E6A23C"
              @click="() => edit(data)">
            编辑
          </el-button>
        </el-dropdown-item>
        <el-dropdown-item icon="el-icon-delete">
            <el-button
                type="text"
                size="mini" style="color: #F56C6C"
                @click="() => remove(node, data)">删除
          </el-button>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
      </span>
        </el-tree>
      </el-card>
    </el-row>

<!--    弹出框-->
    <el-dialog
        :title="diaTitle"
        :visible.sync="dialogVisible"
        width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="上级菜单">
          <el-input v-model="form.parentMenu"></el-input>
        </el-form-item>
        <el-form-item label="菜单名称">
          <el-input v-model="form.menuName" placeholder="请输入菜单名称"></el-input>
        </el-form-item>
        <el-form-item label="打开方式">
          <el-input v-model="form.openWay" placeholder="请选择打开方式"></el-input>
        </el-form-item>
        <el-form-item label="菜单地址">
          <el-input v-model="form.menuPath" placeholder="请输入菜单地址"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "menuInfoManage",
  data() {
    return {
      data: [{
        label: '一级 1',
        type: 1,
        children: [{
          label: '二级 1-1',
          type: 2,
          children: [{
            type: 3,
            label: '三级 1-1-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      dialogVisible: false,
      diaTitle: "",
      form: {
        parentMenu: "",
        menuName:"",
        openWay: "",
        menuPath:""
      }
    }
  },
  methods: {
    append(data) {
      console.log(data)
      this.diaTitle = '新增菜单'
      this.dialogVisible = true
    },
    edit() {
      this.diaTitle = '编辑菜单'
      this.dialogVisible = true
    },
    async remove() {
      const confirmResult = await this.$confirm(
          "此操作将永久删除该菜单, 是否继续?",
          "提示",
          {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          }
      ).catch((err) => err);
      if (confirmResult !== "confirm") {
        return this.$message.info("已取消删除");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mainTable {
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
  .table {
    padding: 20px;

    .box-card {
      height: 83vh;

      .title {
        margin-bottom: 10px;
      }

      .optionBtn {
        margin-left: 20px;
      }
    }
  }
}
</style>
