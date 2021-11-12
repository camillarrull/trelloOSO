<template>
  <div>
    <div class="container">

        <div class="card">
            <div class="card-title">
          <h3>aloooo</h3>
          <button>x</button>
        </div>
        
        <p>no deberia andar asi</p>
        </div>

      <!-- <div class="card" v-for="(item, y) in seccion.items" :key="y">
        <div class="card-title">
          <h3>{{ item.titulo }}</h3>
          <button @click="deleteCard(i, y)">x</button>
        </div>

        <p>{{ item.descripcion }}</p>
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
    props: {
      id: {
        type: Number,
        default: 9999,
      },
    },
    data(){return {
      ventanita: false,
      ventanitaDelete: false,
      indiceSeleccionado: 0,
      inputTitulo: "",
      inputDescripcion: "",
    
          items: [
           
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

</style>
