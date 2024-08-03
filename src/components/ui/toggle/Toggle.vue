<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ref } from 'vue'

const props = defineProps<{
  modelValue: boolean
  class?: string
  disabled?: false
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const value = ref(props.modelValue)

function toggle() {
  if (props.disabled) return
  value.value = !value.value
  emits('update:modelValue', value.value)
}
</script>

<template>
  <button
    :class="
      cn(
        'inline-flex h-8 w-8 items-center justify-center rounded-md bg-default text-sm font-medium transition-colors hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
        { 'bg-foreground/10 text-foreground hover:bg-foreground/10': value },
        props.class
      )
    "
    :disabled="props.disabled"
    @click="toggle"
  >
    <slot />
  </button>
</template>
