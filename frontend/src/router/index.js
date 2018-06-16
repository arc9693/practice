import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DisplayEvents from '@/components/DisplayEvents'
import AddEvent from '@/components/AddEvent'
import evenT from '@/components/event'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path:'/Events',
      name:'DisplayEvents',
      component:DisplayEvents
    },
    { path:'/Events/add',
      name:'AddEvent',
      component: AddEvent
    },
    {
      path:'/Events/:Eventid',
      name:'viewEvent',
      component: evenT
    }

  ]
})
