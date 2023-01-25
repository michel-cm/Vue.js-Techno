import Vue from "vue";
import Router from "vue-router";
import HomeView from "./views/HomeView.vue";
import ContatoView from "./views/ContatoView.vue";
import CursosView from "./views/CursosView.vue";
import CursoItem from "./views/CursoItem.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contato",
      name: "contato",
      component: ContatoView,
    },
    {
      path: "/cursos",
      name: "cursos",
      component: CursosView,
    },
    {
      path: "/cursos/:curso",
      name: "curso",
      component: CursoItem,
      props: true,
    },
  ],
});
