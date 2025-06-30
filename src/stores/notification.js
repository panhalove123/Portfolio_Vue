import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNotificationStore = defineStore('notification', () => {
  const count = ref(0)
  const DoubleCount = ref(0)


  function increment() {
    count.value++
    DoubleCount.value = count.value * 2
  }

  function reset() {
    count.value = 0
  }

  return { count, increment, reset, DoubleCount }
})