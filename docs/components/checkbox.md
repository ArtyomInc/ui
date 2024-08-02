# Checkbox

A control that allows the user to toggle between checked and not checked.

## CLI

```sh
npx @artyominc/ui add checkbox
```

## Preview

<ClientOnly>
  <ExampleOfCheckbox />
</ClientOnly>

## Code

```vue
<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <Checkbox v-model="value">Accept terms and conditions</Checkbox>
  {{ value }}
</template>
```

## Disabled

| Prop name | Type    | Looks                                                                      |
| --------- | ------- | -------------------------------------------------------------------------- |
| disabled  | boolean | <ClientOnly><Checkbox disabled >Disabled Checkbox</Checkbox> </ClientOnly> |

## Multi-line content

| Looks                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------ |
| <ClientOnly><Checkbox disabled > The checkbox can display content<br/> on multiple lines.</Checkbox> </ClientOnly> |
