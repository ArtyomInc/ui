# TextArea

Displays a form textarea or a component that looks like a textarea.

## CLI

```sh
npx @artyominc/ui add text-area
```

## Preview

<ClientOnly>
  <ExampleOfTextArea />
</ClientOnly>

## Code

```vue
<script setup lang="ts">
import { TextArea } from '@/components/ui/text-area'
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <TextArea v-model="value" placeholder="Type your message here." />
</template>
```

## Disabled

| Prop name | Type    | Looks                                                                         |
| --------- | ------- | ----------------------------------------------------------------------------- |
| disabled  | boolean | <ClientOnly><TextArea disabled placeholder="Disabled message" /></ClientOnly> |
