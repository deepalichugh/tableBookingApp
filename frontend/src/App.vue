
<script setup lang="ts">
</script>

<template>
  <div class="restaurant-app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/reservations">Current Reservations</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
.restaurant-app {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  nav {
    margin-bottom: 2rem;
    text-align: center;
    
    a {
      color: #2c3e50;
      text-decoration: none;
      margin: 0 1rem;
      
      &.router-link-active {
        color: #42b983;
      }
    }
  }
}
</style>
