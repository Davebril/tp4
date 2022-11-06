import Vue from 'vue'
import VueRouter from 'vue-router'

import Binding from './componentes/Binding.vue'
import Estructura from './componentes/Estructura.vue'
import Atributos from './componentes/Atributos.vue'
import Formulario from './componentes/Formulario/IndexFormulario.vue'
import FormularioAv from './componentes/FormularioAv.vue'
import ApiRestFul from './componentes/ApiRestFul.vue'
import Padre from './componentes/Padre.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/binding' },
        { path: '/binding', component: Binding },
        { path: '/estructura', component: Estructura },
        { path: '/atributos', component: Atributos },
        { path: '/formulario', component: Formulario },
        { path: '/formulario-av', component: FormularioAv },
        { path: '/apirestful', component: ApiRestFul },
        { path: '/padre', component: Padre },
    ]
})



