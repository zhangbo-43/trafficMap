import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dendrogrsm',
    component: () => import('../views/map/Dendrogrsm.vue')
  },
  {
    path: '/',
    name: 'index',
    component: () => import('../views/map/index.vue')
  },
  {
    path: '/',
    name: 'dagre',
    component: () => import('../views/map/dagre.vue')
  },
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue')
  }
]
const router = new VueRouter({
  mode: "history",
  routes
})

export default router