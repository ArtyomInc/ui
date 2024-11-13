<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div class="mx-[10svw]">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="order-2 flex flex-col justify-center gap-5 md:order-1">
        <h1 class="text-5xl font-bold">
          <span class="gradient-text">ArtyomInc UI</span>
        </h1>
        <h2 class="text-4xl font-bold">UI Components from ArtyomInc</h2>
        <p class="text-3xl text-foreground/50">Designed Vue 3 components that you can copy and paste into your apps.</p>
        <div class="flex gap-3">
          <Button @click="router.push({ name: 'guide' })" variant="primary">Guide</Button>
          <Button @click="router.push({ name: 'components' })">Components</Button>
        </div>
      </div>
      <div class="order-1 flex items-center justify-center md:order-2">
        <img class="h-3/4 w-3/4" src="@/assets/logo.svg" alt="ArtomyInc" />
      </div>
    </div>
    <div class="flex items-center justify-center py-10">
      <Card class="flex flex-col items-center justify-center p-10 text-foreground/50">
        <span> Released under the MIT License. </span>
        <span> Copyright © 2024 ArtyomInc </span>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.gradient-text {
  background: linear-gradient(120deg, #6f73d2, #00ff3f);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
