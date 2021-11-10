<template>
  <div>
    <div class="container">

        <div class="card">
            <div class="card-title">
          <h3>{{ items[0].titulo }}</h3>
          <button>x</button>
        </div>
        
        <p>{{ items[0].descripcion }}</p>
        </div>

      <!-- <div class="card" v-for="(item, y) in seccion.items" :key="y">
        <div class="card-title">
          <h3>{{ item.titulo }}</h3>
          <button @click="deleteCard(i, y)">x</button>
        </div>

        <p>{{ item.descripcion }}</p>
      </div>

      <div class="card card-add">
        <button @click="abrirVentana(i)">+</button>
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
      </div> -->
      
    </div>
  </div>
</template>

<script>
export default {
    data(){return {
      ventanita: false,
      ventanitaDelete: false,
      indiceSeleccionado: 0,
      inputTitulo: "",
      inputDescripcion: "",
    
          items: [
            {
              titulo: "tarea 1",
              descripcion: "snjkldjns",
            },
            // {
            //   titulo: "tarea 2",
            //   descripcion: "fsdsfdg",
            // },
          ],
      indiceItemSeleccionado: 0,
    };
  },
  methods: {
    abrirVentana(indiceSeccion) {
      this.ventanita = true;
      this.indiceSeleccionado = indiceSeccion;
    },

    deleteCard(indiceSeccion, indiceItem) {
      console.log(indiceSeccion, indiceItem);
      this.secciones[indiceSeccion].items.splice(indiceItem, 1);
    },
  },
};
</script>

<style scoped>
.card {
  background: white;
  padding: 1rem;
  margin-top: 0.5rem;
  border-radius: 5px;
  width: 100%;
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
</style>
