export default defineNuxtRouteMiddleware((to, from) => {
    console.log("runs on every page")

}
)

// no need to add definePageMeta