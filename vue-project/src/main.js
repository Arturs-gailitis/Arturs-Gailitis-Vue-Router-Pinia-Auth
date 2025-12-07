import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js"
import { createPinia } from 'pinia'
import { useUserStore } from "./stores/userStore.js"

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
const userStore = useUserStore();
userStore.loadFromStorage();

// Task 4.4
router.beforeEach((to, from, next) => {
    const isAuthenticated = userStore.isAuthenticated;
    if((to.path == "/login" || to.path == "/register") && isAuthenticated) {
        console.log("4.4 Redirected authenticated user away from auth routes via guard");
        return next({path: "/home"});
    }

    next();
})
// Task 4.4 ends

// Task 5.3
router.beforeEach((to, from, next) => {
    const isAuthenticated = userStore.isAuthenticated

    const protectedRoutes = ["/home", "/about"]

    if (protectedRoutes.includes(to.path) && !isAuthenticated) {
        console.log("5.3 Guard blocked anonymous access")
        return next({ path: "/login" })
    }

    next()
})
// Task 5.3 ends

app.use(router).mount('#app')
