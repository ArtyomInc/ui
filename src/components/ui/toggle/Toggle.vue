<script setup lang="ts">
import { type ToggleProps } from 'radix-vue'
import { type HTMLAttributes, ref } from 'vue'

import { type ToggleVariants } from '.'

const props = withDefaults(
  defineProps<
    ToggleProps & {
      modelValue: boolean
      class?: HTMLAttributes['class']
      variant?: ToggleVariants['variant']
      size?: ToggleVariants['size']
    }
  >(),
  {
    disabled: false,
    size: 'default',
    variant: 'default'
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const toggle = () => {
  state.value = !state.value
  emit('update:modelValue', state.value)
}

const state = ref(props.modelValue)
</script>

<template>
  <button
    class="relative inline-flex h-5 w-9 flex-shrink-0 rounded-full border-2 border-transparent bg-foreground transition-[background-color] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
    @click="toggle"
  >
    <span
      class="pointer-events-none relative left-0.5 top-0.5 inline-block h-4 w-4 rounded-full bg-default transition-[background-color_transform] duration-200 ease-in-out"
      :class="{ 'translate-x-0': !state, 'translate-x-4': state }"
    />
  </button>
</template>
