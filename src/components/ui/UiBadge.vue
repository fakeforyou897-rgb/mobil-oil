<script setup lang="ts">
withDefaults(defineProps<{ tone?: 'orange' | 'cyan' | 'neutral' }>(), { tone: 'neutral' })
</script>

<template>
  <span class="inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em]" :class="{ 'bg-[#FF6B00] text-[#0B0D10]': tone === 'orange', 'bg-[#58D5E6]/10 text-[#58D5E6]': tone === 'cyan', 'bg-white/10 text-[#A8AFBA]': tone === 'neutral' }"><slot /></span>
</template>
