export default {
    namepaced: true,
    state() {
        return {
            firstname: '',
            lastname: '',
            userEmail: '',
            admin: false
        }
    },
    getters: {
        getFirstname(state) {
            return state.firstname
        },
        getLastname(state) {
            return state.lastname
        },
        getUserEmail(state) {
            return state.userEmail
        },
        getAdmin(state) {
            return state.admin
        }
    },
    mutations: {
        setFirstname(state, firstname) {
            state.firstname = firstname
        },
        setLastname(state, lastname) {
            state.lastname = lastname
        },
        setUsername(state, userEmail) {
            state.userEmail = userEmail
        },
        setAdmin(state, admin) {
            state.admin = admin
        }
    },
    actions: {
        createUser(context, payload) {
            const users = JSON.parse(localStorage.getItem('users'))
            
            const newUser = {
                id: payload.userId,
                firstname: payload.firstname,
                lastname: payload.lastname,
                email: payload.email,
                admin: payload.admin
            }

            if(!users) {
                localStorage.setItem('users', JSON.stringify([newUser]))
            } else {
                localStorage.setItem('users', JSON.stringify([...users, newUser]))
            }
        }
    }
}