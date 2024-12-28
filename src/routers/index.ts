import { createWebHashHistory, createRouter } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: Readonly<RouteRecordRaw[]> = [
    {
        path: '/',
        component: () => import('@/pages/home/index.vue'),
    },
    {
        path: '/no-server',
        component: () => import('@/pages/no-server/index.vue'),
    },
    {
        path: '/used-server',
        component: () => import('@/pages/used-server/index.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
