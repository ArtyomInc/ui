<script setup lang="ts">
import { Toggle } from '@/components/ui/toggle'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <Toggle v-model="value"><Icon icon="lucide:italic" /></Toggle>
  {{ value }}
</template>
