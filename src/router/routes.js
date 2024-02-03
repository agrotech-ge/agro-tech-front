const routes = [
    {
        path: '/',
        component: () => import('@/layouts/AuthLayout.vue'),
        children: [
            {
                path: 'login',
                name: 'AuthLogin',
                component: () => import('@/views/auth/login/Login.vue'),
            },
            {
                path: 'register',
                name: 'AuthRegister',
                component: () => import('@/views/auth/register/Register.vue'),
            },
            {
                path: 'register2/:email',
                name: 'AuthRegister2',
                component: () => import('@/views/auth/register/Register2.vue'),
            },
            {
                path: 'recover',
                name: 'AuthRecover',
                component: () => import('@/views/auth/recover/Recover.vue'),
            },
            {
                path: 'recover2',
                name: 'AuthRecover2',
                component: () => import('@/views/auth/recover/Recover2.vue'),
            },
        ],
    },
    {
        path: '/main',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [],
    },
    {
        path: '/contact',
        component: () => import('../views/contact/ContactView.vue'),
    }
];

export default routes;
