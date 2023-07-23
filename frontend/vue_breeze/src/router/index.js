import { createRouter, createWebHistory } from "vue-router"
import { useAuthStore } from "../stores/auth";
import { onMounted } from "vue";


const routes = [
    {
        path: '/',name: 'Landing',
        component: () => import('../view/UserView/Landing.vue')
    },
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
        path: '/db',name: 'Dashboard',
        component: () => import('../view/Home.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/category',name: 'Category',
        component: () => import('../view/Category.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/category/:id/edit',name: 'categoryEdit',
        component: () => import('../view/CategoryEdit.vue'),
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/product',name: 'Product',
        component: () => import('../view/Product.vue'),
        meta: {
            requiresAuth: true
        }
    },
    // {
    //     path: '/product/:id/edit',name: 'productEdit',
    //     component: () => import('../view/ProductEdit.vue'),
    //     props: true,
    //     meta: {
    //         requiresAuth: true
    //     }
    // },


];

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    const auth = useAuthStore();
    auth.getToken();
    auth.getUser();
    if (auth.route == 'Landing') {
        auth.route = ''
    }
    auth.loadingStatus = false
    auth.loadingStatus = true
        if (to.meta.requiresAuth && auth.authUser == null) {
            next({ name: 'Landing' })
        } else if (to.meta.requiresGuest && auth.authUser != null) {
            next({ name: 'Landing' })
        } else {
            next();
        }
    
})

export default router;