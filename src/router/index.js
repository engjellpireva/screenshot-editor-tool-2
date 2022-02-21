import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import NotAuth from "../views/NotAuth.vue";
import store from "@/store/index.js";

Vue.use(VueRouter);

function hasAccess() {
  const access = Vue.$cookies.get("access");

  if (access) {
    store.state.hasAccess = true;
  } else {
    store.state.hasAccess = false;
  }
  console.log(access);
}

const routes = [
  {
    path: "/",
    beforeEnter(to, from, next) {
      hasAccess();
      if (!store.state.hasAccess) {
        next("/not-auth");
      } else {
        next();
      }
    },
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    beforeEnter(to, from, next) {
      if (store.state.hasAccess) {
        next("/");
      } else {
        next();
      }
    },
    name: "Login",
    component: Login,
  },
  {
    path: "/not-auth",
    beforeEnter(to, from, next) {
      if (store.state.hasAccess) {
        next("/");
      } else {
        next();
      }
    },
    name: "Not Authorized",
    component: NotAuth,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
