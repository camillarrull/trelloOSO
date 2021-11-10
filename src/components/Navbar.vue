<template>
  <div class="navbar">
    <div class="container">
      <h1>hola soy la nav</h1>
      <p>HOLA</p>
      <router-link to="/">
        <button>HOME</button>
      </router-link>
      <router-link to="/favoritos">
        <button>FAVS</button>
      </router-link>
      <router-link to="/papelera">
        <button>PAPELERA</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('incrementIndex')
    this.$store.dispatch('incrementIndex')
    this.$store.dispatch('incrementIndex')

    console.log(this.$store.state.generalData)
  }
};
</script>

<style lang="scss" scoped></style>
