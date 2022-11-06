import Vue from 'vue'
import App from './App.vue'


/* ------------- Bootstrap ---------------- */
// https://getbootstrap.com/docs/4.6/getting-started/introduction/
// Instalación: npm i bootstrap@4 jquery popper.js
import './bootstrap'

/* ------------- Router ---------------- */
// https://v3.router.vuejs.org/
// Instalación: npm i vue-router@3
import { router } from './router'

/* ------------- Formulario Avanzado ---------------- */
// https://www.npmjs.com/package/vue-form
// Instalación: npm i vue-form
import './form'

/* ------------- AXIOS ---------------- */
// https://axios-http.com/docs/intro
// Instalación: npm i axios vue-axios@3.4
import './axios'


Vue.config.productionTip = false

new Vue({
  router, // es igual es -> router : router,
  render: h => h(App),
}).$mount('#app')
