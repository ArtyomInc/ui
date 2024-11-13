<script setup lang="ts">
import { ThemeButton } from '@/components/ui/theme-button'
</script>

<template>
  <header>
    <div class="flex h-14 justify-between border-b border-b-foreground/20">
      <div class="flex h-full items-center gap-2 border-r border-r-foreground/20">
        <img class="h-full w-full p-2" src="@/assets/logo.svg" alt="Vue logo" />
        <span class="mr-20 whitespace-nowrap text-xl font-semibold">ArtyomInc UI</span>
      </div>
      <nav class="items-cente flex">
        <router-link class="nav-link group" to="/" exact
          >Home
          <span
            class="absolute bottom-0 left-0 h-1 w-0 bg-foreground/50 transition-[width] duration-300 group-hover:w-full group-hover:bg-foreground"
          ></span>
        </router-link>
        <router-link class="nav-link group" to="/guide"
          >Guide
          <span
            class="absolute bottom-0 left-0 h-1 w-0 bg-foreground/50 transition-[width] duration-300 group-hover:w-full group-hover:bg-foreground"
          ></span
        ></router-link>
        <router-link class="nav-link group" to="/components"
          >Components
          <span
            class="absolute bottom-0 left-0 h-1 w-0 bg-foreground/50 transition-[width] duration-300 group-hover:w-full group-hover:bg-foreground"
          ></span
        ></router-link>
        <div class="nav-link w-[calc(3.5rem+1px)]"><ThemeButton /></div>
      </nav>
    </div>
  </header>
  <main class="borde mx-14 min-h-[calc(100vh-3.5rem)] border-x border-x-foreground/20">
    <slot />
  </main>
</template>

<style scoped>
.nav-link {
  @apply relative flex h-full items-center justify-center border-l border-l-foreground/20 px-4 text-foreground/50 transition-colors hover:text-foreground;
}
.router-link-active {
  @apply text-foreground;
}
.router-link-active span {
  @apply w-full bg-foreground;
}
</style>
