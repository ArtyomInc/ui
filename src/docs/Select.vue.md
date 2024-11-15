<script setup lang="ts">
import { Select } from '@/components/ui/select'
import { ref } from 'vue'

const value = ref('value1')
</script>

<template>
  <div class="flex items-center gap-2">
    <Select v-model="value">
      <option value="value1">Value 1</option>
      <option value="value2">Value 2</option>
      <option value="value3">Value 3</option>
    </Select>
    {{ value }}
  </div>
</template>
