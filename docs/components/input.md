# Input

Displays a form input field or a component that looks like an input field.

Example of usage :

<ClientOnly>
  <ExampleOfInput />
</ClientOnly>

```vue
<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <Input v-model="value" type="email" placeholder="Email" />
  {{ value }}
</template>
```

## Type

| Prop name | Type           | Looks                                                   |
| --------- | -------------- | ------------------------------------------------------- |
| type      | text           | <ClientOnly><Input type="text"/></ClientOnly>           |
| type      | password       | <ClientOnly><Input type="password"/></ClientOnly>       |
| type      | file           | <ClientOnly><Input type="file"/></ClientOnly>           |
| type      | date           | <ClientOnly><Input type="date"/></ClientOnly>           |
| type      | time           | <ClientOnly><Input type="time"/></ClientOnly>           |
| type      | datetime-local | <ClientOnly><Input type="datetime-local"/></ClientOnly> |

## Placeholder

| Prop name   | Type   | Looks                                                       |
| ----------- | ------ | ----------------------------------------------------------- |
| placeholder | string | <ClientOnly><Input placeholder="placeholder"/></ClientOnly> |

## Disabled

| Prop name | Type    | Looks                                       |
| --------- | ------- | ------------------------------------------- |
| disabled  | boolean | <ClientOnly><Input disabled /></ClientOnly> |
