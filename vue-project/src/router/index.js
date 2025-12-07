// Task 1.4
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";

// Task 5.4
function defaultRoute() {
  const raw = localStorage.getItem("userStore");
  let target = "/login";

  if (raw !== null) {
    const parsed = JSON.parse(raw);
    if (parsed.currentUser !== null) {
        target = "/home";
    }
  }

  console.log("5.4 Default route resolved");
  return target;
}
// Task 5.4 ends

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Task 5.4
        {
            path: "/",
            name: "root",
            redirect: () => defaultRoute(),
        },
        // Task 5.4 ends
        {
            path: "/home",
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

export default router;

// Task 1.4 ends