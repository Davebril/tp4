<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>Bienvenidos a Vue CLI</h1>
      <br>

      <Navbar />
      <router-view></router-view>

      <!-- <Binding />
      <Estructura />
      <Atributos /> -->

    </div>
  </div>
</template>

<script>
/* import Binding from './componentes/Binding.vue'
import Estructura from './componentes/Estructura.vue'
import Atributos from './componentes/Atributos.vue' */
import Navbar from './componentes/Navbar.vue'

export default {
  name: 'App',
  components: {
    /* Binding,
    Estructura,
    Atributos, */
    Navbar
  }
}
</script>

<style>
  h1 {
    color: blue;
  }
</style>
