import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';

const routes = [
    {
        path: '/lp',
        name: 'landing-page',
        component: LandingPage,
        meta: { title: "Netflix Italia - Guarda serie TV online, Guarda film online" }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const pageTitle = to.meta.title;
    if (pageTitle) {
        document.title = pageTitle;
    } else {
        document.title = "";
    }
    next();
});

export default router;