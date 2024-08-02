<template>
  <div v-if="isActive">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted } from 'vue'

interface TabProps {
  title: string
}

const props = defineProps<TabProps>()

const tabs = inject<TabProps[]>('tabs')
const activeTabIndex = inject<number>('activeTabIndex')
const selectTab = inject<(index: number) => void>('selectTab')

const isActive = computed(() => {
  return tabs ? tabs.indexOf(props) === activeTabIndex : false
})

onMounted(() => {
  if (tabs) {
    tabs.push(props)
  }
})
</script>
