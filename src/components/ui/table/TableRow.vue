<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <tr
    :class="
      cn(
        '!border-b !border-border !bg-transparent transition-colors ![border-bottom-style:solid] ![border-top-style:none] hover:!bg-foreground/10 data-[state=selected]:bg-default',
        props.class
      )
    "
  >
    <slot />
  </tr>
</template>
