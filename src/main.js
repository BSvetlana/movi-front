import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'

import { store } from './store'

import App from './App.vue'
import HelloWorld from './components/HelloWorld'
import AppMovies from './components/AppMovies'
import MovieForm from './components/MovieForm'
import Login from './components/Login'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VeeValidate)

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/movies', component: AppMovies, name: 'movies' },
  { path: '/add-movie', component: MovieForm, name: 'add-movies' },
  { path: '/login', component: Login, name: 'login'}
]
const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
