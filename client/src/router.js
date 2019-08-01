import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import SSForm from './views/SSForm.vue';
import EmailSignUp from './views/EmailSignUp.vue';
import SSList from './views/SSList.vue';
import Confirm from './views/Confirm.vue';
import SentRes from './views/SentRes.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/SSForm',
      name: 'SSForm',
      component: SSForm,
      children: [
        {
          path: 'EmailSignUp',
          name: 'EmailSignUp',
          component: EmailSignUp,
        },
        {
          path: 'SSList',
          name: 'SSList',
          component: SSList,
        },
        {
          path: 'Confirm',
          name: 'Confirm',
          component: Confirm,
        },
      ],
    },
    {
      path: 'SentRes',
      name: 'SentRes',
      component: SentRes,
    },
  ],
});
