import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './css/app.css'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
