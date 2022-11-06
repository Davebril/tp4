<template>

  <section class="src-componentes-atributos">
    <div class="jumbotron">
      <h2>Componente Atributos</h2>
      <hr>
      <hr>
      <br>

      <!-- ------------------------------------------ -->
      <!--          DIRECTIVAS DE ATRIBUTOS           -->
      <!-- ------------------------------------------ -->
      <h4><u>:style</u></h4>

      <button @click="estado1=!estado1" class="btn btn-info my-3">Cambiar fondo</button>

      <!-- <p style="background-color: green; color: white; padding: 10px; border-radius: 10px;"> -->
      <!-- <p :style="{ 'background-color': estado1?'green':'crimson', color: 'white', padding: '10px', borderRadius: '10px' }"> -->
      <p :style="getEstilos(estado1)">                
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque mollitia ex molestiae deserunt doloribus nihil quidem recusandae iure non iste debitis vel animi qui quisquam aperiam, optio distinctio dolores esse!
      </p>

      <hr>

      <!-- ----------------------------------------------------------------------------------------------- -->
      <h4><u>:class</u></h4>

      <button @click="estado2=!estado2" class="btn btn-info my-3">Cambiar fondo</button>

      <!-- <p class="bg-success text-white p-2 rounded"> -->
      <!-- <p :class="{ 'bg-success': estado2, 'bg-danger': !estado2, 'text-white': true, 'p-2': true, rounded : true }"> -->
      <!-- <p :class="[ {'bg-success': estado2, 'bg-danger': !estado2}, 'text-white', 'p-2', 'rounded' ]"> -->                
      <p :class="getClass(estado2)">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque mollitia ex molestiae deserunt doloribus nihil quidem recusandae iure non iste debitis vel animi qui quisquam aperiam, optio distinctio dolores esse!
      </p>

    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-atributos',
    props: [],
    mounted () {

    },
    data () {
      return {
        estado1: true,
        estado2: true
      }
    },
    methods: {
        getEstilos(estado) {
            return { 
                'background-color': estado? 'green':'crimson', 
                color: 'white', 
                padding: '10px', 
                borderRadius: '10px' 
            }
        },
        getClass(estado) {
            return [ 
                {'bg-success': estado, 'bg-danger': !estado},
                'text-white', 
                'p-2', 
                'rounded' 
            ]
        }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    background-color: blueviolet;
    color: white;
  }

  hr {
    background-color: #bbb;
  }
</style>
