<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <tfoot :class="cn('border-t bg-foreground/50 font-medium', props.class)">
    <slot />
  </tfoot>
</template>
