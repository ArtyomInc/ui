<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/vue'
import { AccordionHeader, AccordionTrigger, type AccordionTriggerProps } from 'radix-vue'
import { type HTMLAttributes, computed } from 'vue'

const props = defineProps<AccordionTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="delegatedProps"
      :class="
        cn(
          'text-muted-foreground flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&[data-state=open]>svg]:rotate-90',
          props.class
        )
      "
    >
      <slot />
      <slot name="icon">
        <Icon icon="lucide:chevron-right" class="h-4 w-4 shrink-0 transition-transform duration-200" />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
