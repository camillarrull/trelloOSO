<template>
  <div>
    <div class="section-cards">
      <div class="container">
        <!-- <button class="agregar-card" @click="agregarSeccion()">
          Crear Tarjeta
        </button>-->
        <button class="agregar-card" @click="agregarSeccion">Crear Tarjeta</button>
        <div v-for="(seccion, i) in sectionList" :key="i">
          <SeccionComponent :id="sectionList[i].id" />
        </div>
      </div>
    </div>
    <!-- v-for="(seccion, i) in secciones"
    :key="i"-->
  </div>
</template>

<script>
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
      secciones: [
        {
          titulo: "to do",
          items: [
            {
              titulo: "tarea 1",
              descripcion: "snjkldjns",
            },
            {
              titulo: "tarea 2",
              descripcion: "fsdsfdg",
            },
          ],
        },
        {
          titulo: "done",
          items: [
            { titulo: "tarea 3", descripcion: "snjkldjns" },
            {
              titulo: "tarea 4",
              descripcion: "fsdsfdg",
            },
          ],
        },
      ],
      indiceItemSeleccionado: 0,
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

    agregarItem() {
      console.log(this.inputTitulo, this.inputDescripcion);
      this.secciones[this.indiceSeleccionado].items.push({
        titulo: this.inputTitulo,
        descripcion: this.inputDescripcion,
      });
      this.inputTitulo = "";
      this.inputDescripcion = "";
      this.ventanita = false;
    },
    agregarSeccion() {
      this.$store.dispatch('agregarSeccion')
    },
    editarTitulo() {},
    deleteCard(indiceSeccion, indiceItem) {
      console.log(indiceSeccion, indiceItem);
      this.secciones[indiceSeccion].items.splice(indiceItem, 1);
    },
    deleteSeccion(indiceSeccion) {
      console.log(indiceSeccion);
      this.secciones.splice(indiceSeccion, 1);
      this.ventanitaDelete = false;
    },
  },
  computed: {
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
