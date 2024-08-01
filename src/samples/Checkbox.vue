<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <div class="flex items-center space-x-2">
    <Checkbox id="terms" v-model:checked="value" />
    <label
      for="terms"
      class="select-none text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Accept terms and conditions
    </label>
  </div>
  {{ value }}
</template>
