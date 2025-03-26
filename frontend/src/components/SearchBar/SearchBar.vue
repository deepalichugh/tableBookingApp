
<script setup lang="ts">
import { ref } from 'vue'

const searchDate = ref('')
const searchTime = ref('')
const searchPartySize = ref('2')
const searchQuery = ref('')

const emit = defineEmits(['search'])

const handleSearch = () => {
  emit('search', {
    date: searchDate.value,
    time: searchTime.value,
    partySize: searchPartySize.value,
    query: searchQuery.value
  })
}
</script>

<template>
  <div class="search-bar">
    <input 
      type="date" 
      v-model="searchDate"
      class="search-input"
    >
    <select v-model="searchTime" class="search-input">
      <option value="17:00">5:00 PM</option>
      <option value="18:00">6:00 PM</option>
      <option value="19:00">7:00 PM</option>
      <option value="20:00">8:00 PM</option>
      <option value="21:00">9:00 PM</option>
    </select>
    <select v-model="searchPartySize" class="search-input">
      <option v-for="n in 12" :key="n" :value="n">{{ n }} guests</option>
    </select>
    <input 
      type="text" 
      v-model="searchQuery"
      placeholder="Restaurant or Cuisine"
      class="search-input search-text"
    >
    <button @click="handleSearch" class="search-button">Find a Table</button>
  </div>
</template>

<style lang="scss" scoped>
.search-bar {
  display: flex;
  gap: 1rem;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);

  .search-input {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;

    &.search-text {
      min-width: 200px;
    }
  }

  .search-button {
    padding: 0.75rem 1.5rem;
    background: #d92626;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background: #b91f1f;
    }
  }
}
</style>
