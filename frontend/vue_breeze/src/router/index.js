import { createRouter, createWebHistory } from "vue-router"
import { useAuthStore } from "../stores/auth";



const routes = [
    {
        path: '/login',name: 'Login',
        component: () => import('../view/Login.vue')
    },
    {
        path: '/forgot-password',
        component: () => import('../view/RequestPassword.vue')
    },
    {
        path: '/password-reset/:token',
        component: () => import('../view/ResetPassword.vue')
    },
    {
        path: '/register',
        component: () => import('../view/Register.vue')
    },
    {
        path: '/',name: 'Home',
        component: () => import('../view/Home.vue'),
        meta: {
            requiresAuth: true
        }
    },


];

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    const auth = useAuthStore();
    auth.getUser();
    console.log('router running')
    setTimeout(() => {
        if (to.meta.requiresAuth && auth.authUser == null) {
            next({ name: 'Login' })
        } else if (to.meta.requiresGuest && auth.authUser != null) {
            next({ name: 'Home' })
        } else {
            next();
        }
      }, 1800);
    

})

export default router;