# Select

Displays a list of options for the user to pick from—triggered by a button.

Example of usage :

<ClientOnly>
  <ExampleOfSelect />
</ClientOnly>

```vue
<script setup lang="ts">
import { Select } from '@/components/ui/select'
import { ref } from 'vue'

const value = ref('value1')
</script>

<template>
  <div class="flex items-center gap-2">
    <Select v-model="value">
      <option value="value1">Value 1</option>
      <option value="value2">Value 2</option>
      <option value="value3">Value 3</option>
    </Select>
    {{ value }}
  </div>
</template>
```

## Disabled

| Prop name | Type    | Looks                                                                                   |
| --------- | ------- | --------------------------------------------------------------------------------------- |
| disabled  | boolean | <ClientOnly><Select disabled><option value="value">Value</option></Select></ClientOnly> |
