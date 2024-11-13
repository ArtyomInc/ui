<script setup lang="ts">
import { TextArea } from '@/components/ui/text-area'
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <TextArea v-model="value" placeholder="Type your message here." />
</template>
