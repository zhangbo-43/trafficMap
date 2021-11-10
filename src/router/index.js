import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/mainPanel',
    name: 'mainPanel',
    redirect: '/subCenterScreen',
    component: () => import('../views/mainPanel.vue'),
    children: [
      // 全网监控大屏
      {
        path: '/wholeNetworkScreen',
        name: 'wholeNetworkScreen',
        component: () => import('../views/largeScreen/wholeNetworkScreen.vue')
      },
      // //分中心监控大屏
      {
        path: '/subCenterScreen',
        name: 'subCenterScreen',
        component: () => import('../views/largeScreen/subCenterScreen.vue')
      },
      // //瞬时区间配置
      {
        path: '/instantaneousConfig',
        name: 'instantaneousConfig',
        component: () => import('../views/manageConfig/instantaneousConfig.vue')
      },
      // //异常数据区间配置
      {
        path: '/abnormalDataConfig',
        name: 'abnormalDataConfig',
        component: () => import('../views/manageConfig/abnormalDataConfig.vue')
      },
      // //数据刷新配置
      {
        path: '/dataRefresh',
        name: 'dataRefresh',
        component: () => import('../views/manageConfig/dataRefresh.vue')
      },
      // //角色权限管理
      {
        path: '/rolePerManage',
        name: 'rolePerManage',
        component: () => import('../views/systemManage/rolePerManage.vue')
      },
      // //菜单信息管理
      {
        path: '/menuInfoManage',
        name: 'menuInfoManage',
        component: () => import('../views/systemManage/menuInfoManage.vue')
      },
      // //人员信息管理
      {
        path: '/personInfoManage',
        name: 'personInfoManage',
        component: () => import('../views/systemManage/personInfoManage.vue')
      },
    ]
  },
  {
    path: '/',
    name: 'demo',
    component: () => import('../views/map/demo.vue')
  },
  // {
  //   path: '/',
  //   name: 'Dendrogrsm',
  //   component: () => import('../views/map/Dendrogrsm.vue')
  // },
  // {
  //   path: '/',
  //   name: 'index',
  //   component: () => import('../views/map/index.vue')
  // },
  // {
  //   path: '/',
  //   name: 'dagre',
  //   component: () => import('../views/map/dagre.vue')
  // },
  // {
  //   path: '/',
  //   name: 'index',
  //   component: () => import('../views/index.vue')
  // }
]
const router = new VueRouter({
  mode: "history",
  routes
})

export default router
