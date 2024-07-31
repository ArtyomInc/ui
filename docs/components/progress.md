# Progress

Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.

Example of usage :

<ClientOnly>
  <ExampleOfProgress />
</ClientOnly>

```vue
<script setup lang="ts">
import { Progress } from '@/components/ui/progress'
</script>

<template>
  <Progress />
</template>
```

## Parameters

| Prop name | Type   | Looks (50%)                                                       |
| --------- | ------ | ----------------------------------------------------------------- |
| value     | number | <ClientOnly><Progress class="min-w-52" :value="50"/></ClientOnly> |
