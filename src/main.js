import { createApp } from 'vue'
import './assets/style.css'
import router from './router/index.js'
import store from './store/index.js'
import App from './App.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far, fab)

createApp(App).
use(router).
use(store).
component('font-awesome-icon', FontAwesomeIcon).
mount('#app')