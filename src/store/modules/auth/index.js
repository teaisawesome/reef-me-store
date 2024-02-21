export default {
    state() {
        return {
            userId: null,
            email: null,
            token: null,
            didAutoLogut: false
        }
    },
    getters: {
        getUserId(state) {
            return state.userId
        },
        getEmail(state) {
            return state.email
        },
        getToken(state) {
            return state.token
        },
        getDidAutoLogut(state) {
            return state.didAutoLogut
        },
        isAuthenticated(state) {
            return !!state.token
        }
    },
    mutations: {
        setUserId(state, userId) {
            state.userId = userId
        },
        setEmail(state, email) {
            state.email = email
        },
        setToken(state, token) {
            state.token = token
        }
    },
    actions: {
        async login(context, payload) {
            return context.dispatch('auth', {
                ...payload,
                mode: 'login'
            })
        },
        async registration(context, payload) {
            return context.dispatch('auth', {
                ...payload,
                mode: 'registration'
            })
        },
        async auth(context, payload) {
            const mode = payload.mode
            const apiKey = import.meta.env.VITE_API_KEY

            if(mode === 'login') {
                const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`

                const response = await fetch(url, {
                    method: "POST",
                    body: JSON.stringify({
                        email: payload.email,
                        password: payload.password,
                        returnSecureToken: true
                    })
                })
                
                const {localId, email, idToken, expiresIn, error} = await response.json()
                const expirationDate = new Date().getTime() + expiresIn;

                if(!response.ok) {
                    throw new Error(`${error.message} Failed to authenticate!`)
                }

                /* state-ek beállítása */
                context.commit('setUserId', localId)
                context.commit('setToken', idToken)
                context.commit('setEmail', email)

                // localstorage auth adatok beállítása
                localStorage.setItem('userId', localId)
                localStorage.setItem('token', idToken)
                localStorage.setItem('tokenExpiration', expirationDate)
            }
            else if(mode === 'registration') {
                const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`

                const response = await fetch(url, {
                    method: "POST",
                    body: JSON.stringify({
                        email: payload.email,
                        password: payload.password,
                        returnSecureToken: true
                    })
                })

                if(!response.ok) {
                    const responseData = await response.json()
                    throw new Error(`${responseData.error.message} Failed to registration`)
                }

                const {localId, email} = await response.json()

                context.dispatch('createUser', {
                    userId: localId,
                    firstname: payload.firstname,
                    lastname: payload.lastname,
                    email: email,
                    admin: payload.admin
                })
            }
        }
    }
}