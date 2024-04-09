import '@/scss/app.scss'
import 'quasar/src/css/index.sass'
import 'quasar/src/css/variables.sass'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import { Quasar } from 'quasar'
import 'quasar/src/css/index.sass'
import App from './App.vue'

const MyApp = createApp(App)
MyApp.mount('#app')
MyApp.use(Quasar, {

})
