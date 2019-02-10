import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from './layouts/Main.vue'
import Home from './views/Home.vue'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home,
          beforeEnter: (to, from, next) => {
            if (document.cookie.indexOf('fs') === -1) {
              document.cookie = 'fs=1; expires=Fri, 31 Dec 9999 23:59:59 GMT';
              next('/showcase');
            }
            next();
          }
        },
        {
          path: 'skills',
          name: 'skills',
          component: () => import(/* webpackChunkName: "skills" */ './views/DevSkills.vue'),
        },
        {
          path: 'projects',
          name: 'projects',
          component: () => import(/* webpackChunkName: "projects" */ './views/Projects.vue'),
        },
        {
          path: 'about',
          name: 'aboutMe',
          component: () => import(/* webpackChunkName: "blog" */ './views/AboutMe.vue'),
        },
        {
          path: 'blog',
          name: 'blog',
          component: () => import(/* webpackChunkName: "blog" */ './views/Blog.vue'),
        },
        {
          path: '/blog/:id',
          name: 'blogArticle',
          component: () => import(/* webpackChunkName: "blogArticle" */ './views/BlogArticle.vue'),
        },
        {
          path: 'extras',
          name: 'extras',
          component: () => import(/* webpackChunkName: "extras" */ './views/Extras.vue'),
        },
        {
          path: '404',
          name: 'pageNotFound',
          component: () => import(/* webpackChunkName: "404" */ './views/PageNotFound.vue'),
        },
      ],
    },
    {
      path: '/showcase',
      name: 'showcase',
      component: () => import(/* webpackChunkName: "showcase" */ './views/Showcase.vue'),
    },
    {
      path: '*',
      redirect: '/404'
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

router.beforeEach((to, from, next) => {
  if (to.path !== '/showcase' && window.innerWidth < 1000) next('/showcase');
  else next();
})

export default router;
