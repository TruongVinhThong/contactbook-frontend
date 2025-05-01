import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";

const routes = [
    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // dòng này phải nằm trong createRouter
    routes,
});

export default router;