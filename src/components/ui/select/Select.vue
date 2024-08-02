<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'
import { Icon } from '@iconify/vue'

const props = defineProps<{ modelValue: string; disabled?: boolean; class?: HTMLAttributes['class'] }>()

const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()
</script>

<template>
  <div class="relative">
    <select
      :disabled="props.disabled"
      :class="
        cn(
          'flex h-8 items-center justify-center gap-2 whitespace-nowrap text-nowrap rounded-lg border border-border bg-default px-2 pr-7 align-middle text-default-foreground no-underline outline-none [border-style:solid] focus:border-ring disabled:pointer-events-none disabled:opacity-50',
          props.class
        )
      "
      @change="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
      <slot />
    </select>
    <Icon
      :class="{ 'pointer-events-none opacity-50': props.disabled }"
      class="absolute right-2 top-1 h-6"
      icon="lucide:chevrons-up-down"
    />
  </div>
</template>
