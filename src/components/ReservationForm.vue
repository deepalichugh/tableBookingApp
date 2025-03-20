
<script setup lang="ts">
import { ref } from 'vue'
import type { Reservation } from '../types'

const emit = defineEmits<{
  (e: 'submit', reservation: Reservation): void
}>()

const name = ref('')
const email = ref('')
const date = ref('')
const time = ref('')
const guests = ref(1)

const handleSubmit = () => {
  const reservation: Reservation = {
    id: Date.now().toString(),
    name: name.value,
    email: email.value,
    date: date.value,
    time: time.value,
    guests: guests.value,
    tableNumber: Math.floor(Math.random() * 10) + 1
  }
  emit('submit', reservation)
  resetForm()
}

const resetForm = () => {
  name.value = ''
  email.value = ''
  date.value = ''
  time.value = ''
  guests.value = 1
}
</script>

<template>
  <div class="reservation-form">
    <h2>Make a Reservation</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="date">Date:</label>
        <input type="date" id="date" v-model="date" required>
      </div>
      <div class="form-group">
        <label for="time">Time:</label>
        <input type="time" id="time" v-model="time" required>
      </div>
      <div class="form-group">
        <label for="guests">Number of Guests:</label>
        <input type="number" id="guests" v-model="guests" min="1" max="10" required>
      </div>
      <button type="submit">Make Reservation</button>
    </form>
  </div>
</template>

<style lang="scss">
.reservation-form {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 1.5rem;
    color: #2c3e50;
  }

  .form-group {
    margin-bottom: 1rem;

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #666;
    }

    input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
    }
  }

  button {
    width: 100%;
    padding: 0.75rem;
    background: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: #3aa876;
    }
  }
}
</style>
