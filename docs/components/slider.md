# Slider

An input where the user selects a value from within a given range.

## CLI

```sh
npx @artyominc/ui add slider
```

## Preview

<ClientOnly>
  <ExampleOfSlider />
</ClientOnly>

## Code

```vue
<script setup lang="ts">
import { Slider } from '@/components/ui/slider'
import { ref } from 'vue'

const monoValue = ref([5])
const doubleValue = ref([25, 75])
</script>

<template>
  <h4>Mono value</h4>
  <Slider v-model="monoValue" :max="10" :step="0.1" />
  {{ monoValue }}
  <h4>Double value</h4>
  <Slider v-model="doubleValue" :max="100" :step="1" />
  {{ doubleValue }}
</template>
```

## Disabled

| Prop name | Type    | Looks                                                                          |
| --------- | ------- | ------------------------------------------------------------------------------ |
| disabled  | boolean | <ClientOnly><Slider class="w-32" :max="10" :step="0.1" disabled/></ClientOnly> |
