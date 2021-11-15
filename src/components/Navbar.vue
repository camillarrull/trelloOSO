<template>
  <div class="navbar">
    <div class="container">
      <router-link to="/">
        <button class="nav-button">🏠</button>
      </router-link>
      <div class="navIconContainer">
        <router-link to="/favoritos">
        <button class="nav-button">🌟</button>
        </router-link>
        <router-link to="/papelera">
        <button class="nav-button">🗑️</button>
      </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // mounted() {
  //   this.$store.dispatch('incrementIndex')
  //   this.$store.dispatch('incrementIndex')
  //   this.$store.dispatch('incrementIndex')

  // }
};
</script>

<style scoped>
  .navIconContainer{
    width: 110px;
    display: flex;
    justify-content: space-around;
  }
</style>
