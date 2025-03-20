
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import type { Restaurant, TimeSlot } from '../types'
import ReservationForm from '../components/ReservationForm.vue'

const route = useRoute()
const restaurantId = route.params.id as string

const restaurant = ref<Restaurant>({
  id: restaurantId,
  name: 'Italian Bistro',
  address: '123 Main St',
  availableTimeSlots: [
    { id: '1', time: '18:00', availableSeats: 4 },
    { id: '2', time: '19:00', availableSeats: 6 },
    { id: '3', time: '20:00', availableSeats: 2 },
  ]
})

const selectedSlot = ref<TimeSlot | null>(null)

const handleSlotSelect = (slot: TimeSlot) => {
  selectedSlot.value = slot
}
</script>

<template>
  <div class="restaurant-view">
    <h1>{{ restaurant.name }}</h1>
    <p class="address">{{ restaurant.address }}</p>
    
    <div class="time-slots">
      <h2>Available Time Slots</h2>
      <div class="slot-grid">
        <div 
          v-for="slot in restaurant.availableTimeSlots" 
          :key="slot.id"
          class="slot-card"
          :class="{ selected: selectedSlot?.id === slot.id }"
          @click="handleSlotSelect(slot)"
        >
          <h3>{{ slot.time }}</h3>
          <p>{{ slot.availableSeats }} seats available</p>
        </div>
      </div>
    </div>

    <ReservationForm 
      v-if="selectedSlot"
      :restaurant-id="restaurantId"
      :selected-time="selectedSlot.time"
      :max-guests="selectedSlot.availableSeats"
    />
  </div>
</template>

<style lang="scss">
.restaurant-view {
  h1 {
    text-align: center;
    color: #2c3e50;
  }

  .address {
    text-align: center;
    color: #666;
    margin-bottom: 2rem;
  }

  .time-slots {
    margin: 2rem 0;

    h2 {
      margin-bottom: 1rem;
    }
  }

  .slot-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  .slot-card {
    background: #fff;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      transform: translateY(-2px);
    }

    &.selected {
      border: 2px solid #42b983;
    }

    h3 {
      margin: 0;
      color: #2c3e50;
    }

    p {
      margin: 0.5rem 0 0;
      color: #666;
    }
  }
}
</style>
