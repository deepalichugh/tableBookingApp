<template>
  <div class="admin-view">
    <h1>Restaurant Management</h1>
    
    <div class="restaurant-form">
      <h2>{{ isEditing ? 'Edit Restaurant' : 'Add New Restaurant' }}</h2>
      <form @submit.prevent="saveRestaurant">
        <div class="form-group">
          <label>Name:</label>
          <input
            required
            type="text" 
            :value="isEditing ? editingRestaurant?.name : newRestaurant.name"
            @input="(e: Event) => isEditing ? (editingRestaurant!.name = (e.target as HTMLInputElement).value) : (newRestaurant.name = (e.target as HTMLInputElement).value)"
          />
        </div>
        <div class="form-group">
          <label>Address:</label>
          <input
            required
            type="text" 
            :value="isEditing ? editingRestaurant?.address : newRestaurant.address"
            @input="(e: Event) => isEditing ? (editingRestaurant!.address = (e.target as HTMLInputElement).value) : (newRestaurant.address = (e.target as HTMLInputElement).value)"
          />
        </div>
        <div class="form-group">
          <label>Website:</label>
          <input
            required
            type="text" 
            :value="isEditing ? editingRestaurant?.url : newRestaurant.url"
            @input="(e: Event) => isEditing ? (editingRestaurant!.url = (e.target as HTMLInputElement).value) : (newRestaurant.url = (e.target as HTMLInputElement).value)"
          />
        </div>
        <div class="form-group">
          <label>Phone:</label>
          <input 
            required
            type="text" 
            :value="isEditing ? editingRestaurant?.phone : newRestaurant.phone"
            @input="(e: Event) => isEditing ? (editingRestaurant!.phone = (e.target as HTMLInputElement).value) : (newRestaurant.phone = (e.target as HTMLInputElement).value)"
          />
        </div>
        <div class="form-group">
          <label>Cuisine:</label>
          <input 
            required
            type="text" 
            :value="isEditing ? editingRestaurant?.cuisine : newRestaurant.cuisine"
            @input="(e: Event) => isEditing ? (editingRestaurant!.cuisine = (e.target as HTMLInputElement).value) : (newRestaurant.cuisine = (e.target as HTMLInputElement).value)"
          />
        </div>
        <div class="form-group">
          <label>Timings</label>
          <span
            v-for="(val, index) in timingTypes"
            :index="`${val}-${index}`"
            class="checkbox-input"
          >
            <input
              type="checkbox"
              :value="val"
              :id="`input-${index}`"
              @click="selectOption(index)"
            />
            {{ val }}
          </span>
        </div>        
        <div  v-if="selected.length" class="form-group">
          <label>Add Timings:</label>
          <span
            v-for="(val, index) in selected"
            :index="`${val}-${index}`"
          >
            <b>Type: {{ timingTypes[val] }}</b>
            <br>
            Start Time:
            <input
              v-model="start"
              required
              type="text"
            />
            Close Time:
            <input
              v-model="close"
              required
              type="text"
            />
            <button
              type="button"
              @click.prevent="
                generateSlots(start, close);
                newRestaurant.availableTimings?.push({
                  type: timingTypes[val],
                  open: start,
                  close: close,
                  slots: generatedSlots,
            })">
              <i class="material-icons">Add Timing</i>
            </button>
            <br>
            <span v-for="(slot, index) in generatedSlots" :key="`${slot}-${index}`">
              <button>
                {{ slot }}
              </button>
          </span>
          </span>
        </div>
        <div class="form-actions">
          <button type="submit">{{ isEditing ? 'Update' : 'Add' }} Restaurant</button>
          <button type="button" @click="resetForm" class="cancel">Cancel</button>
        </div>
      </form>
    </div>

    <div class="restaurants-list">
      <h2>Restaurants</h2>
      <div class="restaurant-cards">
        <div v-for="restaurant in restaurants" :key="restaurant.id" class="restaurant-card">
          <h3>{{ restaurant.name }}</h3>
          <p>{{ restaurant.address }}</p>
          <div class="card-actions">
            <button @click="editRestaurant(restaurant)">Edit</button>
            <button @click="deleteRestaurant(restaurant.id)" class="delete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Restaurant } from '../types'
import { addNewRestaurant } from '../../service/api/restaurants.api'

const restaurants = ref<Restaurant[]>([])
const editingRestaurant = ref<Restaurant | null>(null)
const isEditing = ref(false)
const start = ref();
const close = ref();

const newRestaurant = ref<Restaurant>({
  id: '',
  name: '',
  address: '',
  url: '',
  phone: '',
  cuisine: '',
  availableTimings: [],
})

const generatedSlots = ref<Array<string>>([]);

const timingTypes = ['All Day', 'Breakfast', 'Lunch', 'Dinner'];

function generateSlots(startHour: number, endHour: number): string[] {
  console.log(startHour, endHour);
  const slots: string[] = [];
  const formatTime = (hour: number, minute: number): string => {
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 === 0 ? 12 : hour % 12;
    const minStr = minute.toString().padStart(2, '0');
    return `${hour12.toString().padStart(2, '0')}:${minStr} ${ampm}`;
  };
  console.log(formatTime(startHour, endHour));

  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const start = formatTime(hour, minute);
      const endMinute = minute + 15;
      let endHourAdjusted = hour;
      let endMinuteAdjusted = endMinute;
      if (endMinute >= 60) {
        endMinuteAdjusted = 0;
        endHourAdjusted = hour + 1;
      }
      const end = formatTime(endHourAdjusted, endMinuteAdjusted);
      slots.push(start);
      console.log(slots);
    }
  }

  generatedSlots.value = slots;

  return slots;
}


const saveRestaurant = async () => {
  if (isEditing.value && editingRestaurant.value) {
    const index = restaurants.value.findIndex(r => r.id === editingRestaurant.value?.id)
    if (index !== -1) {
      restaurants.value[index] = { ...editingRestaurant.value }
    }
  } else {
    // const id = Date.now().toString()
    // restaurants.value.push({ ...newRestaurant.value, id })
    // const updatedDate = (new Date(date.value)).toDateString();
    console.log(newRestaurant.value.availableTimings);
    await addNewRestaurant(
      {
        name: newRestaurant.value.name,
        address: newRestaurant.value.address,
        url: newRestaurant.value.url,
        phone: newRestaurant.value.phone,
        cuisine: newRestaurant.value.cuisine,
        availableTimings: newRestaurant.value.availableTimings ?? [],
      }
    );
  }
  resetForm()
}

const selected = ref<Array<number>>([]);

function selectOption(index: number) {
  start.value = '';
  close.value = '';
  const val = document.getElementById(`input-${index}`) as HTMLInputElement;
  if (!selected.value.includes(index)) {
    selected.value.push(index);
  } else {
    selected.value.splice(selected.value.indexOf(index), 1);
  }
}

const editRestaurant = (restaurant: Restaurant) => {
  editingRestaurant.value = { ...restaurant }
  isEditing.value = true
}

const deleteRestaurant = (id: string) => {
  restaurants.value = restaurants.value.filter(r => r.id !== id)
}

const resetForm = () => {
  editingRestaurant.value = null
  isEditing.value = false
  newRestaurant.value.name = '';
    newRestaurant.value.address = '';
    newRestaurant.value.url = '';
    newRestaurant.value.phone = '';
    newRestaurant.value.cuisine = '';
    newRestaurant.value.availableTimings = [];
}
</script>

<style lang="scss" scoped>
.admin-view {
  padding: 2rem;
  color: #666;

  h1 {
    margin-bottom: 2rem;
    color: #2c3e50;
  }

  .restaurant-form {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-bottom: 2rem;

    .form-group {
      margin-bottom: 1rem;

      label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
      }

      input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ddd;
        border-radius: 4px;
      }

      .checkbox-input {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        input[type="checkbox"] {
          height: 12px;
          width: 12px;
        }
      }
    }
  }

  .form-actions {
    display: flex;
    gap: 1rem;
    
    button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      background-color: #77b0e9;
      color: #FFF;

      &:hover {
        background-color: #5b92c9;
      }

      &.cancel {
        background: #666;
        color: white;
      }
    }
  }

  .restaurants-list {
    .restaurant-cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
    }

    .restaurant-card {
      background: white;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);

      h3 {
        margin: 0 0 0.5rem;
      }

      p {
        color: #666;
        margin: 0 0 1rem;
      }

      .card-actions {
        display: flex;
        gap: 0.5rem;

        button {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;

          &:hover {
            background: #5386b9;
          }

          &.delete {
            background: #dc3545;
            color: white;
          }
        }
      }
    }
  }
}
</style>
