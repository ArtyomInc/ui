<script setup lang="ts">
import { useSonner } from './Sonner'

const sonner = useSonner()
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity transition-transform duration-100 "
      leave-active-class="transition-opacity transition-transform duration-100 "
      enter-from-class="opacity-20 translate-y-8"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-20 -translate-y-8"
    >
      <div v-if="sonner.state" class="fixed bottom-0 right-0 z-50 flex flex-col gap-1 p-2">
        <div
          class="relative w-[calc(100vw-1rem)] overflow-hidden rounded-lg border border-border/30 bg-default p-3 shadow-lg md:w-[20rem]"
        >
          <div v-if="sonner.state.description">
            <h4 class="truncate font-semibold">
              {{ sonner.state.title }}
            </h4>
            <p class="truncate text-sm">
              {{ sonner.state.description }}
            </p>
          </div>
          <p v-else>
            {{ sonner.state.title }}
          </p>
          <div
            class="absolute bottom-0 left-0 flex h-1 w-full animate-[progress-animation_var(--toast-duration)_linear_forwards]"
            :style="{ '--toast-duration': sonner.duration + 'ms' }"
            :class="{
              'bg-primary': !sonner.state.type,
              'bg-danger': sonner.state.type === 'danger'
            }"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
