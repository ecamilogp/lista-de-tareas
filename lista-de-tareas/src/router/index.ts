import type {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import Home from "@/components/Home.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];
