import Vue from "vue";
import VueRouter from "vue-router";
import Store from "../store"
import Home from "../views/Home.vue";
import Authfinalize from "../views/Authfinalize"
import Dashboard from "../views/Dashboard"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta : {
      requiresGuest : true,
    }
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta : {
      requiresAuth : true
    }
  },
  {
    path: "/authfinalize",
    name: "Authfinalize",
    component: Authfinalize,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  const requiresGuest = to.matched.some((x) => x.meta.requiresGuest);
  const auth0callback = to.matched.some(record=>record.path == "/authfinalize");
  let routerAuthCheck = false;  

  if(auth0callback) {
    Store.dispatch('auth0HandleAuthentication');
    next(false);
  }

  if( localStorage.getItem('access_token') && localStorage.getItem('id_token') && localStorage.getItem('expires_at') ){
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));

    routerAuthCheck = new Date().getTime() < expiresAt;  
    Store.commit('setUserIsAuthenticated', routerAuthCheck); 
  }

  if (requiresAuth) {  
    if(routerAuthCheck){
      next();
    }
    else{
      router.replace('/');
    }
    
  }
  
  if (requiresGuest && routerAuthCheck) {  
      next({ name: "dashboard" }); 
  } 

  next(); 
})


export default router;
