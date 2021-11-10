<template>
  <div>
    <div class="section-cards">
      <div class="container">
        <h1>soy el card container</h1>
        <button class="agregar-card" @click="agregarSeccion()">
          Crear Tarjeta
        </button>
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
                  <!-- <button @click="editarTitulo(i)">✏️</button> -->
                  <button @click="abrirVentanaDelete(i)">x</button>
                </div>
              </div>
              <div class="card" v-for="(item, y) in seccion.items" :key="y">
                <div class="card-title">
                  <h3>{{ item.titulo }}</h3>

                  <button @click="deleteCard(i, y)">x</button>
                </div>

                <p>{{ item.descripcion }}</p>
              </div>
              <div class="card card-add">
                <button @click="abrirVentana(i)">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ventanita-container" v-if="ventanita">
      <div class="ventanita">
        <div class="ventanita-title">
          <h3>Agregar Tarea</h3>
          <button @click="ventanita = !ventanita">x</button>
        </div>
        <label>Titulo</label>
        <input type="text" v-model="inputTitulo" />
        <label>Descripcion</label>
        <input type="text" v-model="inputDescripcion" />

        <button class="button-primario" @click="agregarItem()">Guardar</button>
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
export default {
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
      const newSection = {
        titulo: "Nueva seccion",
        items: [],
      };
      this.secciones.push(newSection);
      console.log(this.secciones);
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
};
</script>

<style scoped>
.section-cards {
  background-color: #8bcde6;
  min-height: 100vh;
  padding-top: 4rem;
}
.contenedorSeccion {
  display: flex;
  padding: 1rem;
  background: #d0d7da;
  border-radius: 5px;
  width: 350px;
  overflow-y: scroll;
  height: 60vh;
}
.section-title {
  display: flex;
  justify-content: space-between;
}
.sectionButtons button {
  font-size: 1.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
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
.contenedor-padre-seccion::v-deep h2 {
  margin-bottom: 0.5rem;
}
.contenedor-padre-seccion {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.card {
  background: white;
  padding: 1rem;
  margin-top: 0.5rem;
  border-radius: 5px;
  width: 100%;
}
.card-add {
  color: grey;
  text-align: center;
}
.card-add button {
  font-size: 2rem;
  border: none;
  background: transparent;
  cursor: pointer;
}
.card-title {
  display: flex;
  justify-content: space-between;
}
.card-title button {
  font-size: 1.2rem;
  border: none;
  background: transparent;
  cursor: pointer;
}

.ventanita-container {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: grid;
  place-items: center;
}
.ventanita {
  border-radius: 5px;
  background-color: white;
  min-width: 400px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}
.ventanita-title {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  align-items: center;
}
.ventanita-title button {
  font-size: 1.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
}
.ventanita input {
  background-color: white;
  border: 1px solid grey;
  border-radius: 5px;
  height: 2rem;
  margin: 0 0 1rem 0;
}
.ventanita-delete {
  display: flex;
  flex-direction: column;
}
.ventanita-delete p {
  margin-bottom: 1rem;
}
.seccionTitulo {
  background: #d0d7da;
  border: none;
  font-size: 20px;
  font-weight: bold;
  width: 190px;
}
</style>
