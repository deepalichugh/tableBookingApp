
<script setup lang="ts">
import { ref } from 'vue'
import type { Table } from '../types'

const tables = ref<Table[]>(Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  seats: Math.floor(Math.random() * 4) + 2,
  isAvailable: true
})))
</script>

<template>
  <div class="table-grid">
    <h2>Tables</h2>
    <div class="grid">
      <div 
        v-for="table in tables" 
        :key="table.id"
        class="table"
        :class="{ 'available': table.isAvailable }"
      >
        <span class="table-number">{{ table.id }}</span>
        <span class="seats">{{ table.seats }} seats</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.table-grid {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 1.5rem;
    color: #2c3e50;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 1rem;
  }

  .table {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s;

    &.available {
      border: 2px solid #42b983;
    }

    .table-number {
      display: block;
      font-size: 1.2rem;
      font-weight: bold;
      color: #2c3e50;
    }

    .seats {
      display: block;
      font-size: 0.9rem;
      color: #666;
    }
  }
}
</style>
