<script setup lang="ts">
import { cn } from '@/lib/utils'
import { type HTMLAttributes } from 'vue'

const props = defineProps<{ value?: number; class?: HTMLAttributes['class'] }>()
</script>

<template>
  <div :class="cn('relative h-2 overflow-hidden rounded-full bg-primary/10', props.class)">
    <div
      class="absolute left-0 top-0 h-full bg-primary transition-[width] ease-in-out"
      :style="{ width: `${props.value}%` }"
      :class="{ 'w-full animate-[progress-undefined_1s_ease-in-out_infinite]': props.value === undefined }"
    />
  </div>
</template>
