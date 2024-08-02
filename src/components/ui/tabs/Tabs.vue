<template>
  <div class="border border-gray-300">
    <div class="flex border-b border-gray-300">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['cursor-pointer px-4 py-2', { 'border-b-2 border-blue-500 font-bold': index === activeTabIndex }]"
        @click="selectTab(index)"
      >
        {{ tab.title }}
      </button>
    </div>
    <div class="p-4">
      <slot :name="'tab-' + activeTabIndex" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'

interface Tab {
  title: string
}

const tabs = ref<Tab[]>([])
const activeTabIndex = ref(0)

const selectTab = (index: number) => {
  activeTabIndex.value = index
}

provide('tabs', tabs)
provide('activeTabIndex', activeTabIndex)
provide('selectTab', selectTab)

onMounted(() => {
  if (tabs.value.length > 0) {
    activeTabIndex.value = 0
  }
})
</script>
