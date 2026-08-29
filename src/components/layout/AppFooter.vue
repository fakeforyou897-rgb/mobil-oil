<script setup lang="ts">
import { ArrowUpRight, Check, Instagram, Linkedin, Mail, MapPin, ShieldCheck, Truck, Youtube } from 'lucide-vue-next'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const email = ref('')
const subscribed = ref(false)

function subscribe() {
  if (!email.value.trim()) return
  subscribed.value = true
}
</script>

<template>
  <footer class="mt-16 border-t border-white/[0.08]">
    <div class="grid gap-10 border-b border-white/[0.08] py-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:py-16">
      <div>
        <RouterLink to="/" class="group inline-flex items-center gap-3">
          <span class="relative grid h-10 w-10 place-items-center rounded-xl bg-[#FF6B00] text-[#0B0D10] shadow-[0_0_24px_rgba(255,107,0,0.2)]"><span class="absolute h-4 w-4 rounded-full border-[2.5px] border-[#0B0D10]"></span><span class="absolute h-[2.5px] w-7 rotate-45 rounded-full bg-[#0B0D10]"></span></span>
          <span class="display-font text-2xl font-bold tracking-[-0.06em] text-white">torque<span class="text-[#FF6B00]">.</span></span>
        </RouterLink>
        <p class="mt-5 max-w-sm text-sm leading-relaxed text-[#8E96A3]">The smarter way to care for your car. Premium fluids, matched to your drive and delivered without the guesswork.</p>
        <div class="mt-7 flex items-center gap-2"><a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Torque on Instagram" class="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-[#8E96A3] transition hover:border-[#FF6B00]/40 hover:text-white"><Instagram :size="15" /></a><a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="Torque on YouTube" class="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-[#8E96A3] transition hover:border-[#FF6B00]/40 hover:text-white"><Youtube :size="15" /></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="Torque on LinkedIn" class="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-[#8E96A3] transition hover:border-[#FF6B00]/40 hover:text-white"><Linkedin :size="15" /></a></div>
      </div>
      <div class="rounded-2xl border border-[#FF6B00]/20 bg-[#FF6B00]/[0.06] p-5 sm:p-7"><div class="flex items-start justify-between gap-4"><div><p class="text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF9145]">The pit stop</p><h2 class="display-font mt-2 text-2xl font-bold tracking-[-0.04em] text-white">Good things, no spam.</h2><p class="mt-2 max-w-md text-xs leading-relaxed text-[#A8AFBA]">Get seasonal care tips, new drops, and a reminder before your next oil change.</p></div><span class="hidden h-10 w-10 place-items-center rounded-xl bg-[#FF6B00] text-[#0B0D10] sm:grid"><Mail :size="18" /></span></div><form v-if="!subscribed" class="mt-5 flex flex-col gap-2 sm:flex-row" @submit.prevent="subscribe"><label class="sr-only" for="footer-email">Email address</label><input id="footer-email" v-model="email" required type="email" placeholder="Your email address" class="h-11 min-w-0 flex-1 rounded-xl border border-white/10 bg-[#0B0D10]/60 px-4 text-xs text-white outline-none placeholder:text-[#68707D] focus:border-[#FF6B00]" /><button class="h-11 rounded-xl bg-[#FF6B00] px-5 text-xs font-bold text-[#0B0D10] transition hover:bg-[#ff8129]">Keep me posted</button></form><p v-else class="mt-5 flex items-center gap-2 rounded-xl bg-[#58D5E6]/10 px-4 py-3 text-xs font-semibold text-[#58D5E6]"><Check :size="15" /> You’re on the list. Watch your inbox.</p><p class="mt-3 text-[10px] text-[#68707D]">By subscribing, you agree to our privacy policy.</p></div>
    </div>

    <div class="grid gap-10 border-b border-white/[0.08] py-12 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1fr] lg:gap-8">
      <div><p class="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8E96A3]">Why Torque</p><div class="space-y-4"><div class="flex gap-3"><ShieldCheck :size="17" class="mt-0.5 shrink-0 text-[#FF6B00]" /><div><p class="text-xs font-semibold text-white">Original products</p><p class="mt-1 text-[11px] leading-relaxed text-[#8E96A3]">Authorized distributors only.</p></div></div><div class="flex gap-3"><Truck :size="17" class="mt-0.5 shrink-0 text-[#58D5E6]" /><div><p class="text-xs font-semibold text-white">Fast, free delivery</p><p class="mt-1 text-[11px] leading-relaxed text-[#8E96A3]">On every order over $35.</p></div></div></div></div>
      <div><p class="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8E96A3]">Explore</p><nav class="space-y-3"><RouterLink to="/shop" class="footer-link">Shop all fluids</RouterLink><RouterLink to="/vehicle" class="footer-link">Find my fit</RouterLink><RouterLink to="/onboarding" class="footer-link">How Torque works</RouterLink><RouterLink to="/search" class="footer-link">Search catalog</RouterLink></nav></div>
      <div><p class="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8E96A3]">Your garage</p><nav class="space-y-3"><RouterLink to="/profile" class="footer-link">Account & profile</RouterLink><RouterLink to="/cart" class="footer-link">Your bag</RouterLink><RouterLink to="/profile" class="footer-link">Orders & tracking</RouterLink><RouterLink to="/profile" class="footer-link">Saved products</RouterLink></nav></div>
      <div><p class="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8E96A3]">Need a hand?</p><div class="space-y-3"><a href="mailto:hello@torque.app" class="footer-link flex items-center gap-2"><Mail :size="14" /> hello@torque.app</a><a href="tel:+18008677253" class="footer-link flex items-center gap-2"><MapPin :size="14" /> 1-800-TORQUE</a><p class="pt-1 text-[11px] leading-relaxed text-[#68707D]">Mon–Fri, 9am–6pm CT<br />Based in Austin, shipping everywhere.</p></div></div>
    </div>

    <div class="flex flex-col gap-4 py-6 text-[10px] text-[#68707D] sm:flex-row sm:items-center sm:justify-between"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><span>© 2025 Torque, Inc.</span><a href="#" class="transition hover:text-white">Privacy</a><a href="#" class="transition hover:text-white">Terms</a><a href="#" class="transition hover:text-white">Returns</a></div><div class="flex items-center gap-2"><span class="grid h-5 w-5 place-items-center rounded-full bg-[#58D5E6]/10 text-[#58D5E6]"><ArrowUpRight :size="11" /></span> Made for the long haul.</div></div>
  </footer>
</template>

<style scoped>
.footer-link { display: inline-flex; color: #8e96a3; font-size: 12px; transition: color 160ms ease; }
.footer-link:hover { color: white; }
:global([data-theme='light']) .footer-link { color: #68717d; }
:global([data-theme='light']) .footer-link:hover { color: #12161d; }
</style>
