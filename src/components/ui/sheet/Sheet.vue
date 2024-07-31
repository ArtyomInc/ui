<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{ modelValue: boolean }>()
const show = ref(false)

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      document.body.style.overflow = 'hidden'
      show.value = true
    } else {
      document.body.style.overflow = ''
      setTimeout(() => {
        show.value = false
      }, 100)
    }
  }
)
</script>

<template>
  <Teleport to="body">
    <div
      v-show="show"
      :class="{
        'animate-[fade-out_100ms_ease-in-out_forwards]': !props.modelValue
      }"
      class="fixed top-0 z-50 flex h-screen w-screen animate-none justify-end bg-transparent sm:animate-[fade-in_100ms_ease-in-out_forwards] sm:bg-foreground/10"
    >
      <div
        :class="{ 'animate-[slide-out_100ms_ease-in-out_forwards]': !props.modelValue }"
        class="h-screen w-full max-w-screen-sm animate-[slide-in_100ms_ease-in-out_forwards] bg-background p-2 md:p-3"
      >
        <slot />
      </div>
    </div>
  </Teleport>
</template>
