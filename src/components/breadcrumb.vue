<template>
<div>
  <el-row>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item style="font-weight:700">系统管理</el-breadcrumb-item>
    <el-breadcrumb-item>{{menuName}}</el-breadcrumb-item>
  </el-breadcrumb>
  </el-row>
</div>
</template>

<script>
export default {
  name: "breadcrumb",
  data() {
    return {
      menuName: "菜单信息管理"
    }
  }
}
</script>

<style lang="scss" scoped>
.el-breadcrumb {
  vertical-align: center;
  background:#ccc;
  padding: 15px;
  box-sizing: border-box;
  font-size: 16px;
}
</style>
