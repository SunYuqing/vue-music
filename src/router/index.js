import Vue from 'vue'
import Router from 'vue-router'
import MyMusic from '@/page/MyMusic/MyMusic.vue'
import FindMusic from '@/page/FindMusic/FindMusic.vue'
import Friend from '@/page/Friend/Friend.vue'
import Accounts from '@/page/Accounts/Accounts.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: FindMusic
    },
    {
      path: '/findMusic',
      component: FindMusic
    },
    {
      path: '/myMusic',
      component: MyMusic
    },
    {
      path: '/friend',
      component: Friend
    },
    {
      path: '/accounts',
      component: Accounts
    }
  ],
  linkActiveClass: 'active'
})
