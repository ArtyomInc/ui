<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const props = defineProps<{
  modelValue: number
  min?: number
  max?: number
  class?: string
  disabled?: false
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const value = ref(props.modelValue || 0)

function increment() {
  if (props.disabled || (props.max && value.value >= props.max)) return
  value.value++
  emits('update:modelValue', value.value)
}

function decrement() {
  if (props.disabled || (props.min && value.value <= props.min)) return
  value.value--
  emits('update:modelValue', value.value)
}

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement
  const cleanedValue = target.value.replace(/\D/g, '')
  target.value = cleanedValue
  value.value = parseInt(cleanedValue, 10) || 0
  emits('update:modelValue', value.value)
}

function handleKeyPress(event: KeyboardEvent) {
  if (!/[0-9]/.test(event.key)) {
    event.preventDefault()
  }
}

function handlePaste(event: ClipboardEvent) {
  const pastedData = event.clipboardData?.getData('text') || ''
  if (!/^\d+$/.test(pastedData)) {
    event.preventDefault()
  }
}
</script>

<template>
  <div
    :class="
      cn(
        'relative inline-flex h-9 items-center rounded-md border border-border bg-default px-3 py-1 text-default-foreground shadow-sm transition-colors [border-style:solid] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-default-foreground/50 focus-visible:outline-none',
        {
          'pointer-events-none opacity-50': props.disabled
        },
        props.class
      )
    "
  >
    <button
      class="absolute left-0 top-0 flex aspect-square h-9 items-center justify-center"
      tabindex="-1"
      @click="decrement"
    >
      <Icon icon="lucide:minus" />
    </button>
    <input
      v-model="value"
      :disabled="props.disabled"
      class="w-full truncate px-4 text-center"
      type="number"
      @input="handleInput"
      @keypress="handleKeyPress"
      @paste="handlePaste"
    />
    <button
      class="absolute right-0 top-0 flex aspect-square h-9 items-center justify-center"
      tabindex="-1"
      @click="increment"
    >
      <Icon icon="lucide:plus" />
    </button>
  </div>
</template>
