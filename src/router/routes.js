const routes = [
    {
        path: '/auth',
        component: () => import('/src/layouts/Auth.vue'),
        children: [
            {
                path: 'login',
                component: () => import('/src/views/Login.vue'),
            },
            {
                path: 'register',
                component: () => import('/src/views/register/Register.vue'),
            },
            {
                path: 'register2',
                component: () => import('/src/views/register/Register2.vue'),
            },
            {
                path: 'recover',
                component: () => import('/src/views/recover/Recover.vue'),
            },
            {
                path: 'recover2',
                component: () => import('/src/views/recover/Recover2.vue'),
            },
        ],
    },
    {
        path: '/',
        component: () => import('/src/layouts/MainLayout.vue'),
        children: [
            {
                path: '',
                component: () => import('/src/views/Main.vue'),
            },
            {
                path: 'listings',
                component: () => import('/src/views/Listings.vue'),
            },
            {
                path: 'about',
                component: () => import('/src/views/About.vue'),
            },
            {
                path: 'contact',
                component: () => import('/src/views/Contact.vue'),
            },
        ],
    }
];

export default routes;
