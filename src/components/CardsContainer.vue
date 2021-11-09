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
                  <button @click="editarTitulo(i)">✏️</button>
                  <button @click="abrirVentana(i)">+</button>
                </div>
              </div>
              <div class="card" v-for="(item, i) in seccion.items" :key="i">
                <h3>{{ item.titulo }}</h3>
                <p>{{ item.descripcion }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ventanita-container" v-if="ventanita">
      <div class="ventanita">
        <input type="text" v-model="inputTitulo" />
        <input type="text" v-model="inputDescripcion" />
        <button @click="ventanita = !ventanita">Cerrar</button>
        <button @click="agregarItem()">Guardar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ventanita: false,
      indiceSeleccionado: 0,
      inputTitulo: "",
      inputDescripcion: "",
      secciones: [],
    };
  },
  methods: {
    abrirVentana(indiceSeccion) {
      this.ventanita = true;
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
  width: 300px;
}
.section-title {
  display: flex;
  justify-content: space-between;
}
.section-title button,
.sectionButtons button {
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 20px;
  border: none;
}
.agregar-card {
  padding: 1rem;
  margin-bottom: 10px;
  border-radius: 5px;
  background: #ffffff;
  border: 1px solid #d0d7da;
}
.sectionButtons button:nth-child(1) {
  font-size: 18px;
  margin-right: 2px;
}
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
}
.ventanita input {
  background-color: white;
  border: 1px solid grey;
  border-radius: 2px;
}
.seccionTitulo {
  background: #d0d7da;
  border: none;
  font-size: 20px;
  font-weight: bold;
  width: 190px;
}
</style>
