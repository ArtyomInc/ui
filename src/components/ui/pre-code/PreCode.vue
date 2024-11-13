<template>
  <div class="relative rounded-xl bg-card p-4">
    <pre class="truncate text-primary"><code :id="randomId" ref="codeBlock" class="language-vue"><slot /></code></pre>
    <span class="absolute right-3 top-3 origin-top-right">
      <Button v-if="!saved" @click="copyCode" size="icon" primary-icon="lucide:copy" />
      <Button v-else size="icon" primary-icon="lucide:check-check" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import Prism from 'prismjs'
import { onMounted, ref } from 'vue'

import '../../../assets/prism.css'

const saved = ref(false)
const randomId = Math.random().toString(36).substring(2)
const codeBlock = ref(null)

function copyCode() {
  const code = document.getElementById(randomId) as HTMLElement
  navigator.clipboard.writeText(code.innerText.trim())
  saved.value = true
  setTimeout(() => {
    saved.value = false
  }, 1000)
}

onMounted(() => {
  if (!codeBlock.value) return
  Prism.highlightElement(codeBlock.value)
})
</script>
