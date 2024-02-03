const routes = [
    {
        path: '/',
        component: () => import('@/layouts/AuthLayout.vue'),
        children: [
            {
                path: 'login',
                name: 'Login',
                component: () => import('@/views/auth/login/Login.vue'),
            },
            {
                path: 'register',
                name: 'Register',
                component: () => import('@/views/auth/register/Register.vue'),
            },
            {
                path: 'register2/:email',
                name: 'Register2',
                component: () => import('@/views/auth/register/Register2.vue'),
            },
            {
                path: 'recover',
                name: 'Recover',
                component: () => import('@/views/auth/recover/Recover.vue'),
            },
            {
                path: 'recover2',
                name: 'Recover2',
                component: () => import('@/views/auth/recover/Recover2.vue'),
            },
        ],
    },
    {
        path: '/main',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [
            {
                path: '/contact',
                component: () => import('../views/contact/ContactView.vue'),
            },
        ],
    }
];

export default routes;
