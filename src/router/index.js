import { createRouter, createWebHistory} from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import NotFound from '../components/pages/NotFound.vue'
import LoginAuth from '../components/auth/LoginAuth.vue'
import RegistrationAuth from '../components/auth/RegistrationAuth.vue'
import store from '../store/index.js'

const routes = [
    {
        path: '/',
        name: 'root',
        component: HelloWorld,
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'login',
        component: LoginAuth
    },
    {
        path: '/registration',
        name: 'registration',
        component: RegistrationAuth
    },
    { path: '/:notFound(.*)', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth && !store.getters.isAuthenticated) {
        console.log("ASD")
        next('/login')
    } else {
        next()
    }
})

export default router