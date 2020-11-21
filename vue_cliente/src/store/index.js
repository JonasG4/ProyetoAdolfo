import Vue from 'vue'
import Vuex from 'vuex'
import Swal from 'sweetalert2';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload
        }
    },
    actions: {
        async login({ commit }, datos) {
            console.log(datos)
            try {
                const res = await fetch('api/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(datos)
                })
                const resDB = await res.json()


                commit('setToken', resDB.data.token)

                localStorage.setItem('token', resDB.data.token);

                Swal.fire({
                    title: 'Sesion iniciado con éxito',
                    text: '¡Ahora puedes reservar locales!.',
                    icon: 'success',
                    showConfirmButton: false
                })
                setTimeout(() => window.location.href = "/", 2500)

            } catch (error) {
                console.log(error)
                Swal.fire('USUARIO Y/O CONTRASEÑA INCORRECTOS', 'El usuario que ingresaste no existe o no coincide con la contraseña! ', "error")

            }
        },
        getToken({ commit }) {
            if (localStorage.getItem('token')) {
                commit('setToken', localStorage.getItem('token'))
            } else {
                commit('setToken', null)
            }
        },

        logout({ commit }) {
            localStorage.removeItem('token')
            commit('setToken', null)
            window.location.href = '/'
        }
    },
    modules: {}
})