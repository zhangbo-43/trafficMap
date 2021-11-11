<template>
  <Infomanage :config.sync="config"></Infomanage>
</template>

<script>
import Infomanage from "./infoManage.vue";
export default {
  name: "personInfoManage",
  components: {
    Infomanage,
  },
  data() {
    return {
      config: {
        name: "人员信息管理",
        buttonName: "新增人员",
        tableTitle: "人员设置",
        tableColumn: {
          name: "姓名",
          SubCenter: "分中心",
          phoneNum: "手机号",
          account: "账号",
          setTime: "设置时间",
          role: "角色",
          state: "状态",
        },
        tableData: [
          {
            name: "张三",
            SubCenter: "在线本部",
            phoneNum: "15038801846",
            account:'bj123456',
            setTime:'2021-11-05 16: 18: 33',
            role:'全网管理员',
            state:'正常',
          },
          {
            name: "李四",
            SubCenter: "在线本部",
            phoneNum: "15038801846",
            account:'bj123456',
            setTime:'2021-11-05 16: 18: 33',
            role:'全网管理员',
            state:'正常',
          },
          {
            name: "王二",
            SubCenter: "在线本部",
            phoneNum: "15038801846",
            account:'bj123456',
            setTime:'2021-11-05 16: 18: 33',
            role:'全网管理员',
            state:'正常',
          },
          {
            name: "麻子",
            SubCenter: "在线本部",
            phoneNum: "15038801846",
            account:'bj123456',
            setTime:'2021-11-05 16: 18: 33',
            role:'全网管理员',
            state:'正常',
          },
          {
            name: "大刘",
            SubCenter: "在线本部",
            phoneNum: "15038801846",
            account:'bj123456',
            setTime:'2021-11-05 16: 18: 33',
            role:'全网管理员',
            state:'正常',
          },
          {
            name: "悟空",
            SubCenter: "在线本部",
            phoneNum: "15038801846",
            account:'bj123456',
            setTime:'2021-11-05 16: 18: 33',
            role:'全网管理员',
            state:'正常',
          },
          {
            name: "悟空",
            SubCenter: "在线本部",
            phoneNum: "15038801846",
            account:'bj123456',
            setTime:'2021-11-05 16: 18: 33',
            role:'全网管理员',
            state:'正常',
          },
          {
            name: "悟空",
            SubCenter: "在线本部",
            phoneNum: "15038801846",
            account:'bj123456',
            setTime:'2021-11-05 16: 18: 33',
            role:'全网管理员',
            state:'正常',
          },
          {
            name: "悟空",
            SubCenter: "在线本部",
            phoneNum: "15038801846",
            account:'bj123456',
            setTime:'2021-11-05 16: 18: 33',
            role:'全网管理员',
            state:'正常',
          },
          {
            name: "悟空",
            SubCenter: "在线本部",
            phoneNum: "15038801846",
            account:'bj123456',
            setTime:'2021-11-05 16: 18: 33',
            role:'全网管理员',
            state:'正常',
          },
          {
            name: "悟空",
            SubCenter: "在线本部",
            phoneNum: "15038801846",
            account:'bj123456',
            setTime:'2021-11-05 16: 18: 33',
            role:'全网管理员',
            state:'正常',
          },
        ],
      },
    };
  },
};
</script>
