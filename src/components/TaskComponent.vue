<template>
  <div>
    <div class="container">
        <div class="card">
              <div class="card-title">
                <div class="taskContainer">
                <p v-if="!tituloDisplay">{{card.titulo}}</p>
                <input
                  class="seccionTitulo"
                  type="text"
                  v-model="titleInput"
                  :placeholder="titleInput"
                  v-if="tituloDisplay"
                />
                <p v-if="!tituloDisplay">{{card.descripcion}}</p>
                <input
                  class="seccionTitulo"
                  type="text"
                  v-model="descripcionInput"
                  :placeholder="descripcionInput"
                  v-if="tituloDisplay"
                />
                </div>
                <div class="sectionButtons">
                     <button @click="mostrarInputTitulo()">{{iconoBoton ? '✎' : '✅'}}</button>
                     <button @click="deleteTask">x</button>
                     
                </div>
              </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    props: {
    idSeccion:{
          type: String,
        default: "",
      },
      card: {
          type: Object,
          default: () => {}
      }
    },
    data(){return {
     titleInput: 'title',
     descripcionInput:'descripcion',
      tituloDisplay: false,
      iconoBoton:true,
      ventanita: false,
      ventanitaDelete: false,
    };
  },
  methods: {
    abrirVentana(indiceSeccion) {
      this.ventanita = true;
      this.indiceSeleccionado = indiceSeccion;
    },

    deleteCard(indiceSeccion, indiceItem) {
      this.secciones[indiceSeccion].items.splice(indiceItem, 1);
    },
    mostrarInputTitulo(){
        this.tituloDisplay = !this.tituloDisplay
        this.iconoBoton = !this.iconoBoton
    },
    deleteTask() {
      this.$store.dispatch('deleteTask', {id:this.card.id, idSeccion:this.idSeccion})
    },
  },
  watch: {
    titleInput() {
      this.$store.dispatch('changeTitleCard', { titulo: this.titleInput, id: this.card.id, idSeccion:this.idSeccion })
    }
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
