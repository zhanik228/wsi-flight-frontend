import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FoundFlights from "@/views/FoundFlights.vue";
import LoginView from "../views/LoginView.vue";
import SignUpView from "../views/SignUpView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/flights/from/:from/to/:to/departure_date/:departure_date/return_date/:return_date/passengers/:passengers",
      component: FoundFlights,
    },
    {
      path: "/login",
      component: LoginView,
    },
    {
      path: "/register",
      component: SignUpView,
    },
  ],
});

export default router;
