
<script setup lang="ts">
import { ref } from 'vue'

const isLoggedIn = ref(false)
const username = ref('')

const login = () => {
  // Mock login - replace with real auth
  isLoggedIn.value = true
  username.value = 'User'
}

const logout = () => {
  isLoggedIn.value = false
  username.value = ''
}
</script>

<template>
  <header class="header">
    <div class="logo">
      <router-link to="/">Book your table</router-link>
    </div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/reservations">Reservations</router-link>
      <router-link v-if="isLoggedIn" :to="`/dashboard/1`">Restaurant Dashboard</router-link>
      <router-link v-if="isLoggedIn" to="/admin">Admin</router-link>
    </nav>
    <div class="auth">
      <template v-if="isLoggedIn">
        <span>{{ username }}</span>
        <button @click="logout">Logout</button>
      </template>
      <button v-else @click="login">Login</button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #fff;
  border-bottom: 1px solid #eee;

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    
    a {
      color: #d92626;
      text-decoration: none;
      font-size: 1.8rem;
    }
  }

  nav {
    a {
      margin: 0 1rem;
      color: #2c3e50;
      text-decoration: none;
      
      &.router-link-active {
        color: #42b983;
      }
    }
  }

  .auth {
    button {
      padding: 0.5rem 1rem;
      margin-left: 1rem;
      background: #42b983;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      
      &:hover {
        background: #3aa876;
      }
    }

    span {
      color: #2c3e50;
    }
  }
}
</style>
