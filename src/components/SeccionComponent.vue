<template>
  <div class="contenedor-padre-seccion">
    <div
      v-bind:class="{'contenedorSeccion': seccion.status === 'activa', 'contenedorFav': seccion.status === 'favorito', 'contenedorInactiva': seccion.status === 'inactiva'}"
    >
      <div style="width: 100%">
        <div class="section-title">
          <div id="titleStar">
            <button id="star" @click="addFavorite">{{seccion.status === 'favorito' ? '🌟' : '☆'}}</button>
            <p id="cardTitle" v-if="!tituloDisplay">{{seccion.titulo}}</p>
            <input
              class="seccionTitulo"
              type="text"
              v-model="titleInput"
              :placeholder="titleInput"
              v-if="tituloDisplay"
            />
          </div>
          <div class="sectionButtons">
            <button id="editButton" @click="mostrarInputTitulo()">{{iconoBoton ? '✎' : '✓'}}</button>
            <button id="deleteButton" @click="deleteSeccion">{{seccion.status === 'inactiva' ? '♻️' : '🗑️'}}</button>
          </div>
        </div>
        <div v-for="(card, i) in seccion.items" :key="i">
          <TaskComponent :card="card" :idSeccion="seccion.id" />
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
      </div>-->
    </div>
  </div>
</template>

<script>
import TaskComponent from '../components/TaskComponent.vue'

export default {
  components: { TaskComponent },
    props: {
      id: {
        type: String,
        default: "",
      },
      seccion: {
          type: Object,
          default: () => {}
      }
    },
  data() {
    return {
      componentKey: 0,
      titleInput: '',
      tituloDisplay: false,
      iconoBoton: true,
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
    addFavorite(){
      this.$store.dispatch('addFavorite',this.seccion);
      //  this.iconoFav = !this.iconoFav
    }
  },
  watch: {
    titleInput() {
      this.$store.dispatch('changeTitle', { titulo: this.titleInput, id: this.id })
    },
    // statusWatcher(){
    //    this.$store.dispatch('changeFav', { titulo: this.iconoFav, id: this.id })
    // }
  },
  created() {
    this.titleInput = this.seccion.titulo
  },
};
</script>

<style scoped>
#star {
  background: transparent;
  border: none;
  margin-right: 10px;
  cursor: pointer;
}
#cardTitle {
  color: black;
  font-size: 20px;
  font-weight: bold;
}

#titleStar {
  display: flex;
  align-items: center;
}

.contenedorSeccion,
.contenedorFav,
.contenedorInactiva {
  display: flex;
  padding: 1rem;
  background: #d0d7da;
  border-radius: 5px;
  width: 350px;
  height: auto;
  margin: 10px;
}

.contenedorFav {
  border:5px solid #F2D602;
  box-sizing: border-box;
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  0% {border:0px solid #F2D602;}
  100% {border:5px solid #F2D602;}
}
@keyframes fadeout {
  100% {border:5px solid #F2D602;}
  0% {border:0px solid #F2D602;}
}
@keyframes fadeInRed {
  0% {border:0px solid red;}
  100% {border:5px solid red;}
}
@keyframes fadeOutRed {
  100% {border:5px solid red;}
  0% {border:0px solid red;}
}

.contenedorInactiva {
  border:5px solid red;
  box-sizing: border-box;
  animation: fadeInRed 0.3s;
  pointer-events: none;
  /* opacity: 0.5; */
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

.section-title button {
  font-size: larger;
  font-weight: bold;
  margin-left: 13px;
}

::placeholder {
  color: #808080;
}
</style>
