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
  <div class="flex items-center space-x-2">
    <Toggle id="terms" v-model:pressed="value">T</Toggle>
  </div>
  {{ value }}
</template>
```
