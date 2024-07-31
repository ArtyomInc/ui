<script setup lang="ts">
import { Toggle } from '@/components/ui/toggle'
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <Toggle v-model="value" />
  {{ value }}
</template>
