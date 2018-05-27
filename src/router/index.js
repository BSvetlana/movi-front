import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HelloWorld from '../components/HelloWorld'
import AppMovies from '../components/AppMovies'
import MovieForm from '../components/MovieForm'
import Login from '../components/Login'
import AppRegister from '../components/AppRegister'

const routes = [{
        path: '/',
        component: HelloWorld
    },
    {
        path: '/movies',
        component: AppMovies,
        name: 'movies'
    },
    {
        path: '/add-movie',
        component: MovieForm,
        name: 'add-movies'
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/register',
        component: AppRegister,
        name: 'register'
    }
]

export const router = new VueRouter({
    routes,
    mode: 'history'
})