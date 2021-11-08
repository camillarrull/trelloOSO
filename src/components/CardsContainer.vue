<template>
  <div>
    <div class="section-cards">
      <div class="container">
        <h1>soy el card container</h1>
        <button @click="agregarSeccion()">Crear seccion tarjeta</button>
        <div class="contenedor-padre-seccion">
          <div
            class="contenedorSeccion"
            v-for="(seccion, i) in secciones"
            :key="i"
          >
            <div style="width: 100%">
              <div class="section-title">
                <h2>{{ seccion.titulo }}</h2>
                <button @click="abrirVentana(i)">+</button>
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
      secciones: [
        {
          titulo: "To Do",
          items: [
            { titulo: "Aprender vue", descripcion: "llamar a oso" },
            { titulo: "Hacer un proyectito", descripcion: "aprende vue" },
          ],
        },
        {
          titulo: "Doing",
          items: [
            {
              titulo: "En lo de oso",
              descripcion: "empezando de cero con vue",
            },
            {
              titulo: "haciendo imitacion de trello",
              descripcion: "trabajando en las cards",
            },
          ],
        },
      ],
    };
  },
  methods: {
    abrirVentana(indiceSeccion) {
      this.ventanita = true;
      this.indiceSeleccionado = indiceSeccion;
    },
    agregarItem() {
      /* const newItem = { titulo: "new Item", descripcion: "item de prueba" };
      this.secciones[indiceSeccion].items.push(newItem); */
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
    },
  },
};
</script>

<style scoped>
.section-cards {
  background-color: gray;
  min-height: 100vh;
  padding-top: 4rem;
}
.contenedorSeccion {
  display: flex;
  padding: 1rem;
  background: #999;
  border-radius: 5px;
  width: 300px;
}
.section-title {
  display: flex;
  justify-content: space-between;
}
.section-title button {
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 20px;
  border: none;
}

.contenedor-padre-seccion::v-deep h2 {
  margin-bottom: 0.5rem;
}
.contenedor-padre-seccion {
  display: flex;
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
</style>
