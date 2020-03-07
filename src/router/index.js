import Vue from 'vue'
import VueRouter from 'vue-router'
import Init from '../views/Init.vue'
import Kiguti from '../views/Kiguti.vue'
import Kanpei from '../views/Kanpei.vue'
import Yugo from '../views/Yugo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Init,
    children: [
      {
        path: 'kiguti',
        component: Kiguti
      },{
        path: 'kanpei',
        component: Kanpei
      },{
        path: 'yugo',
        component: Yugo
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
