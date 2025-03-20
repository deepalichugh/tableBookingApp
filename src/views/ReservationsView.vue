
<script setup lang="ts">
import { ref } from 'vue'
import type { Reservation } from '../types'
import ReservationList from '../components/ReservationList.vue'

const reservations = ref<Reservation[]>([])
</script>

<template>
  <div class="reservations-view">
    <h1>Current Reservations</h1>
    <ReservationList :reservations="reservations" />
  </div>
</template>

<style lang="scss">
.reservations-view {
  h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 2rem;
  }
}
</style>
