
<script setup lang="ts">
import { ref } from 'vue'
import ReservationForm from './components/ReservationForm.vue'
import TableGrid from './components/TableGrid.vue'
import ReservationList from './components/ReservationList.vue'
import type { Reservation } from './types'

const reservations = ref<Reservation[]>([])

const addReservation = (reservation: Reservation) => {
  reservations.value.push(reservation)
}
</script>

<template>
  <div class="restaurant-app">
    <h1>Restaurant Reservation System</h1>
    <div class="content">
      <ReservationForm @submit="addReservation" />
      <TableGrid />
      <ReservationList :reservations="reservations" />
    </div>
  </div>
</template>

<style lang="scss">
.restaurant-app {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 2rem;
  }

  .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
}
</style>
