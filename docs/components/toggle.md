# Toggle

A two-state button that can be either on or off.

Example of usage :

<ClientOnly>
  <ExampleOfToggle/>
</ClientOnly>

```vue
<script setup lang="ts">
import { Toggle } from '@/components/ui/toggle'
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <Toggle v-model="value" />
  {{ value }}
</template>
```
