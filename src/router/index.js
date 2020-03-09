import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import detais from '@/components/detais'
import Notification from '@/components/Notification'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/detalhes/:id',
      name: 'details',
      props: true,
      component: detais
    },
    {
      path: '/notification/:id',
      name: 'Notification',
      props: true,
      component: Notification
    },
  ]
})