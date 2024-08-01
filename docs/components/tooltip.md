# Tooltip

A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it..

Example of usage :

<ClientOnly>
  <ExampleOfTooltip/>
</ClientOnly>

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <Button> Hover </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
```
