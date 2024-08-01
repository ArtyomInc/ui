# Progress

Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.

## CLI

```sh
npx @artyominc/ui add progress
```

## Preview

<ClientOnly>
  <ExampleOfProgress />
</ClientOnly>

## Code

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
