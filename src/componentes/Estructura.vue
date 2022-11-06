<template>

  <section class="src-componentes-estructura">
    <div class="jumbotron">
      <h2>Componente Estructura</h2>
      <hr>
      <hr>
      <br>

      <!-- ------------------------------------------ -->
      <!--          DIRECTIVAS ESTRUCTURALES          -->
      <!-- ------------------------------------------ -->
      <h4><u>v-if - v-else-if / v-else</u></h4>

      <button class="btn btn-warning my-3 mr-2" @click="mostrar++">
          <!-- {{ mostrar? 'Ocultar':'Mostrar' }} -->
          Fase: {{ mostrar }}
      </button>
      <button class="btn btn-danger my-3" @click="mostrar=0">
          Reset
      </button>

      <p v-if="mostrar==0" class="alert alert-warning">
          0. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quidem deserunt, officiis a optio
          ratione sapiente quod magni vero id, et cum ipsa delectus repellat veniam asperiores quos recusandae
          nulla!
      </p>

      <p v-else-if="mostrar==1" class="alert alert-success">
          1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quidem deserunt, officiis a optio
          ratione sapiente quod magni vero id, et cum ipsa delectus repellat veniam asperiores quos recusandae
          nulla!
      </p>

      <p v-else-if="mostrar==2" class="alert alert-info">
          2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quidem deserunt, officiis a optio
          ratione sapiente quod magni vero id, et cum ipsa delectus repellat veniam asperiores quos recusandae
          nulla!
      </p>

      <p v-else class="alert alert-danger">
          Texto removido
      </p>
      <!-- <p v-if="!mostrar" class="alert alert-danger">
          Texto removido
      </p> -->


      <!-- --------------------------------------------------------------------------------------------------- -->
      <h4><u>v-show vs. v-if</u></h4>

      <button class="btn btn-warning my-3" @click="mostrar2=!mostrar2">{{ mostrar2? 'Ocultar': 'Mostrar'
          }}</button>
      <p v-if="mostrar2" class="alert alert-warning">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis unde nulla fugit harum expedita,
          deleniti voluptates asperiores repellendus necessitatibus quod numquam non aspernatur impedit blanditiis
          esse quibusdam facilis cumque?
      </p>
      <p v-else class="alert alert-danger">
          Texto removido
      </p>

      <br>

      <button class="btn btn-warning my-3" @click="mostrar3=!mostrar3">{{ mostrar3? 'Ocultar': 'Mostrar'
          }}</button>
      <p v-show="mostrar3" class="alert alert-warning">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis unde nulla fugit harum expedita,
          deleniti voluptates asperiores repellendus necessitatibus quod numquam non aspernatur impedit blanditiis
          esse quibusdam facilis cumque?
      </p>
      <p v-show="!mostrar3" class="alert alert-danger">
          Texto removido
      </p>
      <br>

      <!-- --------------------------------------------------------------------------------------------------- -->
      <h4><u>v-for</u></h4>

      <ul>
          <li v-for="(usuario,index) in usuarios" :key="index">
              <!-- {{ index + 1 }} - {{ usuario }} -->
              <!-- {{ (index + 1) + ' - ' + usuario }} -->
              {{ `${index + 1} - ${usuario}` }}
          </li>
          <!-- <li>{{ usuarios[0] }}</li>
          <li>{{ usuarios[1] }}</li>
          <li>{{ usuarios[2] }}</li>
          <li>{{ usuarios[3] }}</li> -->
      </ul>

      <br>

      <button class="btn btn-success my-3" @click="agregar()">Agregar alumno</button>

      <div v-if="alumnos.length">
          <ul>
              <li v-for="(alumno,index) in alumnos" :key="index">
                  <!-- {{ index + 1 }} - {{ alumno.nombre }} {{ alumno.apellido }} -->
                  <!-- {{ (index + 1) + ' - ' + alumno.nombre + ' ' + alumno.apellido }} -->
                  {{ `${index + 1} - ${alumno.nombre} ${alumno.apellido}` }}
              </li>
          </ul>
          <br>

          <div class="table-responsive">
              <table class="table table-dark">
                  <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Edad</th>
                      <th>Curso</th>
                      <th>Foto</th>
                  </tr>
                  <tr v-for="(alumno, index) in alumnos" :key="index">
                      <td>{{ index + 1 }}</td>
                      <td>{{ alumno.nombre }}</td>
                      <td>{{ alumno.apellido }}</td>
                      <td>{{ alumno.edad }}</td>
                      <td>{{ alumno.curso? 'Si':'No' }}</td>
                      <td>
                          <img :src="alumno.foto" width="50" :alt="alumno.nombre">
                      </td>
                  </tr>
              </table>

              <h4 class="alert alert-info">
                  <span v-if="calcularAlumnosCurso.ningun">Ningún alumno hizo el curso</span>
                  <span v-else-if="calcularAlumnosCurso.todos">Todos los alumnos hicieron el curso</span>
                  <span v-else>{{ calcularAlumnosCurso.cantidad }} de {{ calcularAlumnosCurso.total }} alumnos hicieron el curso.</span>
              </h4>
          </div>

          <br>

          <div class="media alert alert-info" v-for="(alumno,index) in alumnos" :key="index">
              <img :src="alumno.foto" class="mr-3" width="150" :alt="alumno.nombre">
              <div class="media-body">
                  <h5 class="mt-0"><u>Alumno {{ index + 1 }}</u></h5>
                  <br>
                  <p>Nombre: {{ alumno.nombre }} {{ alumno.apellido }}</p>
                  <p>Edad: <i>{{ alumno.edad }}</i></p>
                  Hizo el curso <input type="checkbox" v-model="alumno.curso">
                  <button class="btn btn-danger ml-3" @click="borrar(index)">Borrar</button>
              </div>
          </div>
      </div>
      <h3 v-else class="alert alert-warning">
          No se encontraron alumnos
      </h3>

    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-estructura',
    props: [],
    mounted () {

    },
    data () {
      return {
        mostrar: 0,
        mostrar2: true,
        mostrar3: true,
        usuarios: [
            'Pedro',
            'Juan',
            'Ana',
            'María'
        ],
        alumnos: [
            { nombre: 'Pedro',  apellido: 'Mei',    edad: 32,    curso: false,  foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-128.png' },
            { nombre: 'Juan',   apellido: 'Picos',  edad: 24,    curso: true,   foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-128.png' },
            { nombre: 'Ana',    apellido: 'Gomez',  edad: 54,    curso: true,   foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-128.png' },
            { nombre: 'María',  apellido: 'Lopez',  edad: 29,    curso: false,  foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-128.png' },
        ],
      }
    },
    methods: {
        borrar(index) {
            console.log('borrar',index)
            this.alumnos.splice(index,1)
        },
        agregar() {
            let alumno = { 
                nombre: 'Pablo',  
                apellido: 'Gonzalez',  
                edad: 32,    
                curso: false,  
                foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-128.png' 
            }

            this.alumnos.push(alumno)
        },
    },
    computed: {
        calcularAlumnosCurso() {
            /* let cant = 0
            this.alumnos.forEach( alumno => {
                if(alumno.curso) cant++
            }) */

            let cant = this.alumnos.filter(alumno => alumno.curso).length

            return {
                ningun: cant == 0,
                todos: cant == this.alumnos.length,
                cantidad: cant,
                total: this.alumnos.length
            }
        }
    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    background-color: crimson;
    color: white;
  }

  hr {
    background-color: #bbb;
  }
</style>
