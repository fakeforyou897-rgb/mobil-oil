<script setup lang="ts">
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'reka-ui'

defineProps<{ items: Array<{ value: string; title: string; content: string }> }>()
</script>

<template>
  <AccordionRoot type="single" collapsible class="space-y-2">
    <AccordionItem v-for="item in items" :key="item.value" :value="item.value" class="overflow-hidden rounded-xl border border-white/[0.08] bg-[#14171C]">
      <AccordionHeader><AccordionTrigger class="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-semibold text-white"><span>{{ item.title }}</span><span class="text-[#FF9145]">+</span></AccordionTrigger></AccordionHeader>
      <AccordionContent class="border-t border-white/[0.08] px-4 py-4 text-xs leading-relaxed text-[#8E96A3]">{{ item.content }}</AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
