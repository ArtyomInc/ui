# Toggle

A two-state button that can be either on or off.

## CLI

```sh
npx @artyominc/ui add toggle
```

## Preview

<ClientOnly>
  <ExampleOfToggle/>
</ClientOnly>

## Code

```vue
<script setup lang="ts">
import { Toggle } from '@/components/ui/toggle'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <Toggle v-model:pressed="value"><Icon icon="lucide:italic" /></Toggle>
  {{ value }}
</template>
```

## Disabled

| Prop name | Type    | Looks                                                  |
| --------- | ------- | ------------------------------------------------------ |
| disabled  | boolean | <ClientOnly><Toggle disabled >D</Toggle> </ClientOnly> |
