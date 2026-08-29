<script setup lang="ts">
import { computed } from 'vue'
import { Check, Heart, Plus, Star } from 'lucide-vue-next'
import { useCartStore } from '@/stores/cart'
import type { Product } from '@/types/product'

const props = defineProps<{ product: Product }>()
const cart = useCartStore()
const quantity = computed(() => cart.quantity(props.product.id))

function addToCart() {
  cart.add(props.product)
}
</script>

<template>
  <article class="group relative min-w-0 overflow-hidden rounded-[22px] border border-white/[0.07] bg-[#14171C] p-2 transition duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-[#181c22]">
    <div class="relative aspect-[1.06] overflow-hidden rounded-[17px] bg-[#20252C]">
      <img :src="product.image" :alt="product.name" class="h-full w-full object-cover opacity-65 mix-blend-screen transition duration-500 group-hover:scale-105 group-hover:opacity-80" />
      <div class="absolute inset-0 bg-gradient-to-t from-[#14171C] via-transparent to-black/20"></div>
      <div class="absolute left-3 top-3 flex gap-1.5">
        <span v-if="product.isBestseller" class="rounded-full bg-[#FF6B00] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#0B0D10]">Bestseller</span>
        <span v-else-if="product.isNew" class="rounded-full bg-[#58D5E6] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#0B0D10]">New</span>
      </div>
      <button aria-label="Save product" class="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-[#0B0D10]/55 text-white/70 backdrop-blur transition hover:bg-[#0B0D10]/80 hover:text-white"><Heart :size="15" /></button>
      <div class="absolute bottom-3 left-3 right-3 flex items-end justify-between">
        <div><p class="mb-1 text-[10px] font-bold uppercase tracking-[0.13em] text-white/60">{{ product.brand }}</p><p class="rounded-md bg-white/10 px-2 py-1 text-xs font-bold text-white backdrop-blur">{{ product.viscosity }}</p></div>
        <div class="flex items-center gap-1 text-[11px] font-semibold text-white"><Star :size="12" fill="#FFB800" stroke="none" />{{ product.rating }}</div>
      </div>
    </div>
    <div class="px-2 pb-1 pt-4">
      <div class="mb-1 flex items-start justify-between gap-2"><h3 class="line-clamp-2 text-sm font-semibold leading-snug text-white">{{ product.name }}</h3><span class="shrink-0 text-[10px] text-[#8E96A3]">{{ product.volume }}</span></div>
      <p class="mb-4 text-[11px] text-[#8E96A3]">{{ product.base }} · {{ product.reviewCount }} reviews</p>
      <div class="flex items-center justify-between"><p class="display-font text-lg font-bold tracking-tight text-white">${{ product.price.toFixed(2) }}</p><button class="grid h-9 min-w-9 place-items-center rounded-xl bg-[#FF6B00] px-2.5 text-[#0B0D10] transition hover:bg-[#ff8129] active:scale-95" :aria-label="`Add ${product.name} to cart`" @click="addToCart"><Check v-if="quantity" :size="17" stroke-width="3" /><Plus v-else :size="18" stroke-width="2.5" /></button></div>
    </div>
  </article>
</template>
