
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData: this.getInitialData(),
      formDirty: this.getInitialData(),
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInitialData() {
      return {
        nombre: null,
        apellido: null,
        edad: null,
        email: null
      }
    },
    enviar() {
      //SPREAD OPERATOR
      // let obj = {a:1, b:2} -> ...obj -> a:1, b:2 -> { ...obj } -> {a:1, b:2} -> Clon
      console.log({...this.formData})

      this.formData = this.getInitialData()
      this.formDirty = this.getInitialData()
    }
  }
}


