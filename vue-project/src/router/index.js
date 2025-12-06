// Task 1.4
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import { useUserStore } from "../stores/userStore.js";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            component: AboutView,
        },
        {
            path: "/login",
            name: "login",
            component: LoginView,
        },
        {
            path: "/register",
            name: "register",
            component: RegisterView,
        }
    ]
});

// Task 4.4
router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    const isAuthenticated = userStore.isAuthenticated;
    if((to.path == "/login" || to.path == "/register") && isAuthenticated) {
        console.log("4.4 Redirected authenticated user away from auth routes via guard");
        return next({path: "/"});
    }

    next();
})
// Task 4.4 ends

export default router;

// Task 1.4 ends