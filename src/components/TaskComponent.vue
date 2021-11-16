<template>
  <div>
    <div class="container">
        <div class="card">
              <div class="card-title">
                <div class="taskContainer">
                    <div class="div-input">
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
                </div>
                <div class="sectionButtons">
                     <button @click="mostrarInputTitulo()">{{iconoBoton ? '✎' : '✓'}}</button>
                     <button @click="deleteTask">🗑️</button>
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
    },
    descripcionInput() {
      this.$store.dispatch('changeDescriptionCard', { titulo: this.descripcionInput, id: this.card.id, idSeccion:this.idSeccion })
    },
  },
//   created() {
//     this.descripcionInput = this.card.descripcion
//   },
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
.taskContainer{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.taskContainer button{
        transform: rotate(0deg);
    font-weight: bold;
}
.sectionButtons{
    margin-bottom:5px;
}
.div-input .seccionTitulo{
    background-color: white;
}

</style>
