<script setup lang="ts">
import { cn } from '@/lib/utils'
import { TabsContent, type TabsContentProps } from 'radix-vue'
import { type HTMLAttributes, computed } from 'vue'

const props = defineProps<TabsContentProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TabsContent tabindex="-1" :class="cn('mt-2', props.class)" v-bind="delegatedProps">
    <slot />
  </TabsContent>
</template>
