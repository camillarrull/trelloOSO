<template>
  <div class="contenedor-padre-seccion">
          <div
            class="contenedorSeccion"
          >
            <div style="width: 100%">
              <div class="section-title">
                <p v-if="!tituloDisplay">{{this.thisSeccion.titulo}}</p>
                <input
                  class="seccionTitulo"
                  type="text"
                  v-model="titleInput"
                  :placeholder="titleInput"
                  v-if="tituloDisplay"
                />
                <div class="sectionButtons">
                     <button @click="mostrarInputTitulo()">{{iconoBoton ? '✎' : '✅'}}</button>
                  <button @click="deleteSeccion">x</button>
                 
                </div>
              </div>
              
           <div v-for="(card, i) in sectionList" :key="i">
                <TaskComponent :id="sectionList[i].id"/>
        </div> 
              <div class="card card-add">
                <button @click="agregarTask">+</button>
            </div>
            </div>
          </div>
          <div class="ventanita-container" v-if="ventanitaDelete">
       <!-- <div class="ventanita ventanita-delete">
        <div class="ventanita-title">
          <h3>Eliminar seccion</h3>
          <button @click="ventanitaDelete = !ventanitaDelete">x</button>
        </div>
        <p>Estas seguro de querer eliminar esta seccion?</p>
        <button class="button-primario" @click="deleteSeccion">
          ELIMINAR
        </button>
       </div> -->
    </div>
  </div>
</template>

<script>
import TaskComponent from '../components/TaskComponent.vue'

export default {
  components: { TaskComponent },
    props: {
      id: {
        type: Number,
        default: 9999,
      },
    },
  data() {
    return {
      componentKey: 0,
      titleInput: '',
      tituloDisplay: false,
      iconoBoton:true,
      ventanita: false,
      ventanitaDelete: false,
      indiceSeleccionado: 0,
      inputTitulo: "",
      inputDescripcion: "",
      indiceItemSeleccionado: 0,
    };
  },
  methods:{
    abrirVentanaDelete(indiceSeccion) {
      this.ventanitaDelete = true;
      this.indiceSeleccionado = indiceSeccion;
      console.log(indiceSeccion);
    },
    deleteSeccion() {
      this.$store.dispatch('deleteSeccion', this.id)
    },
    mostrarInputTitulo(){
        this.tituloDisplay = !this.tituloDisplay
        this.iconoBoton = !this.iconoBoton
    },
    agregarTask() {
      this.$store.dispatch('agregarTask',this.id)
    },
  },
  watch: {
    titleInput() {
      this.$store.dispatch('changeTitle', { titulo: this.titleInput, id: this.id })
    },
    thisSeccion() {
      this.componentKey = this.componentKey + 1;
    }
  },
  created() {
    this.titleInput = this.thisSeccion.titulo
  },
  computed: {
      sectionList() {
      return this.$store.state.generalData.secciones[this.id].items;
    },
    thisSeccion() {
      let seccion;
      const secciones = this.$store.state.generalData.secciones;
      for(let i = 0; i < secciones.length; i++) {
        if(secciones[i].id === this.id) {
          seccion = secciones[i]
        }
      }
      return seccion;
    }
  }
};
</script>

<style scoped>
.contenedorSeccion {
  display: flex;
  padding: 1rem;
  background: #d0d7da;
  border-radius: 5px;
  width: 350px;
  overflow-y: scroll;
  height: 60vh;
  margin: 10px;
}

.contenedor-padre-seccion::v-deep h2 {
  margin-bottom: 0.5rem;
}
.contenedor-padre-seccion {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.section-title {
  display: flex;
  justify-content: space-between;
}
.seccionTitulo {
  background: #d0d7da;
  border: none;
  font-size: 20px;
  font-weight: bold;
  width: 190px;
}
.sectionButtons button {
  font-size: 1.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
}

::placeholder {
  color: #808080;
}
</style>
