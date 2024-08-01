# Card

Displays a card.

## CLI

```sh
npx @artyominc/ui add card
```

## Preview

<ClientOnly>
  <div class="bg-neutral-100 p-3 rounded-lg dark:bg-transparent">
    <ExampleOfCard/>
  </div>
</ClientOnly>

### Code

```vue
<script setup lang="ts">
import { Card } from '@/components/ui/card'
</script>

<template>
  <Card class="p-5"> Light and dark mode </Card>
</template>
```
