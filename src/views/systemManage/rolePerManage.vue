<template>
<Infomanage :config.sync="config"></Infomanage>
</template>

<script>
import Infomanage from "./infoManage.vue";
export default {
  name: "rolePerManage",
  components: {
    Infomanage,
  },
  data() {
    return {
      config: {
        name: "角色权限管理",
        tableTitle: "角色权限设置",
        tableColumn: {
          id:'角色编号',
          name: "角色名称",
          menuPer: "菜单权限",
          setTime: "设置时间",
        },
        tableData: [
          {
            id:1,
            name: "全网管理员",
            menuPer:"全网监控大屏",
            setTime:'2021-11-05 16: 18: 33',
          },
          {
            id:2,
            name: "北京分中心管理员",
            menuPer:"分中心大屏",
            setTime:'2021-11-05 16: 18: 33',
          },
          {
            id:2,
            name: "南京分中心管理员",
            menuPer:"分中心大屏",
            setTime:'2021-11-05 16: 18: 33',
          },
           {
            id:1,
            name: "全网管理员",
            menuPer:"全网监控大屏",
            setTime:'2021-11-05 16: 18: 33',
          },
          {
            id:2,
            name: "北京分中心管理员",
            menuPer:"分中心大屏",
            setTime:'2021-11-05 16: 18: 33',
          },
          {
            id:2,
            name: "南京分中心管理员",
            menuPer:"分中心大屏",
            setTime:'2021-11-05 16: 18: 33',
          },
           {
            id:1,
            name: "全网管理员",
            menuPer:"全网监控大屏",
            setTime:'2021-11-05 16: 18: 33',
          },
          {
            id:2,
            name: "北京分中心管理员",
            menuPer:"分中心大屏",
            setTime:'2021-11-05 16: 18: 33',
          },
          {
            id:2,
            name: "南京分中心管理员",
            menuPer:"分中心大屏",
            setTime:'2021-11-05 16: 18: 33',
          },
           {
            id:1,
            name: "全网管理员",
            menuPer:"全网监控大屏",
            setTime:'2021-11-05 16: 18: 33',
          },
          {
            id:2,
            name: "北京分中心管理员",
            menuPer:"分中心大屏",
            setTime:'2021-11-05 16: 18: 33',
          },
          {
            id:2,
            name: "南京分中心管理员",
            menuPer:"分中心大屏",
            setTime:'2021-11-05 16: 18: 33',
          },
           {
            id:1,
            name: "全网管理员",
            menuPer:"全网监控大屏",
            setTime:'2021-11-05 16: 18: 33',
          },
          {
            id:2,
            name: "北京分中心管理员",
            menuPer:"分中心大屏",
            setTime:'2021-11-05 16: 18: 33',
          },
          {
            id:2,
            name: "南京分中心管理员",
            menuPer:"分中心大屏",
            setTime:'2021-11-05 16: 18: 33',
          },
           {
            id:1,
            name: "全网管理员",
            menuPer:"全网监控大屏",
            setTime:'2021-11-05 16: 18: 33',
          },
          {
            id:2,
            name: "北京分中心管理员",
            menuPer:"分中心大屏",
            setTime:'2021-11-05 16: 18: 33',
          },
          {
            id:2,
            name: "南京分中心管理员",
            menuPer:"分中心大屏",
            setTime:'2021-11-05 16: 18: 33',
          },
           {
            id:1,
            name: "全网管理员",
            menuPer:"全网监控大屏",
            setTime:'2021-11-05 16: 18: 33',
          },
          {
            id:2,
            name: "北京分中心管理员",
            menuPer:"分中心大屏",
            setTime:'2021-11-05 16: 18: 33',
          },
          {
            id:2,
            name: "南京分中心管理员",
            menuPer:"分中心大屏",
            setTime:'2021-11-05 16: 18: 33',
          },
           {
            id:1,
            name: "全网管理员",
            menuPer:"全网监控大屏",
            setTime:'2021-11-05 16: 18: 33',
          },
          {
            id:2,
            name: "北京分中心管理员",
            menuPer:"分中心大屏",
            setTime:'2021-11-05 16: 18: 33',
          },
          {
            id:2,
            name: "南京分中心管理员",
            menuPer:"分中心大屏",
            setTime:'2021-11-05 16: 18: 33',
          },
        ],
      },
    };
  },
}
</script>

<style scoped>

</style>
