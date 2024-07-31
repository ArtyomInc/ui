<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const defaultValue = 'item-1'

const accordionItems = [
  { content: 'Yes. It adheres to the WAI-ARIA design pattern.', title: 'Is it accessible?', value: 'item-1' },
  {
    content: "Yes. It's styled by default, but with freedom to take control of the look and feel.",
    title: 'Is it styled?',
    value: 'item-2'
  },
  {
    content: "Yes! It's animated if the OS animation is activated.",
    title: 'Can it be animated?',
    value: 'item-3'
  }
]
</script>

<template>
  <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
    <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
      <AccordionTrigger>{{ item.title }}</AccordionTrigger>
      <AccordionContent>
        {{ item.content }}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>

<style scoped>
h3 {
  margin-top: 0 !important;
}
</style>
