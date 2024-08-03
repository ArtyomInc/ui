<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/vue'
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
          'flex h-6 w-6 shrink-0 items-center justify-center rounded border border-transparent bg-primary text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          {
            'border-border bg-transparent': !value
          },
          props.class
        )
      "
    >
      <Icon v-show="value" icon="lucide:check" class="h-4 w-4" />
    </button>
    <slot />
  </div>
</template>
