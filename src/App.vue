<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { Bell, CarFront, Menu, Moon, Search, ShoppingBag, Sparkles, Sun, UserRound, X } from 'lucide-vue-next'
import AppFooter from '@/components/layout/AppFooter.vue'
import { useCartStore } from '@/stores/cart'
import { useUiStore } from '@/stores/ui'

const route = useRoute()
const cart = useCartStore()
const ui = useUiStore()
const mobileMenuOpen = ref(false)
const cartLabel = computed(() => cart.count > 0 ? `${cart.count}` : '')

const navItems = [
  { label: 'Discover', to: '/', name: 'home' },
  { label: 'Shop oils', to: '/shop', name: 'shop' },
  { label: 'Your garage', to: '/profile', name: 'profile' },
]
</script>

<template>
  <div class="min-h-screen overflow-x-hidden bg-[#0B0D10] text-[#F4F5F7]">
    <header class="sticky top-0 z-40 border-b border-white/[0.07] bg-[#0B0D10]/90 backdrop-blur-xl">
      <div class="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-[84px] lg:px-12">
        <RouterLink to="/" class="group flex items-center gap-3" @click="mobileMenuOpen = false">
          <span class="relative grid h-9 w-9 place-items-center rounded-xl bg-[#FF6B00] text-[#0B0D10] shadow-[0_0_24px_rgba(255,107,0,0.25)]">
            <span class="absolute h-4 w-4 rounded-full border-[2.5px] border-[#0B0D10]"></span>
            <span class="absolute h-[2.5px] w-7 rotate-45 rounded-full bg-[#0B0D10]"></span>
          </span>
          <span class="display-font text-[22px] font-bold tracking-[-0.06em]">torque<span class="text-[#FF6B00]">.</span></span>
        </RouterLink>

        <nav class="hidden items-center gap-9 lg:flex">
          <RouterLink v-for="item in navItems" :key="item.name" :to="item.to" class="text-[13px] font-medium text-[#8E96A3] transition hover:text-white" :class="{ 'text-white': route.name === item.name }">{{ item.label }}</RouterLink>
        </nav>

        <div class="flex items-center gap-2 sm:gap-3">
          <RouterLink to="/search" aria-label="Search" class="hidden h-10 w-10 place-items-center rounded-full text-[#8E96A3] transition hover:bg-white/5 hover:text-white sm:grid"><Search :size="19" /></RouterLink>
          <button :aria-label="ui.isLight ? 'Switch to dark theme' : 'Switch to light theme'" :title="ui.isLight ? 'Switch to dark theme' : 'Switch to light theme'" class="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-[#14171C] text-[#8E96A3] transition hover:border-[#FF6B00]/40 hover:text-[#FF9145]" @click="ui.toggle"><Sun v-if="ui.isLight" :size="18" /><Moon v-else :size="18" /></button>
          <button aria-label="Notifications" class="hidden h-10 w-10 place-items-center rounded-full text-[#8E96A3] transition hover:bg-white/5 hover:text-white sm:grid"><Bell :size="19" /></button>
          <RouterLink to="/profile" aria-label="Profile" class="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-[#14171C] text-[#8E96A3] transition hover:border-white/20 hover:text-white"><UserRound :size="18" /></RouterLink>
          <RouterLink to="/cart" aria-label="Cart" class="relative grid h-10 w-10 place-items-center rounded-full bg-[#FF6B00] text-[#0B0D10] transition hover:bg-[#ff8129]"><ShoppingBag :size="18" stroke-width="2.5" /><span v-if="cartLabel" class="absolute -right-1 -top-1 grid h-[18px] min-w-[18px] place-items-center rounded-full border-2 border-[#0B0D10] bg-[#58D5E6] px-1 text-[9px] font-bold">{{ cartLabel }}</span></RouterLink>
          <button aria-label="Open menu" class="grid h-10 w-10 place-items-center rounded-full text-[#8E96A3] sm:hidden" @click="mobileMenuOpen = !mobileMenuOpen"><X v-if="mobileMenuOpen" :size="20" /><Menu v-else :size="20" /></button>
        </div>
      </div>
      <div v-if="mobileMenuOpen" class="border-t border-white/[0.07] bg-[#101216] px-5 py-4 sm:hidden">
        <nav class="flex flex-col gap-1">
          <RouterLink v-for="item in navItems" :key="item.name" :to="item.to" class="rounded-xl px-3 py-3 text-sm text-[#8E96A3]" :class="{ 'bg-white/5 text-white': route.name === item.name }" @click="mobileMenuOpen = false">{{ item.label }}</RouterLink>
        </nav>
      </div>
    </header>

    <main class="mx-auto max-w-[1440px] px-5 pb-28 sm:px-8 lg:px-12 lg:pb-12">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in"><component :is="Component" /></Transition>
      </RouterView>
    </main>

    <AppFooter />

    <nav class="fixed bottom-0 left-0 right-0 z-40 border-t border-white/[0.08] bg-[#111419]/95 px-5 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl sm:hidden">
      <div class="mx-auto flex max-w-md items-center justify-around">
        <RouterLink to="/" class="flex flex-col items-center gap-1 text-[10px] text-[#8E96A3]" :class="{ 'text-[#FF6B00]': route.name === 'home' }"><Sparkles :size="19" /><span>Discover</span></RouterLink>
        <RouterLink to="/shop" class="flex flex-col items-center gap-1 text-[10px] text-[#8E96A3]" :class="{ 'text-[#FF6B00]': route.name === 'shop' }"><Search :size="19" /><span>Shop</span></RouterLink>
        <RouterLink to="/cart" class="relative flex flex-col items-center gap-1 text-[10px] text-[#8E96A3]" :class="{ 'text-[#FF6B00]': route.name === 'cart' }"><ShoppingBag :size="19" /><span>Bag</span><span v-if="cartLabel" class="absolute -right-3 -top-2 grid h-4 min-w-4 place-items-center rounded-full bg-[#58D5E6] px-1 text-[9px] font-bold text-[#0B0D10]">{{ cartLabel }}</span></RouterLink>
        <RouterLink to="/profile" class="flex flex-col items-center gap-1 text-[10px] text-[#8E96A3]" :class="{ 'text-[#FF6B00]': route.name === 'profile' }"><CarFront :size="19" /><span>Garage</span></RouterLink>
      </div>
    </nav>
  </div>
</template>
