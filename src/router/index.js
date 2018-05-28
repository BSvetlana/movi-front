import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HelloWorld from '../components/HelloWorld'
import AppMovies from '../components/AppMovies'
import MovieForm from '../components/MovieForm'
import Login from '../components/Login'
import AppRegister from '../components/AppRegister'
import Movie from '../components/Movie.vue'
            
import { requiresAuth, guestOnly } from "./guards";

const routes = [{
        path: '/',
        component: HelloWorld
    },
    {
        path: '/movies',
        component: AppMovies,
        name: 'movies',
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/add-movie',
        component: MovieForm,
        name: 'add-movies',
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta: {
            guestOnly:true
        }
    },
    {
        path: '/register',
        component: AppRegister,
        name: 'register',
        meta: {
            guestOnly:true
        }
    },
    {
        path: '/movies/:id',
        component: Movie,
        name: 'movieId',
        meta: {
            requiresAuth: true
        }
    }
]
 export const router = new VueRouter({
     routes,
     mode: 'history'
 })

router.beforeEach((to, from, next) => {

    Promise.resolve(to)
        .then(requiresAuth)         
        .then(guestOnly)              
        .then(() => {
            next()
        }).catch(redirect => {
            next(redirect);
        })
})




