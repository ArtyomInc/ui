Sonner
A succinct message that is displayed temporarily.

Example of usage :

<ClientOnly>
  <ExampleOfSonner />
</ClientOnly>

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Sonner, useSonnerStore } from '@/components/ui/sonner'

const sonner = useSonnerStore()
</script>

<template>
  <Button
    class="mb-1"
    @click="
      sonner.trig({
        title: 'New item in cart',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quaerat!'
      })
    "
    >Trig new toast</Button
  >
  <Button @click="sonner.trig({ title: 'Title', type: 'danger' })">Trig new danger toast</Button>
  <Sonner />
</template>
```
