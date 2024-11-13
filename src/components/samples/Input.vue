<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <Input v-model="value" type="email" placeholder="Email" />
  {{ value }}
</template>
