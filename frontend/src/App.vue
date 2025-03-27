
<script setup lang="ts">
import Header from './components/Header/Header.vue'
</script>

<template>
  <div class="restaurant-app">
    <Header />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="scss">
@use './main.scss' as *;

body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.restaurant-app {
  min-height: 100vh;
  background: #f5f5f5;

  main {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>
