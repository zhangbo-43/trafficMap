<template>
  <div class="loginContent">
    <img src="../../assets/images/login.jpg" alt="">
   <div class="loginBox">
     <h2 class="title">话务地图管理平台</h2>
     <div class="content-form">
       <el-form ref="loginForm" :model="loginForm">
         <el-form-item>
           <el-input v-model="loginForm.username" placeholder="请输入用户名称">
             <i slot="prefix" class="el-input__icon el-icon-user"></i>
           </el-input>
         </el-form-item>
         <el-form-item>
           <el-input v-model="loginForm.password" placeholder="请输入登录密码">
             <i slot="prefix" class="el-input__icon el-icon-lock"></i>
           </el-input>
         </el-form-item>
         <el-form-item>
           <el-button type="primary" class="sureBtn" @click="logIn">登录</el-button>
         </el-form-item>
       </el-form>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    logIn() {
      this.$router.push('/mainPanel')
    }
  }
}
</script>

<style lang="scss" scoped>
@import './login.scss';
</style>
