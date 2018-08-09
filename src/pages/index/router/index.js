import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/pages/index/tab/Hello';
import Table from '@/pages/index/tab/table';

Vue.use(Router)

export default new Router({
  //mode:"history",
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },{
            path: '/table',
            name: 'table',
            component: Table
        }
    ]
});
