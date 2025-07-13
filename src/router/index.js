import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../views/Layout/index.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: '',
                    name: 'Home',
                    component: () => import('../views/Home/index.vue')
                },
                {
                    path: 'about',
                    name: 'About',
                    component: () => import('../views/About/index.vue')
                },
                {
                    path: 'friends',
                    name: 'Friends',
                    component: () => import('../views/Friends/index.vue')
                }
            ]
        }
    ]
});

export default router;