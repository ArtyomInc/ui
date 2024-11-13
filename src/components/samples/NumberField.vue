<script setup lang="ts">
import { NumberField } from '@/components/ui/number-field'
import { ref } from 'vue'

const value = ref(5)
</script>

<template>
  <NumberField v-model="value" :min="1" :max="10" class="w-32" />
  <code class="m-4">
    {{ value }}
  </code>
</template>
