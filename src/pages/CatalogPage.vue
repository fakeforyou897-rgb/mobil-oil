<script setup lang="ts">
import { computed, ref } from 'vue'
import { ArrowDownUp, ChevronDown, Filter, LayoutGrid, List, Search, SlidersHorizontal, X } from 'lucide-vue-next'
import ProductCard from '@/components/product/ProductCard.vue'
import { products } from '@/data/products'

const query = ref('')
const activeFilter = ref('All')
const filters = ['All', '5W-30', '5W-40', '0W-20', 'Full Synthetic']
const showFilters = ref(false)
const view = ref<'grid' | 'list'>('grid')
const filteredProducts = computed(() => products.filter((product) => {
  const searchable = `${product.name} ${product.brand} ${product.viscosity} ${product.base}`.toLowerCase()
  const matchesQuery = searchable.includes(query.value.toLowerCase())
  const matchesFilter = activeFilter.value === 'All' || product.viscosity === activeFilter.value || product.base === activeFilter.value
  return matchesQuery && matchesFilter
}))
</script>

<template>
  <div class="pb-10 pt-10 sm:pt-14">
    <div class="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p class="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF9145]">The shop</p><h1 class="display-font text-4xl font-bold tracking-[-0.06em] text-white sm:text-5xl">Find your fluid<span class="text-[#FF6B00]">.</span></h1><p class="mt-3 max-w-md text-sm text-[#8E96A3]">Premium protection for every engine, from daily drivers to weekend machines.</p></div><div class="flex items-center gap-2 text-xs text-[#8E96A3]"><span class="grid h-8 w-8 place-items-center rounded-full bg-[#58D5E6]/10 text-[#58D5E6]"><span class="h-2 w-2 rounded-full bg-[#58D5E6]"></span></span> In stock and ready to ship</div></div>
    <div class="sticky top-[72px] z-30 -mx-5 border-y border-white/[0.07] bg-[#0B0D10]/95 px-5 py-4 backdrop-blur-xl sm:static sm:mx-0 sm:border-0 sm:bg-transparent sm:p-0"><div class="flex gap-2"><label class="relative flex min-w-0 flex-1 items-center"><Search :size="17" class="absolute left-4 text-[#8E96A3]" /><input v-model="query" type="search" placeholder="Search by brand, viscosity or spec" class="h-12 w-full rounded-xl border border-white/10 bg-[#14171C] pl-11 pr-4 text-sm text-white outline-none placeholder:text-[#68707D] focus:border-[#FF6B00]/60" /></label><button class="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-[#14171C] text-[#A8AFBA] transition hover:border-white/20 hover:text-white sm:hidden" aria-label="Open filters" @click="showFilters = !showFilters"><Filter :size="18" /></button><button class="hidden h-12 items-center gap-2 rounded-xl border border-white/10 bg-[#14171C] px-4 text-xs font-semibold text-[#A8AFBA] transition hover:text-white sm:flex" @click="showFilters = !showFilters"><SlidersHorizontal :size="16" /> Filters</button></div>
      <div class="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1"><button v-for="filter in filters" :key="filter" class="shrink-0 rounded-lg border px-3 py-2 text-[11px] font-semibold transition" :class="activeFilter === filter ? 'border-[#FF6B00]/50 bg-[#FF6B00]/10 text-[#FF9145]' : 'border-white/[0.08] text-[#8E96A3] hover:border-white/20 hover:text-white'" @click="activeFilter = filter">{{ filter }}</button></div></div>
    <div v-if="showFilters" class="mt-5 rounded-2xl border border-white/10 bg-[#14171C] p-5"><div class="flex items-center justify-between"><h2 class="text-sm font-semibold text-white">Advanced filters</h2><button aria-label="Close filters" class="text-[#8E96A3]" @click="showFilters = false"><X :size="17" /></button></div><div class="mt-5 grid gap-3 sm:grid-cols-3"><button v-for="item in ['API SP certified', 'Under $50', 'Available now']" :key="item" class="flex items-center justify-between rounded-xl border border-white/[0.08] px-4 py-3 text-xs text-[#A8AFBA] hover:border-[#FF6B00]/40"><span>{{ item }}</span><span class="h-4 w-4 rounded border border-white/20"></span></button></div></div>
    <div class="mb-5 mt-9 flex items-center justify-between"><p class="text-xs text-[#8E96A3]"><span class="font-semibold text-white">{{ filteredProducts.length }} products</span> matched for you</p><div class="flex items-center gap-2"><button aria-label="Grid view" class="grid h-8 w-8 place-items-center rounded-lg" :class="view === 'grid' ? 'bg-white/10 text-white' : 'text-[#68707D]'" @click="view = 'grid'"><LayoutGrid :size="16" /></button><button aria-label="List view" class="grid h-8 w-8 place-items-center rounded-lg" :class="view === 'list' ? 'bg-white/10 text-white' : 'text-[#68707D]'" @click="view = 'list'"><List :size="16" /></button><button class="ml-2 hidden items-center gap-1 text-[11px] font-semibold text-[#A8AFBA] sm:flex">Sort: Featured <ChevronDown :size="14" /></button><button class="grid h-8 w-8 place-items-center rounded-lg text-[#68707D] sm:hidden" aria-label="Sort"><ArrowDownUp :size="15" /></button></div></div>
    <div v-if="filteredProducts.length" class="grid gap-3 sm:gap-5" :class="view === 'grid' ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2'"><ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" /></div>
    <div v-else class="rounded-2xl border border-dashed border-white/10 py-20 text-center"><Search :size="28" class="mx-auto text-[#68707D]" /><h2 class="mt-4 text-lg font-semibold text-white">No fluids found</h2><p class="mt-2 text-sm text-[#8E96A3]">Try a different brand, viscosity or filter.</p><button class="mt-5 text-xs font-bold text-[#FF9145]" @click="query = ''; activeFilter = 'All'">Clear search</button></div>
  </div>
</template>
