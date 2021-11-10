<template>
  <div class="mainTable">
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
      }, {
        label: '一级 2',
        type: 1,
        children: [{
          type: 2,
          label: '二级 2-1',
          children: [{
            type: 3,
            label: '三级 2-1-1'
          }]
        }, {
          type: 2,
          label: '二级 2-2',
          children: [{
            type: 3,
            label: '三级 2-2-1'
          }]
        }]
      }, {
        type: 1,
        label: '一级 3',
        children: [{
          type: 2,
          label: '二级 3-1',
          children: [{
            type: 3,
            label: '三级 3-1-1'
          }]
        }, {
          type: 2,
          label: '二级 3-2',
          children: [{
            type: 3,
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    append(data) {
        console.log(data)
    },
    edit() {

    },
    remove() {

    }
  }
}
</script>

<style lang="scss" scoped>
.mainTable {
  .table {
    padding: 20px;

    .box-card {
      height: 85vh;

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
