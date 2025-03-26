
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { Restaurant } from '../types'

const route = useRoute()
const restaurantId = route.params.restaurantId as string

const restaurant = ref<Restaurant>({
  id: restaurantId,
  name: '',
  address: '',
  availableTimeSlots: []
})

onMounted(() => {
  // TODO: Fetch restaurant data using restaurantId
  console.log('Loading restaurant:', restaurantId)
})

const success = ref(false)

const saveRestaurant = () => {
  // TODO: Implement API call to save restaurant
  success.value = true
  setTimeout(() => success.value = false, 3000)
}
</script>

<template>
  <div class="dashboard">
    <h1>Restaurant Dashboard</h1>
    <div class="dashboard-form">
      <div class="form-group">
        <label>Restaurant Name</label>
        <input type="text" v-model="restaurant.name" placeholder="Enter restaurant name">
      </div>
      <div class="form-group">
        <label>Address</label>
        <input type="text" v-model="restaurant.address" placeholder="Enter restaurant address">
      </div>
      <div class="time-slots">
        <h3>Available Time Slots</h3>
        <button @click="restaurant.availableTimeSlots.push({ id: Date.now().toString(), time: '', availableSeats: 0 })">
          Add Time Slot
        </button>
        <div v-for="(slot, index) in restaurant.availableTimeSlots" :key="slot.id" class="slot-item">
          <input type="time" v-model="slot.time">
          <input type="number" v-model="slot.availableSeats" placeholder="Seats">
          <button @click="restaurant.availableTimeSlots.splice(index, 1)" class="remove-btn">Remove</button>
        </div>
      </div>
      <button @click="saveRestaurant" class="save-btn">Save Restaurant</button>
      <div v-if="success" class="success-message">Restaurant details saved successfully!</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard {
  padding: 2rem;

  h1 {
    color: #2c3e50;
    margin-bottom: 2rem;
  }

  .dashboard-form {
    max-width: 600px;
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);

    .form-group {
      margin-bottom: 1.5rem;

      label {
        display: block;
        margin-bottom: 0.5rem;
        color: #2c3e50;
      }

      input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ddd;
        border-radius: 4px;
      }
    }

    .time-slots {
      margin-top: 2rem;

      h3 {
        margin-bottom: 1rem;
      }

      .slot-item {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
        align-items: center;

        input {
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
      }
    }

    .save-btn {
      width: 100%;
      padding: 1rem;
      background: #d92626;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      margin-top: 2rem;

      &:hover {
        background: #b91f1f;
      }
    }

    .remove-btn {
      padding: 0.5rem;
      background: #ff4444;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .success-message {
      margin-top: 1rem;
      padding: 1rem;
      background: #4CAF50;
      color: white;
      border-radius: 4px;
      text-align: center;
    }
  }
}
</style>
