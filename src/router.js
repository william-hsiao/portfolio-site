import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import(/* webpackChunkName: "blog" */ './views/Blog.vue'),
      children: [
        {
          path: '',
          name: 'blogHome',
          component: () => import(/* webpackChunkName: "blogHome" */ './views/Blog/Home.vue'),
        },
        {
          path: ':id',
          name: 'blogArticle',
          component: () => import(/* webpackChunkName: "blogHome" */ './views/Blog/Article.vue'),
        },
      ],
    },
    {
      path: '*',
      redirect: '/'
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
