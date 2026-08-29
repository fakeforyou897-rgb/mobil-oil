import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/types/product'

export const useCartStore = defineStore('cart', () => {
  const items = ref<Record<string, number>>(JSON.parse(localStorage.getItem('torque-cart') ?? '{}'))
  const count = computed(() => Object.values(items.value).reduce((total, quantity) => total + quantity, 0))

  function add(product: Product) {
    items.value[product.id] = (items.value[product.id] ?? 0) + 1
    persist()
  }

  function quantity(id: string) {
    return items.value[id] ?? 0
  }

  function remove(id: string) {
    if (!items.value[id]) return
    if (items.value[id] === 1) delete items.value[id]
    else items.value[id] -= 1
    persist()
  }

  function persist() {
    localStorage.setItem('torque-cart', JSON.stringify(items.value))
  }

  return { items, count, add, remove, quantity }
})
