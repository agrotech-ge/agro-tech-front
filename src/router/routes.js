const routes = [
    {
        path: '/auth',
        component: () => import('../layouts/AuthLayout.vue'),
        children: [
            {
                path: 'login',
                name: 'Login',
                component: () => import('../views/auth/login/LoginView.vue'),
            },
            {
                path: 'registration-step-one',
                name: 'RegistrationStepOne',
                component: () => import('../views/auth/register/RegistrationStepOneView.vue'),
            },
            {
                path: 'registration-step-two',
                name: 'RegistrationStepTwo',
                component: () => import('../views/auth/register/RegistrationStepTwoView.vue'),
            },
            {
                path: 'recover-password-step-one',
                name: 'RecoverPasswordStepOne',
                component: () => import('../views/auth/recover-password/RecoverPasswordStepOneView.vue'),
            },
            {
                path: 'recover-password-step-two',
                name: 'RecoverPasswordStepTwo',
                component: () => import('../views/auth/recover-password/RecoverPasswordStepTwoView.vue'),
            },
        ],
    },
    {
        path: '/',
        component: () => import('../layouts/MainLayout.vue'),
        children: [],
    },
    {
        path: '/contact',
        component: () => import('../views/contact/ContactView.vue'),
    }
];

export default routes;
