<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight, CarFront, ChevronRight, CircleCheck, Gauge, Search, ShieldCheck, SlidersHorizontal, Sparkles, Star, Wrench } from 'lucide-vue-next'
import { RouterLink, useRouter } from 'vue-router'
import ProductCard from '@/components/product/ProductCard.vue'
import { products } from '@/data/products'

const router = useRouter()
const search = ref('')
const selectedCategory = ref('All')
function searchProducts() { if (search.value.trim()) router.push({ path: '/shop', query: { q: search.value.trim() } }) }
const categories = [
  { label: 'Engine oil', icon: '◉' },
  { label: 'Transmission', icon: '◆' },
  { label: 'Filters', icon: '▤' },
  { label: 'Coolants', icon: '✦' },
  { label: 'Grease', icon: '●' },
]
const heroProduct = products[0]
const featuredProducts = products.slice(0, 4)
</script>

<template>
  <div>
    <section class="grid items-center gap-12 pb-16 pt-10 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24 lg:pt-20">
      <div class="max-w-2xl">
        <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/25 bg-[#FF6B00]/[0.08] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#FF9145]"><Sparkles :size="13" /> Precision fluids for every drive</div>
        <h1 class="display-font max-w-xl text-[clamp(3.25rem,9vw,7.2rem)] font-bold leading-[0.91] tracking-[-0.075em] text-white">Keep your <span class="text-[#FF6B00]">drive</span><br />in motion<span class="text-[#FF6B00]">.</span></h1>
        <p class="mt-7 max-w-md text-base leading-relaxed text-[#8E96A3] sm:text-lg">Premium oils, fluids and filters matched to your car. Less guesswork. More miles.</p>
        <form class="mt-7 flex max-w-md items-center rounded-xl border border-white/10 bg-[#14171C] p-1.5 focus-within:border-[#FF6B00]/60" @submit.prevent="searchProducts"><Search :size="17" class="ml-3 shrink-0 text-[#68707D]" /><input v-model="search" type="search" placeholder="Search oil, brand or viscosity" class="h-10 min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-[#68707D]" /><button class="rounded-lg bg-white/10 px-3 py-2 text-[11px] font-bold text-white transition hover:bg-[#FF6B00] hover:text-[#0B0D10]">Search</button></form>
        <div class="mt-4 flex flex-col gap-3 sm:flex-row">
          <RouterLink to="/shop" class="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-5 text-sm font-bold text-[#0B0D10] transition hover:bg-[#ff8129] active:scale-[0.98]">Find your oil <ArrowRight :size="17" /></RouterLink>
          <RouterLink to="/vehicle" class="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 text-sm font-semibold text-white transition hover:bg-white/[0.07]"><CarFront :size="17" class="text-[#58D5E6]" /> Select your vehicle</RouterLink>
        </div>
        <div class="mt-10 flex items-center gap-5 text-[11px] text-[#8E96A3]"><div class="flex -space-x-2"><span class="grid h-7 w-7 place-items-center rounded-full border-2 border-[#0B0D10] bg-[#D49A7D] text-[9px] font-bold text-[#2A1710]">JM</span><span class="grid h-7 w-7 place-items-center rounded-full border-2 border-[#0B0D10] bg-[#9AB5C8] text-[9px] font-bold text-[#12202A]">AK</span><span class="grid h-7 w-7 place-items-center rounded-full border-2 border-[#0B0D10] bg-[#C9B18A] text-[9px] font-bold text-[#2A2115]">RL</span></div><span><strong class="text-white">12,000+</strong> drivers trust Torque</span></div>
      </div>

      <div class="relative mx-auto w-full max-w-[560px] lg:ml-auto">
        <div class="absolute -right-5 -top-8 h-40 w-40 rounded-full bg-[#FF6B00]/10 blur-3xl"></div>
        <div class="relative aspect-[0.95] overflow-hidden rounded-[32px] border border-white/10 bg-[#171A20] shadow-[0_24px_100px_rgba(0,0,0,0.38)] sm:aspect-[1.08]">
          <img :src="heroProduct.image" alt="Mechanic servicing a car engine" class="h-full w-full object-cover opacity-70 mix-blend-screen" />
          <div class="absolute inset-0 bg-gradient-to-br from-[#13161b]/20 via-transparent to-[#0B0D10]"></div>
          <div class="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-[#0B0D10]/75 px-3 py-2 text-[10px] font-semibold text-white backdrop-blur"><span class="h-1.5 w-1.5 rounded-full bg-[#58D5E6] shadow-[0_0_8px_#58D5E6]"></span> Built for the long haul</div>
          <div class="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-[#111419]/85 p-4 backdrop-blur-xl sm:p-5"><div class="flex items-end justify-between gap-3"><div><p class="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF9145]">Featured pick</p><h2 class="display-font text-xl font-bold tracking-tight text-white sm:text-2xl">EDGE Titanium<br class="sm:hidden" /> 5W-30</h2></div><p class="display-font text-2xl font-bold text-white">$42<span class="text-base text-[#8E96A3]">.90</span></p></div><div class="mt-4 flex items-center justify-between border-t border-white/10 pt-3"><span class="flex items-center gap-1.5 text-[11px] text-[#8E96A3]"><Star :size="13" fill="#FFB800" stroke="none" /> 4.9 (248 reviews)</span><RouterLink to="/shop" class="text-[11px] font-bold text-[#58D5E6]">View details <ChevronRight :size="13" class="inline" /></RouterLink></div></div>
        </div>
        <div class="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#1B1F26] px-4 py-3 shadow-xl sm:flex"><span class="grid h-8 w-8 place-items-center rounded-lg bg-[#58D5E6]/10 text-[#58D5E6]"><CircleCheck :size="17" /></span><div><p class="text-[11px] font-bold text-white">Vehicle matched</p><p class="text-[10px] text-[#8E96A3]">BMW 3 Series · 2018</p></div></div>
      </div>
    </section>

    <section class="border-y border-white/[0.07] py-7">
      <div class="flex items-center justify-between gap-4"><p class="shrink-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8E96A3]">Shop by category</p><div class="hidden h-px flex-1 bg-white/[0.07] sm:block"></div><RouterLink to="/shop" class="shrink-0 text-[11px] font-semibold text-[#58D5E6]">View all <ArrowRight :size="13" class="ml-1 inline" /></RouterLink></div>
      <div class="no-scrollbar mt-5 flex gap-3 overflow-x-auto pb-1">
        <button v-for="category in categories" :key="category.label" class="flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition" :class="selectedCategory === 'All' && category.label === 'Engine oil' ? 'border-[#FF6B00]/50 bg-[#FF6B00]/10 text-white' : 'border-white/[0.08] bg-[#14171C] text-[#A8AFBA] hover:border-white/20'" @click="selectedCategory = category.label"><span class="grid h-8 w-8 place-items-center rounded-lg bg-white/[0.06] text-sm text-[#FF9145]">{{ category.icon }}</span><span class="text-xs font-semibold">{{ category.label }}</span></button>
      </div>
    </section>

    <section class="py-16 lg:py-20">
      <div class="mb-7 flex items-end justify-between gap-4"><div><p class="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF9145]"><span class="h-1.5 w-1.5 rounded-full bg-[#FF6B00]"></span> Curated for drivers</p><h2 class="display-font text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">Popular in the garage</h2></div><RouterLink to="/shop" class="hidden items-center gap-1 text-xs font-semibold text-[#8E96A3] transition hover:text-white sm:flex">Explore all <ArrowRight :size="14" /></RouterLink></div>
      <div class="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4"><ProductCard v-for="product in featuredProducts" :key="product.id" :product="product" /></div>
      <RouterLink to="/shop" class="mt-5 flex items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-xs font-semibold text-[#A8AFBA] sm:hidden">Explore all products <ArrowRight :size="14" /></RouterLink>
    </section>

    <section class="grid gap-5 pb-10 lg:grid-cols-[1.3fr_1fr]">
      <div class="relative overflow-hidden rounded-[26px] border border-white/[0.08] bg-[#15191F] p-7 sm:p-10"><div class="absolute -right-10 -top-14 h-48 w-48 rounded-full bg-[#58D5E6]/10 blur-3xl"></div><div class="relative max-w-md"><div class="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-[#58D5E6]/10 text-[#58D5E6]"><Gauge :size="22" /></div><p class="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#58D5E6]">Not sure what fits?</p><h2 class="display-font text-2xl font-bold tracking-[-0.04em] text-white sm:text-3xl">Your car knows best.</h2><p class="mt-3 text-sm leading-relaxed text-[#8E96A3]">Add your vehicle once and we’ll surface the exact fluids, filters, and service intervals for it.</p><button class="mt-6 inline-flex items-center gap-2 text-xs font-bold text-white transition hover:text-[#58D5E6]">Build your garage <ArrowRight :size="14" /></button></div></div>
      <div class="rounded-[26px] border border-white/[0.08] bg-[#14171C] p-7 sm:p-10"><p class="mb-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8E96A3]">The Torque standard</p><div class="space-y-5"><div class="flex gap-3"><ShieldCheck :size="19" class="mt-0.5 shrink-0 text-[#FF6B00]" /><div><p class="text-sm font-semibold text-white">Original, always</p><p class="mt-1 text-xs leading-relaxed text-[#8E96A3]">Sourced from authorized distributors.</p></div></div><div class="flex gap-3"><Wrench :size="19" class="mt-0.5 shrink-0 text-[#FF6B00]" /><div><p class="text-sm font-semibold text-white">Expert selected</p><p class="mt-1 text-xs leading-relaxed text-[#8E96A3]">Real specs, no confusing jargon.</p></div></div><div class="flex gap-3"><SlidersHorizontal :size="19" class="mt-0.5 shrink-0 text-[#FF6B00]" /><div><p class="text-sm font-semibold text-white">Fast, simple fit</p><p class="mt-1 text-xs leading-relaxed text-[#8E96A3]">The right product in a few taps.</p></div></div></div></div>
    </section>
  </div>
</template>
