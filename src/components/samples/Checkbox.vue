<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <Checkbox v-model="value">Accept terms and conditions</Checkbox>
  {{ value }}
</template>
