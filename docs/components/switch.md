# Switch

A control that allows the user to toggle between checked and not checked.

## CLI

```sh
npx @artyominc/ui add switch
```

## Preview

<ClientOnly>
  <ExampleOfSwitch />
</ClientOnly>

## Code

```vue
<script setup lang="ts">
import { Switch } from '@/components/ui/switch'
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <Switch v-model="value">Airplane Mode</Switch>
  {{ value }}
</template>
```

## Disabled

| Prop name | Type    | Looks                                                                |
| --------- | ------- | -------------------------------------------------------------------- |
| disabled  | boolean | <ClientOnly><Switch disabled >Disabled Switch</Switch> </ClientOnly> |

## Multi-line content

| Looks                                                                                                        |
| ------------------------------------------------------------------------------------------------------------ |
| <ClientOnly><Switch disabled > The switch can display content<br/> on multiple lines.</Switch> </ClientOnly> |
