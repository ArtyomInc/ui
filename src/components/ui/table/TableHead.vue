<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <th
    :class="
      cn(
        'h-10 border-b border-border bg-transparent px-2 text-left align-middle font-medium text-foreground',
        props.class
      )
    "
  >
    <slot />
  </th>
</template>
