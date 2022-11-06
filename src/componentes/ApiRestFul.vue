<template>

  <section class="src-componentes-api-rest-ful">
     <div class="jumbotron">
      <h2>Componente ApiRestFul</h2>
      <hr>
      <hr>
      <br>

      <!-- <pre>{{ posts }}</pre> -->
      <!-- <pre>{{ usuarios }}</pre> -->

      <button class="btn btn-success mr-2 mb-3" @click="getUsuarios()">GET</button>
      <button class="btn btn-info mr-2 mb-3" @click="postUsuario()">POST</button>

      <div class="media alert alert-info" v-for="(usuario,index) in usuarios" :key="index">
          <img :src="usuario.foto" class="mr-3" width="400" :alt="usuario.nombre" :style="{'border-radius' : '20px'}" >
          <div class="media-body">
              <h5 class="mt-0"><u>Usuario {{ index + 1 }} - ID: {{ usuario.id }} - creado: {{ convertirFyH(usuario.createdAt) }}</u></h5>
              <br>
              <p>Nombre: <b>{{ usuario.nombre }}</b></p>
              <p>Email: <i>{{ usuario.email }}</i></p>
              <p>Numero: {{ usuario.numero }}</p>        

              <button class="btn btn-warning mr-2 mb-3" @click="putUsuario(usuario.id)">PUT</button>
              <button class="btn btn-danger mr-2 mb-3" @click="deleteUsuario(usuario.id)">DELETE</button>
          </div>
      </div>

    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-api-rest-ful',
    props: [],
    mounted () {
      //this.getPostXHRcb()
      //this.getPostFetch()
      //this.getPostAxios()
      
      //this.getUsuarios()
    },
    data () {
      return {
        //url: 'https://jsonplaceholder.typicode.com/posts',
        //url: 'https://5c8ef17a3e557700145e85c7.mockapi.io/posts',
        url: 'https://63680e7cedc85dbc84e13567.mockapi.io/usuarios',
        posts: [/* 
          {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipitsuscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
          },
          {
            userId: 1,
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
          },
          {
            userId: 1,
            id: 3,
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
          }          
         */],
         usuarios: [

         ]
      }
    },
    methods: {
      convertirFyH(fyhStr) {
        return new Date(fyhStr).toLocaleString()
      },

      /* ------------- Servicio Rest Ful ------------------ */
      /* GET */
      async getUsuarios() {
        try {
          let response = await this.axios(this.url)
          let respuesta = response.data
          //console.log(respuesta)
          this.usuarios = respuesta
        }
        catch(error) {
           console.error('ERROR en getUsuarios', error)
        }
      },

      /* POST */
      async postUsuario() {
        let usuarioNew = {
          nombre: "Juan",
          foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png",
          descripcion: "Usuario del sistema A",
          coordenadas: [
          "12.3456",
          "76.5432"
          ],
          comentarios: "hola como están!",
          direccion: "CABA 123",
        }

        try {
          let response = await this.axios.post(this.url, usuarioNew, { 'content-type' : 'application/json' })
          let usuario = response.data
          this.usuarios.push(usuario)
        }
        catch(error) {
           console.error('ERROR en postUsuario', error)
        }

      },

      /* PUT */
      async putUsuario(id) {
        console.log('putUsuario', id)

        let usuarioUpdate = {
          nombre: "Ana",
          foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/5_avatar-256.png",
          descripcion: "Usuaria del sistema B",
          coordenadas: [
          "45.6789",
          "98.7654"
          ],
          comentarios: "Muy bien!",
          direccion: "CABA 456",
        }

        try {
          let response = await this.axios.put(this.url+id, usuarioUpdate, { 'content-type' : 'application/json' })
          let usuario = response.data
          
          let index = this.usuarios.findIndex(user => user.id == usuario.id)
          this.usuarios.splice(index, 1, usuario)
        }
        catch(error) {
           console.error('ERROR en putUsuario', error)
        }
        
      },

      /* DELETE */
      async deleteUsuario(id) {
        console.log('deleteUsuario', id)

        try {
          let response = await this.axios.delete(this.url+id)
          let usuario = response.data
          
          let index = this.usuarios.findIndex(user => user.id == usuario.id)
          this.usuarios.splice(index, 1)
        }
        catch(error) {
           console.error('ERROR en deleteUsuario', error)
        }
      },


      /* ------------ XHR --------------- */
      getPostXHRcb() {
        const xhr = new XMLHttpRequest()
        xhr.open('get', this.url)
        xhr.addEventListener('load', () => {
          if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            console.log(respuesta)
            this.posts = respuesta
          }
        })
        xhr.send()
      },
      /* ------------ fetch --------------- */
      // https://developer.mozilla.org/es/docs/Web/API/Fetch_API
      // https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch

      async getPostFetch() {
        /* then / catch */
        /* fetch(this.url)
          .then(response => response.json())
          .then(respuesta => {
            console.log(respuesta)
            this.posts = respuesta
          })
          .catch(error => console.error(error)) */     

        /* async / await */
        try {
          let response = await fetch(this.url)
          let respuesta = await response.json()
          console.log(respuesta)
          this.posts = respuesta
        }
        catch(error) {
           console.error(error)
        }
      },
      async getPostAxios() {
        /* then / catch */
        /* this.axios(this.url)
          .then(response => {
            let respuesta = response.data
            console.log(respuesta)
            this.posts = respuesta
          })
          .catch(error => console.error(error)) */     

        /* async / await */
        try {
          let response = await this.axios(this.url)
          let respuesta = response.data
          console.log(respuesta)
          this.posts = respuesta
        }
        catch(error) {
           console.error(error)
        }
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    background-color: navy;
    color: white;
  }

  hr {
    background-color: #bbb;
  }

  pre {
    color: white;
  }
</style>
