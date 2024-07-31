<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'
import { useLocalStorage, usePreferredColorScheme } from '@vueuse/core'
import { computed, onMounted } from 'vue'

const preferredColorScheme = usePreferredColorScheme()
const localColorScheme = useLocalStorage('color-scheme', 'auto')
const isDark = computed(
  () =>
    localColorScheme.value === 'dark' || (preferredColorScheme.value === 'dark' && localColorScheme.value === 'auto')
)
const isLight = computed(
  () =>
    localColorScheme.value === 'light' || (preferredColorScheme.value === 'light' && localColorScheme.value === 'auto')
)

onMounted(() => {
  if (localColorScheme.value === 'dark') {
    document.documentElement.classList.add('dark')
  } else if (localColorScheme.value === 'light') {
    document.documentElement.classList.remove('dark')
  } else if (preferredColorScheme.value === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})

const toggleColorScheme = () => {
  if (isLight.value) {
    if (preferredColorScheme.value === 'light') {
      localColorScheme.value = 'dark'
    } else {
      localColorScheme.value = 'auto'
    }
    document.documentElement.classList.add('dark')
  } else if (isDark.value) {
    if (preferredColorScheme.value === 'dark') {
      localColorScheme.value = 'light'
    } else {
      localColorScheme.value = 'auto'
    }
    document.documentElement.classList.remove('dark')
  }
}
</script>

<template>
  <Button size="icon" @click="toggleColorScheme()">
    <Icon class="text-xl text-default-foreground" :icon="isDark ? 'lucide:sun' : 'lucide:moon'" />
  </Button>
</template>
