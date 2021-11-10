<template>
  <div class="contenedor-padre-seccion">
          <div
            class="contenedorSeccion"
            v-for="(seccion, i) in secciones"
            :key="i"
          >
            <div style="width: 100%">
              <div class="section-title">
                <input
                  class="seccionTitulo"
                  type="text"
                  v-model="seccion.titulo"
                />
                <div class="sectionButtons">
                  <button @click="abrirVentanaDelete(i)">x</button>
                </div>
              </div>
              <TaskComponent/>
            </div>
          </div>
           <div class="ventanita-container" v-if="ventanitaDelete">
       <div class="ventanita ventanita-delete">
        <div class="ventanita-title">
          <h3>Eliminar seccion</h3>
          <button @click="ventanitaDelete = !ventanitaDelete">x</button>
        </div>
        <p>Estas seguro de querer eliminar esta seccion?</p>
        <button class="button-primario" @click="deleteSeccion(i)">
          ELIMINAR
        </button>
      </div>
    </div>
        </div>
</template>

<script>
import TaskComponent from '../components/TaskComponent.vue'

export default {
  components: { TaskComponent },
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
    methods:{
    abrirVentanaDelete(indiceSeccion) {
      console.log("entro");
      this.ventanitaDelete = true;
      this.indiceSeleccionado = indiceSeccion;
    },
    deleteSeccion(indiceSeccion) {
      console.log(indiceSeccion);
      this.secciones.splice(indiceSeccion, 1);
      this.ventanitaDelete = false;
    },
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
</style>
