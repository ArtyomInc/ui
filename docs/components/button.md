# Button

Displays a button or a component that looks like a button.

Example of usage :

<ClientOnly>
  <ExampleOfButton/>
</ClientOnly>

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button>Hey I'm a Button !</Button>
</template>
```

## Variant props value

| Variants value | Looks                                                               |
| -------------- | ------------------------------------------------------------------- |
|                | <ClientOnly><Button >Default</Button></ClientOnly>                  |
| primary        | <ClientOnly><Button variant="primary">Primary</Button></ClientOnly> |
| danger         | <ClientOnly><Button variant="danger">Danger</Button></ClientOnly>   |

## Size props value

| Variants value | Looks                                                      |
| -------------- | ---------------------------------------------------------- |
|                | <ClientOnly><Button >Default</Button></ClientOnly>         |
| icon           | <ClientOnly><Button size="icon">Icon</Button></ClientOnly> |

## Disabled

| Prop name | Type    | Looks                                                        |
| --------- | ------- | ------------------------------------------------------------ |
| disabled  | boolean | <ClientOnly><Button disabled >Disabled</Button></ClientOnly> |

## Loading

| Prop name | Type    | Looks                                                      |
| --------- | ------- | ---------------------------------------------------------- |
| loading   | boolean | <ClientOnly><Button loading >Loading</Button></ClientOnly> |

## Icon

| Prop name      | Type   | Looks                                                                                |
| -------------- | ------ | ------------------------------------------------------------------------------------ |
| primary-icon   | string | <ClientOnly><Button primary-icon="lucide:audio-lines" >Icon</Button></ClientOnly>    |
| secondary-icon | string | <ClientOnly><Button secondary-icon="lucide:audio-lines" >Icon </Button></ClientOnly> |
