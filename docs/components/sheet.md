# Sheet

Extends the Dialog component to display content that complements the main content of the screen.

Example of usage :

<ClientOnly>
  <ExampleOfSheet />
</ClientOnly>

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Sheet } from '@/components/ui/sheet'
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <Button @click="isOpen = true">Open Sheet</Button>
  <Sheet v-model="isOpen">
    <Button @click="isOpen = false">Close Sheet</Button>
  </Sheet>
</template>
```
