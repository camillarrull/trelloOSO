<template>
  <div>
    <div class="section-cards">
      <div class="container">
        <button class="agregar-card" @click="agregarSeccion">Crear Tarjeta</button>
      </div>
      <div class="container">
        <transition-group name="fade">
          <div v-for="(seccion, i) in secciones" :key="i">
            <div v-if="seccion.status !== 'inactiva'">
              <SeccionComponent :seccion="seccion" :id="seccion.id" />
            </div>
          </div>
        </transition-group>
      </div>
    </div>
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
      this.ventanitaDelete = true;
      this.indiceSeleccionado = indiceSeccion;
    },

    agregarSeccion() {
      this.$store.dispatch('agregarSeccion')
    }
  },
  computed: {
      ...mapState({
          secciones: (state) => state.generalData.secciones
      }),
  },
};
</script>

<style scoped>
.section-cards {
  background-color: #8bcde6;
  min-height: 100vh;
  padding-top: 1rem;
}

.agregar-card {
  padding: 1rem;
  margin: 10px;
  border-radius: 5px;
  background: #ffffff;
  border: 1px solid #d0d7da;
  font-size: 20px;
  cursor: pointer;
}

.agregar-card:hover {
  background: #d0d7da;
}

.container span {
  display: flex;
  flex-flow: wrap;
}

</style>
