<script setup lang="ts">
import { Slider } from '@/components/ui/slider'
import { ref } from 'vue'

const monoValue = ref([5])
const doubleValue = ref([25, 75])
</script>

<template>
  <h4>Mono value</h4>
  <Slider v-model="monoValue" :max="10" :step="0.1" />
  {{ monoValue }}
  <h4>Mono value</h4>
  <Slider v-model="doubleValue" :max="100" :step="1" />
  {{ doubleValue }}
</template>
