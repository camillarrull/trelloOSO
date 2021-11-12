<template>
  <div>
    <div class="section-cards">
        <button class="agregar-card" @click="agregarSeccion">Crear Tarjeta</button>
      <div class="container">
        <div v-for="(seccion, i) in sectionList" :key="i">
          <SeccionComponent :seccion="seccion" :id="seccion.id" />
        </div>
      </div>
    </div>
    <!-- v-for="(seccion, i) in secciones"
    :key="i"-->
  </div>
</template>

<script>
import { mapState } from "vuex"
import SeccionComponent from '../components/SeccionComponent.vue';

export default {
  components: { SeccionComponent },
  data() {
    return {
      ventanita: false,
      ventanitaDelete: false,
      indiceSeleccionado: 0,
      inputTitulo: "",
      inputDescripcion: "",
    };
  },
  methods: {
    abrirVentana(indiceSeccion) {
      this.ventanita = true;
      this.indiceSeleccionado = indiceSeccion;
    },
    abrirVentanaDelete(indiceSeccion) {
      console.log("entro");
      this.ventanitaDelete = true;
      this.indiceSeleccionado = indiceSeccion;
    },

    agregarSeccion() {
      this.$store.dispatch('agregarSeccion')
    }
  },
  computed: {
      ...mapState({
          secciones: ({secciones}) => secciones,
      }),
    sectionList() {
      return this.$store.state.generalData.secciones;
    }
  }
};
</script>

<style scoped>
.section-cards {
  background-color: #8bcde6;
  min-height: 100vh;
  padding-top: 4rem;
}

.agregar-card {
  padding: 1rem;
  margin-bottom: 10px;
  border-radius: 5px;
  background: #ffffff;
  border: 1px solid #d0d7da;
  font-size: 20px;
  cursor: pointer;
}
.agregar-card:hover {
  background: #d0d7da;
}

/* .sectionButtons button:nth-child(1) {
  font-size: 18px;
  margin-right: 2px;
} */
/* .contenedor-padre-seccion::v-deep h2 {
  margin-bottom: 0.5rem;
}
.contenedor-padre-seccion {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
} */
</style>
