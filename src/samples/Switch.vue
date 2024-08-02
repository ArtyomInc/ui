<script setup lang="ts">
import { Switch } from '@/components/ui/switch'
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <Switch v-model="value">Airplane Mode</Switch>
  {{ value }}
</template>
