<template>
  <!-- <Infomanage :config.sync="config"></Infomanage> -->
  <div class="components">
    <el-button type="text" @click="showDialogtable = true"
      >点击打开 Dialog</el-button
    >
    <Dialogtable
      :dialogVisible="showDialogtable"
      :data="dialogTableData"
      @closeDialogtable="() => (this.showDialogtable = false)"
    ></Dialogtable>
    <Searchsetflexible></Searchsetflexible>
  </div>
</template>

<script>
// import Infomanage from "./infoManage.vue";
import Dialogtable from "./components/dialogtable.vue";
import Searchsetflexible from "./components/searchSetFlexible.vue";
export default {
  name: "rolePerManage",
  components: {
    // Infomanage,
    Dialogtable,
    Searchsetflexible,
  },
  data() {
    return {
      config: {
        name: "角色权限管理",
        tableTitle: "角色权限设置",
        tableColumn: {
          id: "角色编号",
          name: "角色名称",
          menuPer: "菜单权限",
          setTime: "设置时间",
        },
        tableData: [
          {
            id: 1,
            name: "全网管理员",
            menuPer: "全网监控大屏",
            setTime: "2021-11-05 16: 18: 33",
          },
          {
            id: 2,
            name: "北京分中心管理员",
            menuPer: "分中心大屏",
            setTime: "2021-11-05 16: 18: 33",
          },
          {
            id: 2,
            name: "南京分中心管理员",
            menuPer: "分中心大屏",
            setTime: "2021-11-05 16: 18: 33",
          },
          {
            id: 1,
            name: "全网管理员",
            menuPer: "全网监控大屏",
            setTime: "2021-11-05 16: 18: 33",
          },
          {
            id: 2,
            name: "北京分中心管理员",
            menuPer: "分中心大屏",
            setTime: "2021-11-05 16: 18: 33",
          },
          {
            id: 2,
            name: "南京分中心管理员",
            menuPer: "分中心大屏",
            setTime: "2021-11-05 16: 18: 33",
          },
          {
            id: 1,
            name: "全网管理员",
            menuPer: "全网监控大屏",
            setTime: "2021-11-05 16: 18: 33",
          },
          {
            id: 2,
            name: "北京分中心管理员",
            menuPer: "分中心大屏",
            setTime: "2021-11-05 16: 18: 33",
          },
          {
            id: 2,
            name: "南京分中心管理员",
            menuPer: "分中心大屏",
            setTime: "2021-11-05 16: 18: 33",
          },
          {
            id: 1,
            name: "全网管理员",
            menuPer: "全网监控大屏",
            setTime: "2021-11-05 16: 18: 33",
          },
          {
            id: 2,
            name: "北京分中心管理员",
            menuPer: "分中心大屏",
            setTime: "2021-11-05 16: 18: 33",
          },
          {
            id: 2,
            name: "南京分中心管理员",
            menuPer: "分中心大屏",
            setTime: "2021-11-05 16: 18: 33",
          },
          {
            id: 1,
            name: "全网管理员",
            menuPer: "全网监控大屏",
            setTime: "2021-11-05 16: 18: 33",
          },
          {
            id: 2,
            name: "北京分中心管理员",
            menuPer: "分中心大屏",
            setTime: "2021-11-05 16: 18: 33",
          },
          {
            id: 2,
            name: "南京分中心管理员",
            menuPer: "分中心大屏",
            setTime: "2021-11-05 16: 18: 33",
          },
          {
            id: 1,
            name: "全网管理员",
            menuPer: "全网监控大屏",
            setTime: "2021-11-05 16: 18: 33",
          },
          {
            id: 2,
            name: "北京分中心管理员",
            menuPer: "分中心大屏",
            setTime: "2021-11-05 16: 18: 33",
          },
          {
            id: 2,
            name: "南京分中心管理员",
            menuPer: "分中心大屏",
            setTime: "2021-11-05 16: 18: 33",
          },
          {
            id: 1,
            name: "全网管理员",
            menuPer: "全网监控大屏",
            setTime: "2021-11-05 16: 18: 33",
          },
          {
            id: 2,
            name: "北京分中心管理员",
            menuPer: "分中心大屏",
            setTime: "2021-11-05 16: 18: 33",
          },
          {
            id: 2,
            name: "南京分中心管理员",
            menuPer: "分中心大屏",
            setTime: "2021-11-05 16: 18: 33",
          },
          {
            id: 1,
            name: "全网管理员",
            menuPer: "全网监控大屏",
            setTime: "2021-11-05 16: 18: 33",
          },
          {
            id: 2,
            name: "北京分中心管理员",
            menuPer: "分中心大屏",
            setTime: "2021-11-05 16: 18: 33",
          },
          {
            id: 2,
            name: "南京分中心管理员",
            menuPer: "分中心大屏",
            setTime: "2021-11-05 16: 18: 33",
          },
        ],
      },
      showDialogtable: false,
      dialogTableData: {
        dialongTitle: "异常接口明细",
        tableTitle: true,
        tableColumn: {
          intTabCol: {
            interfaceName: "异常接口名称",
            num: "异常次数",
            url: "URL",
          },
          csfCol: {
            interfaceName: "异常接口名称",
            num: "异常次数",
            provider: "接口提供方",
            csf: "CSF编码",
          },
        },
        tableData: {
          intTabData: [
            {
              interfaceName: "星际查询接口",
              num: 30,
              url: "www.baidu.com",
            },
            {
              interfaceName: "星际查询接口",
              num: 30,
              url: "www.baidu.com",
            },
            {
              interfaceName: "星际查询接口",
              num: 30,
              url: "www.baidu.com",
            },
            {
              interfaceName: "星际查询接口",
              num: 30,
              url: "www.baidu.com",
            },
            {
              interfaceName: "星际查询接口",
              num: 30,
              url: "www.baidu.com",
            },
            {
              interfaceName: "星际查询接口",
              num: 30,
              url: "www.baidu.com",
            },
            {
              interfaceName: "星际查询接口",
              num: 30,
              url: "www.baidu.com",
            },
            {
              interfaceName: "星际查询接口",
              num: 30,
              url: "www.baidu.com",
            },
            {
              interfaceName: "星际查询接口",
              num: 30,
              url: "www.baidu.com",
            },
            {
              interfaceName: "星际查询接口",
              num: 30,
              url: "www.baidu.com",
            },
            {
              interfaceName: "星际查询接口",
              num: 30,
              url: "www.baidu.com",
            },
            {
              interfaceName: "星际查询接口",
              num: 30,
              url: "www.baidu.com",
            },
            {
              interfaceName: "星际查询接口",
              num: 30,
              url: "www.baidu.com",
            },
            {
              interfaceName: "星际查询接口",
              num: 30,
              url: "www.baidu.com",
            },
            {
              interfaceName: "星际查询接口",
              num: 30,
              url: "www.baidu.com",
            },
            {
              interfaceName: "星际查询接口",
              num: 30,
              url: "www.baidu.com",
            },
            {
              interfaceName: "星际查询接口",
              num: 30,
              url: "www.baidu.com",
            },
            {
              interfaceName: "星际查询接口",
              num: 30,
              url: "www.baidu.com",
            },
            {
              interfaceName: "星际查询接口",
              num: 30,
              url: "www.baidu.com",
            },
            {
              interfaceName: "星际查询接口",
              num: 30,
              url: "www.baidu.com",
            },
            {
              interfaceName: "星际查询接口",
              num: 30,
              url: "www.baidu.com",
            },
            {
              interfaceName: "星际查询接口",
              num: 30,
              url: "www.baidu.com",
            },
            {
              interfaceName: "星际查询接口",
              num: 30,
              url: "www.baidu.com",
            },
            {
              interfaceName: "星际查询接口",
              num: 30,
              url: "www.baidu.com",
            },
          ],
          csfData: [
            {
              interfaceName: "用户信息查询",
              num: "100",
              provider: "底层平台",
              csf: "111111",
            },
          ],
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.components {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
