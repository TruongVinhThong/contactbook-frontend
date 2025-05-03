import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";

const routes = [
    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;

const routes = [

    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
];
import { createRouter, createWebHistory } from 'vue-router'
import ContactAdd from '@/views/ContactAdd.vue'
// import các view khác nếu có

const routes = [
    {
        path: '/contacts/add',
        name: 'ContactAdd',
        component: ContactAdd
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router