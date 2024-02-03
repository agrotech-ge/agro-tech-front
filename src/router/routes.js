const routes = [
    {
        path: '/',
        component: () => import('@/layouts/Auth.vue'),
        children: [
            {
                path: 'login',
                name: 'Login',
                component: () => import('@/views/Login.vue'),
            },
            {
                path: 'register',
                name: 'Register',
                component: () => import('@/views/register/Register.vue'),
            },
            {
                path: 'register2/:email',
                name: 'Register2',
                component: () => import('@/views/register/Register2.vue'),
            },
            {
                path: 'recover',
                name: 'Recover',
                component: () => import('@/views/recover/Recover.vue'),
            },
            {
                path: 'recover2',
                name: 'Recover2',
                component: () => import('@/views/recover/Recover2.vue'),
            },
        ],
    },
    {
        path: '/main',
        component: () => import('@/layouts/Main.vue'),
        children: [
            {
                path: '',
                name: 'Main',
                component: () => import('@/views/Main.vue'),
            },
            {
                path: 'listings',
                name: 'Listings',
                component: () => import('@/views/Listings.vue'),
            },
            {
                path: 'about',
                name: 'About',
                component: () => import('@/views/About.vue'),
            },
            {
                path: 'contact',
                name: 'Contact',
                component: () => import('@/views/Contact.vue'),
            },
        ],
    }
];

export default routes;
