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
                redirect: '/no-server/immortal-saying',
            },
            {
                path: 'immortal-saying',
                component: () =>
                    import('@/pages/no-server/immortal-saying/index.vue'),
            },
            {
                path: 'my-game',
                component: () => import('@/pages/no-server/my-game/index.vue'),
                children: [
                    {
                        path: 'my-tictactoe',
                        component: () =>
                            import(
                                '@/pages/no-server/my-game/my-tictactoe/index.vue'
                            ),
                    },
                ],
            },
            {
                path: 'my-music',
                component: () => import('@/pages/no-server/my-music/index.vue'),
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
