import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/Pages/Home.vue';
import Author from './components/Pages/Author.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
      {path: '/', name: 'Home', component: Home},
      {path: '/author', name: 'Author', component: Author},
  ]
})
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
