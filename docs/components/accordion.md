# Accordion

A vertically stacked set of interactive headings that each reveal a section of content.

Example of usage :

<ClientOnly>
  <ExampleOfAccordion />
</ClientOnly>

```vue
<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const defaultValue = 'item-1'

const accordionItems = [
  { content: 'Yes. It adheres to the WAI-ARIA design pattern.', title: 'Is it accessible?', value: 'item-1' },
  {
    content: "Yes. It's unstyled by default, giving you freedom over the look and feel.",
    title: 'Is it unstyled?',
    value: 'item-2'
  },
  {
    content: 'Yes! You can use the transition prop to configure the animation.',
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
```
