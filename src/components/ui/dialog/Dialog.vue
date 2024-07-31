<script setup lang="ts">
import { Card } from '@/components/ui/card'
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
      :class="{ 'animate-[fade-out_100ms_ease-in-out_forwards]': !props.modelValue }"
      class="fixed left-0 top-0 z-50 flex h-screen w-screen animate-[fade-in_100ms_ease-in-out_forwards] items-center justify-center bg-black/30 p-2 dark:bg-white/20"
    >
      <Card class="max-w-screen-sm">
        <slot />
      </Card>
    </div>
  </Teleport>
</template>
