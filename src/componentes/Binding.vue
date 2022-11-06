<template>

  <section class="src-componentes-binding">
    <div class="jumbotron">
      <h2>Componente Binding</h2>
      <hr>
      <hr>
      <br>

      <!-- ------------------------------------------ -->
      <!--          DIRECTIVAS DATA BINDING           -->
      <!-- ------------------------------------------ -->
      <h4><u>Interpolación - Expresión / v-text / v-html</u></h4>
      <b>{{ 3 + 4 }}</b>
      <br><br>

      <div>{{ mensaje }}</div>
      <div v-text="mensaje"></div>
      <div v-html="mensaje"></div>
      <br>

      <div>{{ mensajeHTML }}</div>
      <div v-text="mensajeHTML"></div>
      <div v-html="mensajeHTML"></div>
      <br>

      <!-- ----------------------------------------- -->
      <h4><u>Property Binding / v-bind</u></h4>

      <input type="text" value="123"> <br>
      <input type="text" value="valor"> <br>
      <input type="text" v-bind:value="valor"> {{ valor }} <br>
      <input type="text" :value="valor"> {{ valor }} <br>
      <br>
      <hr>

      <!-- ----------------------------------------- -->
      <h4><u>Event Binding / v-on</u></h4>

      <button class="btn btn-success my-3 mr-2" v-on:click="contador++">Contar {{ contador }}</button>
      <button class="btn btn-warning my-3 mr-2" @click="contador2++">Contar {{ contador2 }}</button>
      <button class="btn btn-danger my-3" @click="incrementar()">Contar {{ getContador() }}</button>
      <hr>

      <!-- ----------------------------------------- -->
      <h4><u>Doble Data Binding / v-model</u></h4>
      <br>

      <h5>Manual</h5>
      <input type="text" :value="valor2" @input="actualizar($event)"> {{ valor2 }} <br>

      <h5>Automático</h5>
      <input type="text" v-model="valor3"> {{ valor3 }} <br>

    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-binding',
    props: [],
    mounted () {

    },
    data () {
      return {
        mensaje: 'Soy un mensaje',
        mensajeHTML: '<i>Soy un mensaje</i>',
        valor: 123,
        valor2: 321,
        valor3: 654,
        contador: 456,
        contador2: 789,
        contador3: 321,
      }
    },
    methods: {
        incrementar() {
            this.contador3++
        },
        getContador() {
            return this.contador3
        },
        actualizar(e) {
            //console.log('input',e)
            let valor = e.target.value
            console.log(valor)
            this.valor2 = valor
        },
     },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    background-color: blue;
    color: white;
  }

  hr {
    background-color: #bbb;
  }


</style>
