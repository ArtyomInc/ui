# Number Field

A number field allows a user to enter a number and increment or decrement the value using stepper buttons.

## CLI

```sh
npx @artyominc/ui add number-field
```

## Preview

<ClientOnly>
  <ExampleOfNumberField />
</ClientOnly>

## Code

```vue
<script setup lang="ts">
import { NumberField } from '@/components/ui/number-field'
import { ref } from 'vue'

const value = ref(5)
</script>

<template>
  <NumberField v-model="value" :min="1" :max="10" class="w-32" />
  <code class="m-4">
    {{ value }}
  </code>
</template>
```

## Disabled

| Prop name | Type    | Looks                                             |
| --------- | ------- | ------------------------------------------------- |
| disabled  | boolean | <ClientOnly><NumberField disabled /></ClientOnly> |
