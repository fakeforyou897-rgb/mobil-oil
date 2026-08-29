<script setup lang="ts">
withDefaults(defineProps<{ variant?: 'primary' | 'secondary' | 'ghost'; type?: 'button' | 'submit' | 'reset' }>(), { variant: 'primary', type: 'button' })
</script>

<template>
  <button :type="type" class="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition active:scale-[0.98]" :class="{ 'bg-[#FF6B00] text-[#0B0D10] hover:bg-[#ff8129]': variant === 'primary', 'border border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.07]': variant === 'secondary', 'text-[#A8AFBA] hover:bg-white/[0.06] hover:text-white': variant === 'ghost' }"><slot /></button>
</template>
