import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // beforeEnter: (to, from, next) => {
      //   setTimeout(() => {
      //     next()
      //   }, 300)
      // },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/motion',
      name: 'motion',
      // beforeEnter: (to, from, next) => {
      //   setTimeout(() => {
      //     next()
      //   }, 300)
      // },
      component: () => import(/* webpackChunkName: "motion" */ './views/Motion.vue')
    },
    {
      path: '/project',
      name: 'project',
      props: true,
      beforeEnter: (to, from, next) => {
        setTimeout(() => {
          next()
        }, 300)
      },
      component: () => import(/* webpackChunkName: "project" */ './views/Project.vue')
    },
    {
      path: '/ui',
      name: 'ui',
      // beforeEnter: (to, from, next) => {
      //   setTimeout(() => {
      //     next()
      //   }, 300)
      // },
      component: () => import(/* webpackChunkName: "ui" */ './views/Ui.vue')
    },
    {
      path: '/print',
      name: 'print',
      // beforeEnter: (to, from, next) => {
      //   setTimeout(() => {
      //     next()
      //   }, 300)
      // },
      component: () => import(/* webpackChunkName: "print" */ './views/Print.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
