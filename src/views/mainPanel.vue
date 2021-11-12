<template>
  <div id="mainPanel">
    <el-container>
      <el-header v-show="!isFullScreen">
        <img src="../assets/images/logo.png" alt="" />
        <el-divider direction="vertical"></el-divider>
        <span class="title">话务地图</span>
        <div class="option">
          <el-dropdown>
            <span class="el-dropdown-link username">
              Huxiaowen<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px" v-show="!isFullScreen">
          <!--          el-icon-s-fold   el-icon-s-unfold-->
          <!--          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
          <!--            <el-radio-button :label="false">展开</el-radio-button>-->
          <!--            <el-radio-button :label="true">收起</el-radio-button>-->
          <!--          </el-radio-group>-->
          <el-menu
            :default-active="$route.name"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            router
            :collapse="isCollapse"
            background-color="#070C49"
            text-color="#fff"
            unique-opened
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-aim"></i>
                <span slot="title">看板大屏</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="wholeNetworkScreen"
                  >全网监控大屏</el-menu-item
                >
                <el-menu-item index="subCenterScreen"
                  >分中心监控大屏</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">管理配置</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="instantaneousConfig"
                  >瞬时区间配置</el-menu-item
                >
                <el-menu-item index="abnormalDataConfig"
                  >异常数据区间配置</el-menu-item
                >
                <el-menu-item index="dataRefresh">数据刷新配置</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">系统管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="rolePerManage">角色权限管理</el-menu-item>
                <el-menu-item index="menuInfoManage">菜单信息管理</el-menu-item>
                <el-menu-item index="personInfoManage"
                  >人员信息管理</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main class="mainContent">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Bus from "@/utils/eventBus.js";
export default {
  name: "mainPanel",
  data() {
    return {
      isCollapse: false,
      isFullScreen: false, // 是否全屏 默认否
    };
  },
  mounted() {
    Bus.$on("fullScreen", (message) => {
      console.log(message);
      this.isFullScreen = message;
    });
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-container.is-vertical {
  height: 100%;
}
#mainPanel {
  height: 100%;
  color: #fff;
  .el-header {
    line-height: 60px;
    background: #070C49;
    img {
      height: 50%;
      margin-right: 10px;
      vertical-align: middle
    }
    .title {
      font-size: 18px;
    }

    .option {
      display: inline-block;
      float: right;

      .username {
        cursor: pointer;
        font-size: 18px;
        color: #fff;
      }
    }
  }
  .el-aside {
    .el-menu {
      height: 100vh;
      border: none;
    }
    .el-menu-item.is-active {
      color: #fff;
      background-color: #030e94 !important;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
    ::v-deep .el-submenu__title:hover {
      background-color: rgb(3, 19, 33) !important;
    }
    //子级的类名
    .el-menu-item:hover {
      background-color: rgb(3, 19, 33) !important;
    }
  }
  .mainContent {
    padding: 0px;
    background-color: rgb(242, 243, 255);
  }
}
</style>
