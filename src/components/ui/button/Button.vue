<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'
import { Icon } from '@iconify/vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'

import { type ButtonVariants, buttonVariants } from '.'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  loading?: boolean
  primaryIcon?: string | undefined
  secondaryIcon?: string | undefined
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button'
})
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="cn(buttonVariants({ variant, size }), props.class)">
    <Icon v-if="primaryIcon && !loading" class="text-xl" :icon="primaryIcon" />
    <Icon v-if="loading" class="animate-spin text-xl" icon="line-md:loading-twotone-loop" />
    <slot />
    <Icon v-if="secondaryIcon" class="text-xl" :icon="secondaryIcon" />
  </Primitive>
</template>
