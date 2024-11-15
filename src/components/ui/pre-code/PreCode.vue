<template>
  <div class="relative">
    <div v-html="tokens"></div>
    <span class="absolute right-3 top-3 origin-top-right">
      <Button v-if="copiable" @click="handleCopy" size="icon" primary-icon="lucide:copy" />
      <Button v-else size="icon" primary-icon="lucide:check-check" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { createHighlighter } from 'shiki'
import { onMounted, ref, watch } from 'vue'

const props = defineProps<{
  code: string
  lang?: string
}>()

const tokens = ref('')
const copiable = ref(true)

async function initHighlighter() {
  const highlighter = await createHighlighter({
    langs: [props.lang ? props.lang : 'vue'],
    themes: ['github-dark']
  })
  tokens.value = highlighter.codeToHtml(props.code, {
    lang: props.lang ? props.lang : 'vue',
    theme: 'github-dark'
  })
}

onMounted(initHighlighter)
watch(() => props.code, initHighlighter)

function handleCopy() {
  navigator.clipboard.writeText(props.code).then(() => {
    copiable.value = false
    setTimeout(() => {
      copiable.value = true
    }, 2000)
  })
}
</script>

<style>
pre.shiki {
  @apply rounded-lg p-4;
}
</style>
