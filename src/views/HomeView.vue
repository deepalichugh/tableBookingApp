
<script setup lang="ts">
import type { Restaurant } from '../types'
import { ref } from 'vue'

const restaurants = ref<Restaurant[]>([
  {
    id: '1',
    name: 'Italian Bistro',
    address: '123 Main St',
    availableTimeSlots: [
      { id: '1', time: '18:00', availableSeats: 4 },
      { id: '2', time: '19:00', availableSeats: 6 },
    ]
  },
  {
    id: '2',
    name: 'Sushi House',
    address: '456 Oak Ave',
    availableTimeSlots: [
      { id: '3', time: '18:30', availableSeats: 2 },
      { id: '4', time: '20:00', availableSeats: 8 },
    ]
  }
])
</script>

<template>
  <div class="home">
    <h1>Restaurant Reservation System</h1>
    <div class="restaurant-grid">
      <router-link 
        v-for="restaurant in restaurants" 
        :key="restaurant.id"
        :to="`/restaurant/${restaurant.id}`"
        class="restaurant-card"
      >
        <h2>{{ restaurant.name }}</h2>
        <p>{{ restaurant.address }}</p>
        <p>Available slots: {{ restaurant.availableTimeSlots.length }}</p>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.home {
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .restaurant-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .restaurant-card {
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-5px);
    }

    h2 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    p {
      color: #666;
    }
  }
}
</style>
