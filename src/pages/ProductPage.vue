<script setup lang="ts">
import { computed, ref } from 'vue'
import { ArrowLeft, Check, ChevronRight, Heart, Minus, Plus, ShieldCheck, Star, Truck } from 'lucide-vue-next'
import { RouterLink, useRoute } from 'vue-router'
import { products } from '@/data/products'
import { useCartStore } from '@/stores/cart'
import { useVehicleStore } from '@/stores/vehicle'

const route = useRoute()
const cart = useCartStore()
const vehicleStore = useVehicleStore()
const product = computed(() => products.find((candidate) => candidate.slug === String(route.params.slug)) ?? products[0])
const selectedImage = ref(0)
const quantity = ref(1)
const added = ref(false)

function addToCart() {
  for (let index = 0; index < quantity.value; index += 1) cart.add(product.value)
  added.value = true
}
</script>

<template>
  <div class="pb-12 pt-8 sm:pt-12">
    <RouterLink to="/shop" class="inline-flex items-center gap-2 text-xs font-semibold text-[#8E96A3] transition hover:text-white"><ArrowLeft :size="15" /> Back to shop</RouterLink>
    <div class="mt-7 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
      <div><div class="relative aspect-square overflow-hidden rounded-[28px] border border-white/10 bg-[#181c22]"><img :src="product.images[selectedImage]" :alt="product.name" class="h-full w-full object-cover opacity-75 mix-blend-screen" /><div class="absolute inset-0 bg-gradient-to-t from-[#101318] via-transparent to-transparent"></div><span class="absolute left-5 top-5 rounded-full bg-[#FF6B00] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0B0D10]">{{ product.brand }}</span><span class="absolute bottom-5 left-5 rounded-lg bg-white/10 px-3 py-2 text-sm font-bold backdrop-blur">{{ product.viscosity }} · {{ product.volume }}</span></div><div class="mt-3 grid grid-cols-2 gap-3"><button v-for="(image, index) in product.images" :key="image" class="aspect-[1.5] overflow-hidden rounded-xl border-2 bg-[#181c22]" :class="selectedImage === index ? 'border-[#FF6B00]' : 'border-transparent opacity-60'" @click="selectedImage = index"><img :src="image" :alt="`${product.name} view ${index + 1}`" class="h-full w-full object-cover mix-blend-screen" /></button></div></div>
      <div class="flex flex-col justify-center"><div class="flex items-center gap-2 text-xs text-[#FFB800]"><Star :size="15" fill="currentColor" stroke="none" /> <strong>{{ product.rating }}</strong><span class="text-[#8E96A3]">({{ product.reviewCount }} reviews)</span></div><h1 class="display-font mt-4 max-w-xl text-4xl font-bold leading-[0.98] tracking-[-0.06em] text-white sm:text-6xl">{{ product.name }}<span class="text-[#FF6B00]">.</span></h1><p class="mt-5 max-w-lg text-sm leading-relaxed text-[#8E96A3]">{{ product.description }}</p><div class="mt-7 flex items-end gap-3"><span class="display-font text-4xl font-bold tracking-tight text-white">${{ product.price.toFixed(2) }}</span><span v-if="product.originalPrice" class="pb-1 text-sm text-[#68707D] line-through">${{ product.originalPrice.toFixed(2) }}</span><span class="mb-1 rounded-full bg-[#58D5E6]/10 px-2 py-1 text-[10px] font-bold text-[#58D5E6]">In stock · {{ product.stock }} left</span></div><div class="mt-8 rounded-2xl border border-white/[0.08] bg-[#14171C] p-4"><div class="flex items-center justify-between"><div class="flex items-center gap-3"><span class="grid h-9 w-9 place-items-center rounded-lg bg-[#58D5E6]/10 text-[#58D5E6]"><Truck :size="18" /></span><div><p class="text-xs font-semibold text-white">Free delivery</p><p class="mt-1 text-[11px] text-[#8E96A3]">Arrives tomorrow if ordered by 2 PM</p></div></div><ChevronRight :size="16" class="text-[#68707D]" /></div></div><div class="mt-5 flex gap-3"><div class="flex h-12 items-center rounded-xl border border-white/10 bg-[#14171C]"><button class="grid h-12 w-10 place-items-center text-[#8E96A3] hover:text-white" aria-label="Decrease quantity" @click="quantity = Math.max(1, quantity - 1)"><Minus :size="15" /></button><span class="w-6 text-center text-sm font-bold">{{ quantity }}</span><button class="grid h-12 w-10 place-items-center text-[#8E96A3] hover:text-white" aria-label="Increase quantity" @click="quantity += 1"><Plus :size="15" /></button></div><button class="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#FF6B00] text-sm font-bold text-[#0B0D10] transition hover:bg-[#ff8129] active:scale-[0.99]" @click="addToCart"><Check v-if="added" :size="17" stroke-width="3" /><span>{{ added ? 'Added to your bag' : 'Add to bag' }}</span></button><button aria-label="Save product" class="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-[#14171C] text-[#8E96A3] hover:text-white"><Heart :size="18" /></button></div><RouterLink v-if="!vehicleStore.vehicle" to="/vehicle" class="mt-5 flex items-center gap-2 text-xs font-semibold text-[#58D5E6]"><ShieldCheck :size="16" /> Is this compatible with your car? <ChevronRight :size="14" /></RouterLink><p v-else class="mt-5 flex items-center gap-2 text-xs font-semibold text-[#58D5E6]"><Check :size="16" /> Fits your {{ vehicleStore.vehicle.make }} {{ vehicleStore.vehicle.model }}</p></div>
    </div>
    <div class="mt-14 border-t border-white/[0.07] pt-10"><h2 class="display-font text-2xl font-bold tracking-[-0.04em] text-white">Performance specs</h2><div class="mt-5 grid overflow-hidden rounded-2xl border border-white/[0.08] sm:grid-cols-2"> <div v-for="([label, value], index) in Object.entries(product.specs)" :key="label" class="flex justify-between gap-5 border-white/[0.07] px-5 py-4 text-xs" :class="index % 2 ? 'bg-[#14171C]' : 'bg-[#101318]'"><span class="text-[#8E96A3]">{{ label }}</span><strong class="text-right text-white">{{ value }}</strong></div></div></div>
  </div>
</template>
