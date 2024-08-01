# Badge

Displays a badge or a component that looks like a badge.

## CLI

```sh
npx @artyominc/ui add badge
```

## Preview

<ClientOnly>
  <ExampleOfBadge />
</ClientOnly>

## Code

```vue
<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
</script>

<template>
  <Badge>Badge</Badge>
</template>
```

## Variants props value

| Variants value | Looks                                                             |
| -------------- | ----------------------------------------------------------------- |
|                | <ClientOnly><Badge>Default</Badge></ClientOnly>                   |
| primary        | <ClientOnly><Badge variant="primary">Primary</Badge></ClientOnly> |
| danger         | <ClientOnly><Badge variant="danger">Danger</Badge></ClientOnly>   |
