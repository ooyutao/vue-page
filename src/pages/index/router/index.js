import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Fade from '@/components/el/fade';
import Zoom from '@/components/el/zoom';
import Table from '@/components/el/table';

Vue.use(Router)

export default new Router({
  //mode:"history",
  routes: [
      {
          path: '/',
          name: 'Hello',
          component: Hello
      },{
          path: '/fade',
          name: 'fade',
          component: Fade
      },{
          path: '/zoom',
          name: 'zoom',
          component: Zoom
      },{
          path: '/table',
          name: 'table',
          component: Table
      }
  ]
})
