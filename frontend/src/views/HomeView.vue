
<script setup lang="ts">
import SearchBar from '../components/SearchBar/SearchBar.vue'
import { ref } from 'vue'
import type { Restaurant } from '../types'

const restaurants = ref<Restaurant[]>([
  {
    id: '1',
    name: 'The Italian Place',
    address: '123 Main St, City',
    availableTimeSlots: [
      { id: '1', time: '18:00', availableSeats: 4 },
      { id: '2', time: '19:00', availableSeats: 2 }
    ]
  },
  {
    id: '2',
    name: 'Sushi Master',
    address: '456 Oak St, City',
    availableTimeSlots: [
      { id: '3', time: '19:00', availableSeats: 6 },
      { id: '4', time: '20:00', availableSeats: 4 }
    ]
  }
])

const handleSearch = (searchParams: any) => {
  console.log('Search params:', searchParams)
  // Implement search logic here
}
</script>

<template>
  <div class="home">
    <div class="hero">
      <h1>Find and book the best restaurants</h1>
      <SearchBar @search="handleSearch" />
    </div>
    <div class="featured">
      <h2>Featured Restaurants</h2>
      <div class="restaurant-grid">
        <router-link 
          v-for="restaurant in restaurants" 
          :key="restaurant.id"
          :to="`/restaurant/${restaurant.id}`"
          class="restaurant-card"
        >
          <div class="restaurant-image"></div>
          <div class="restaurant-info">
            <h3>{{ restaurant.name }}</h3>
            <p>{{ restaurant.address }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  .hero {
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4') center/cover;
    padding: 4rem 2rem;
    text-align: center;
    color: white;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }
  }

  .featured {
    padding: 2rem;

    h2 {
      margin-bottom: 2rem;
      font-size: 1.8rem;
    }

    .restaurant-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
    }

    .restaurant-card {
      text-decoration: none;
      color: inherit;
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: transform 0.2s;

      &:hover {
        transform: translateY(-4px);
      }

      .restaurant-image {
        height: 200px;
        background: #eee;
      }

      .restaurant-info {
        padding: 1rem;

        h3 {
          margin: 0 0 0.5rem;
          font-size: 1.2rem;
        }

        p {
          color: #666;
          margin: 0;
        }
      }
    }
  }
}
</style>
