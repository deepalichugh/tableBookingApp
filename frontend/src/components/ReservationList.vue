
<script setup lang="ts">
import type { Reservation } from '../types'

defineProps<{
  reservations: Reservation[]
}>()
</script>

<template>
  <div class="reservation-list">
    <h2>Current Reservations</h2>
    <div v-if="reservations.length === 0" class="empty-state">
      No reservations yet
    </div>
    <div v-else class="list">
      <div v-for="reservation in reservations" :key="reservation.id" class="reservation-card">
        <h3>{{ reservation.name }}</h3>
        <p>Table: {{ reservation.tableNumber }}</p>
        <p>Date: {{ reservation.date }}</p>
        <p>Time: {{ reservation.time }}</p>
        <p>Guests: {{ reservation.guests }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.reservation-list {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 1.5rem;
    color: #2c3e50;
  }

  .empty-state {
    text-align: center;
    color: #666;
    padding: 2rem;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .reservation-card {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 4px;
    border-left: 4px solid #42b983;

    h3 {
      margin: 0 0 0.5rem;
      color: #2c3e50;
    }

    p {
      margin: 0.25rem 0;
      color: #666;
    }
  }
}
</style>
