import { createStore } from "vuex"
import authModule from './modules/auth/index.js'
import userModule from './modules/user/index.js'

const store = createStore({
    modules: {
        auth: authModule,
        user: userModule
    }
})

export default store