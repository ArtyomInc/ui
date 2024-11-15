import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Sonner {
  title: string
  description?: string
  type?: 'danger'
}

export const useSonner = defineStore('sonner', () => {
  const state = ref<Sonner | null>(null)
  const duration = 3000
  let appearTimeout: number
  let disappearTimeout: number

  function trig(sonner: Sonner) {
    clearTimeout(appearTimeout)
    clearTimeout(disappearTimeout)
    remove()
    appearTimeout = setTimeout(() => {
      state.value = sonner
      disappearTimeout = setTimeout(() => {
        remove()
      }, duration)
    }, 100)
  }

  function remove() {
    state.value = null
  }

  return { duration, remove, state, trig }
})

export default useSonner
