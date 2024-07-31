<script setup lang="ts">
import type { CheckboxRootEmits, CheckboxRootProps } from 'radix-vue'

import { cn } from '@/lib/utils'
import { Icon } from '@iconify/vue'
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'radix-vue'
import { type HTMLAttributes, computed } from 'vue'

const props = defineProps<CheckboxRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<CheckboxRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    :class="
      cn(
        'h-5 w-5 shrink-0 rounded border border-border [border-style:solid] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-none dark:shadow',
        props.class
      )
    "
  >
    <CheckboxIndicator
      class="flex h-full w-full items-center justify-center rounded bg-primary text-primary-foreground"
    >
      <slot>
        <Icon icon="lucide:check" class="h-4 w-4" />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
