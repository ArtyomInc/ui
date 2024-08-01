<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div class="relative w-full overflow-auto border-none">
    <table :class="cn('!m-0 !table w-full caption-bottom text-sm', props.class)">
      <slot />
    </table>
  </div>
</template>
