import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import MassMailingPage from "@/components/MassMailingPage.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path:'/',
            component: MassMailingPage
        }
    ]
})
export default router;
