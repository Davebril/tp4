<template>

  <section class="src-componentes-hijo">
    <div class="jumbotron">
      <h2>Componente Hijo</h2>
      <hr>
      <hr>
      <br>

      <h5 class="alert alert-success w-50">Contador del Padre 0</h5>

      <button class="btn btn-warning mb-4" @click="incrementar()">Contador {{ cont }}</button>

    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-hijo',
    props: [],
    mounted () {

    },
    data () {
      return {
        cont: 321
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
    background-color: #222;
    color: white;
  }

  hr {
    background-color: #bbb;
  }
</style>
