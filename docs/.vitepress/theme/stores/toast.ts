import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Toast {
  id: number
  title: string
  description?: string
  type?: 'danger'
}

export const useToastStore = defineStore('toast', () => {
  const list = ref<Toast[]>([])
  const duration = 3000

  function add(title: string, description?: string, type?: 'danger') {
    const newToastItem: Toast = {
      id: Math.round(Math.random() * 100_000),
      title,
      description,
      type
    }
    list.value.push(newToastItem)
    setTimeout(() => {
      remove(newToastItem.id)
    }, duration)
  }

  function remove(id: number) {
    const findedId = list.value.findIndex((toast) => toast.id === id)
    if (findedId >= 0) {
      list.value.splice(findedId, 1)
    }
  }

  return { list, duration, add, remove }
})
