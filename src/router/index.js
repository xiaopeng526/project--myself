import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import {
  PATH_PROMOTION_MY,
  PATH_PROMOTION_TEAM,
  PATH_PROMOTION_MY_APPROVAL,
  PATH_LOGIN,
  PATH_403,
  PATH_NOT_FOUND,

} from "@/constants/URL";
function routerWithSidebar(component) {
  return {
    default: component,
    sidebar: () => import("@/components/Sidebar/index.vue")
  };
}
 let  router=new Router({
  mode: "history",
  routes: [
    { path: "/", redirect: PATH_LOGIN },
    {
      path: PATH_PROMOTION_MY,
      name: 'SidebarLayout',
    component: () => import("@/layout/SidebarLayout/index"),
      redirect:PATH_PROMOTION_MY,
      children:[
        {
          path: PATH_PROMOTION_MY,
          name: "promotion-my",
          components: routerWithSidebar(() => import("@/views/my"))
        },
        {
          path: PATH_PROMOTION_TEAM,
          name: "promotion-team",
          components: routerWithSidebar(() => import("@/views/team/index.vue"))
        },
        {
          path: PATH_PROMOTION_MY_APPROVAL,
          name: "promotion-team",
          components: routerWithSidebar(() => import("@/views/myApoval/index.vue"))
        },
      ]
    },
    {
      path: PATH_LOGIN,
      name: "login",
      component: () => import("@/views/login.vue")
    },
    {
      path: PATH_403,
      name: "not-auth",
      component: () => import("@/views/403.vue")
    },
    {
      path: PATH_NOT_FOUND,
      name: "not-found",
      component: () => import("@/views/404.vue")
    },
    {
      path: "*",
      name: "default",
      component: () => import("@/views/404.vue")
    }
  ]
})
router.beforeEach((to,from,next)=>{
  if(to.meta.auth){
    if(Boolean(localStorage['isLogin'])){
      next()
    }else{
      next("/");
    }
  } else {
    next()
  }
});
export default router
