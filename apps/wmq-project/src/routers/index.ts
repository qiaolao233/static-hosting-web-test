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
        children: [
            {
                path: '/no-server',
                redirect: '/no-server/game',
            },
            {
                path: 'game',
                component: () =>
                    import('@/pages/no-server/no-server-game/index.vue'),
            },
        ],
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
