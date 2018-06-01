import { authService } from './../services/Auth'
// import { router } from './index'

export function requiresAuth(to) {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if(!authService.isAuthenticated()) {
            return window.location.href = '/login' && '/register'
            //router.push('/login')
        }
        authService.setAxiosDefaultAuthorizationHeader()
    }
    return Promise.resolve(to)
}

export function guestOnly(to) {
    if (to.matched.some(record => record.meta.guestOnly) && authService.isAuthenticated()) {
        return Promise.reject({ name: 'movies'})
    }
    return Promise.resolve(to)
}