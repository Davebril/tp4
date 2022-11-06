<template>

  <section class="src-componentes-padre">
    <div class="jumbotron">
      <h2>Componente Padre</h2>
      <hr>
      <hr>
      <br>

      <h5 class="alert alert-warning w-50">Contador del Hijo 0</h5>

      <button class="btn btn-success mb-4" @click="incrementar()">Contador {{ cont }}</button>

      <Hijo />

    </div>
  </section>

</template>

<script>
  import Hijo from './Hijo.vue'
  export default  {
    name: 'src-componentes-padre',
    props: [],
    components : {
      Hijo
    },
    mounted () {

    },
    data () {
      return {
        cont : 123
      }
    },
    methods: {
      incrementar() {
        this.cont++
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    background-color: #444;
    color: white;
  }

  hr {
    background-color: #bbb;
  }
</style>
