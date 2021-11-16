<template>
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
      :label="tableColumn[item]"
    >
    </el-table-column>
    <!-- <el-table-column label="操作">
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
        </el-table-column> -->
  </el-table>
</template>

<script>
export default {
  data() {
    return {
        columns:[]
    };
  },
  props: ["showTableData", "tableColumn"],

  mounted() {
    this.columns = Object.keys(this.tableColumn);
   
  },
  updated() {
  },
  watch: {},
};
</script>

<style>
</style>
