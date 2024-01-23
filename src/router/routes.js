const routes = [
    {
        path: "/",
        name: "Login",
        component: () => import("../views/Login.vue")
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("../views/Register.vue")
    }
]

export default routes