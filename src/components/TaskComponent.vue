<template>
  <div>
    <div class="container">
        <div class="card">
              <div class="card-title">
                <p v-if="!tituloDisplay">{{this.thisTask.titulo}}</p>
                <input
                  class="seccionTitulo"
                  type="text"
                  v-model="titleInput"
                  :placeholder="titleInput"
                  v-if="tituloDisplay"
                />
                <div class="sectionButtons">
                     <button @click="mostrarInputTitulo()">{{iconoBoton ? '✎' : '✅'}}</button>
                  <button @click="deleteSeccion">x</button>
                </div>
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
  </div>
</template>

<script>
export default {
    props: {
      id: {
        type: Number,
        default: 9999,
      },
      idSeccion:{
          type: Number,
        default: 9999,
      }
    },
    data(){return {
    titleInput: '',
      tituloDisplay: false,
      iconoBoton:true,
      ventanita: false,
      ventanitaDelete: false,
      indiceSeleccionado: 0,
      inputTitulo: "",
      inputDescripcion: "",
      cardTitulo:" Card Title",
      cardInfo:"Card Info",
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
    mostrarInputTitulo(){
        this.tituloDisplay = !this.tituloDisplay
        this.iconoBoton = !this.iconoBoton
    },
  },
  computed:{
    thisTask() {
      let card;
      const items = this.$store.state.generalData.secciones[this.idSeccion].items;
      for(let i = 0; i < items.length; i++) {
        if(items[i].id === this.id) {
          card = items[i]
        }
      }
      return card;
    }
  }
};
</script>

<style scoped>

</style>
