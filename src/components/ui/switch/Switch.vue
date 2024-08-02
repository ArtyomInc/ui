<script setup lang="ts">
import { cn } from '@/lib/utils'
import { type HTMLAttributes, ref } from 'vue'

const props = defineProps<{
  modelValue: boolean
  class?: HTMLAttributes['class']
  disabled?: boolean
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const value = ref(props.modelValue)

function toggle() {
  if (props.disabled) return
  value.value = !value.value
  emit('update:modelValue', value.value)
}
</script>

<template>
  <div
    class="flex cursor-pointer items-center gap-1.5"
    :class="{ 'pointer-events-none opacity-50': props.disabled }"
    @click="toggle"
  >
    <button
      :class="
        cn(
          'pointer-events-none block w-9 rounded-full bg-default p-0.5 ring-ring transition-transform focus:ring focus-visible:outline-none',
          {
            'bg-primary': value,
            'bg-primary/20': !value
          },
          props.class
        )
      "
    >
      <span
        class="block h-4 w-4 rounded-full bg-default transition-transform"
        :class="{
          'translate-x-4 shadow-lg ring-0': value,
          'translate-x-0 shadow-lg ring-0': !value
        }"
      />
    </button>
    <slot />
  </div>
</template>
