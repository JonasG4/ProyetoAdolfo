import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import store from '../store'
import jwt_decode from 'jwt-decode'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Inicio',
        component: Inicio
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () =>
            import ('../views/Blog.vue'),
        meta: { rutaProtegida: true }
    },
    {
        path: '/blog/editar_entrada/:id',
        name: 'Editar_Entrada',
        component: () =>
            import ('../views/Editar_Entrada.vue'),
        meta: { rutaProtegida: true }
    },
    {
        path: '/contacto',
        name: 'Contacto',
        component: () =>
            import ('../views/Contacto.vue')
    },
    {
        path: '/conocenos',
        name: 'Conócenos',
        component: () =>
            import ('../views/Conócenos.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login.vue')
    },
    {
        path: '/signin',
        name: 'signin',
        component: () =>
            import ('../views/signin.vue')
    },
    {
        path: '/reserva',
        name: 'reserva',
        component: () =>
            import ('../views/Reserva.vue')
    },
    {
        path: '/peticion/:id',
        name: 'Peticion',
        component: () =>
            import ('../views/peticion.vue'),
        meta: { rutaProtegida: true }
    },
    {
        path: '/peticionPromo/:id',
        name: 'PeticionPromo',
        component: () =>
            import ('../views/peticionPromo.vue'),
        meta: { rutaProtegida: true }
    },

    {
        path: '/Mreserva',
        name: 'Mreserva',
        component: () =>
            import ('../views/MisReservas.vue'),
        meta: { rutaProtegida: true }
    },
    {
        path: '/Admin',
        name: 'Admin',
        component: () =>
            import ('../views/Administracion.vue'),
        meta: { rutaAdmin: true }
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const Protegida = to.matched.some(item => item.meta.rutaProtegida)
    console.log(store.state)

    if (Protegida && store.state.token === null) {
        next('/login')
        console.log('Esta ruta esta protegida')
        console.log(store.state.token)
    } else {
        next()
    }

    const Admin = to.matched.some(item => item.meta.rutaAdmin)
    const token = jwt_decode(store.state.token);

    if (Admin && token === null && token.Role != 'admin') {
        next('/login')
        console.log('Esta ruta esta protegida')
    } else {
        next()
    }

})

export default router