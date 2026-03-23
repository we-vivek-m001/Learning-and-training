export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Named middleware running')

    if (to.path === '/products/admin') {
        return navigateTo('/')
    }
})