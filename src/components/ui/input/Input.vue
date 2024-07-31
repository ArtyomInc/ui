<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue,
  passive: true
})
</script>

<template>
  <input
    v-model="modelValue"
    :class="
      cn(
        'flex h-9 w-full rounded-md border border-border bg-default px-3 py-1 text-sm shadow-sm transition-colors [border-style:solid] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-default-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        props.class
      )
    "
  />
</template>
