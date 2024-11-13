<template>
  <div class="flex w-full flex-col gap-3">
    <div
      v-for="item in components"
      :key="item.title"
      class="border-b border-b-foreground/20 px-10 py-5 last:border-b-0"
    >
      <h2 class="pb-4">{{ item.title }}</h2>
      <h3>CLI :</h3>
      <PreCode class="my-2">{{ item.cmd }}</PreCode>
      <h3>Demo :</h3>
      <div class="my-3">
        <Component :is="item.component" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AccordionSample from '@/components/samples/Accordion.vue'
import BadgeSample from '@/components/samples/Badge.vue'
import ButtonSample from '@/components/samples/Button.vue'
import CardSample from '@/components/samples/Card.vue'
import CheckboxSample from '@/components/samples/Checkbox.vue'
import DialogSample from '@/components/samples/Dialog.vue'
import InputSample from '@/components/samples/Input.vue'
import NumberFieldSample from '@/components/samples/NumberField.vue'
import ProgressSample from '@/components/samples/Progress.vue'
import SelectSample from '@/components/samples/Select.vue'
import SheetSample from '@/components/samples/Sheet.vue'
import SkeletonSample from '@/components/samples/Skeleton.vue'
import SliderSample from '@/components/samples/Slider.vue'
import SonnerSample from '@/components/samples/Sonner.vue'
import SwitchSample from '@/components/samples/Switch.vue'
import TableSample from '@/components/samples/Table.vue'
import TabsSample from '@/components/samples/Tabs.vue'
import TextAreaSample from '@/components/samples/TextArea.vue'
import ThemeButtonSample from '@/components/samples/ThemeButton.vue'
import ToggleSample from '@/components/samples/Toggle.vue'
import TooltipSample from '@/components/samples/Tooltip.vue'
import { PreCode } from '@/components/ui/pre-code'
import { shallowRef, type Component } from 'vue'

const components = shallowRef<
  {
    title: string
    component: Component
    cmd: string
  }[]
>([
  { cmd: 'npx @artyominc/ui add accordion', component: AccordionSample, title: 'Accordion' },
  { cmd: 'npx @artyominc/ui add badge', component: BadgeSample, title: 'Badge' },
  { cmd: 'npx @artyominc/ui add button', component: ButtonSample, title: 'Button' },
  { cmd: 'npx @artyominc/ui add card', component: CardSample, title: 'Card' },
  { cmd: 'npx @artyominc/ui add checkbox', component: CheckboxSample, title: 'Checkbox' },
  { cmd: 'npx @artyominc/ui add dialog', component: DialogSample, title: 'Dialog' },
  { cmd: 'npx @artyominc/ui add input', component: InputSample, title: 'Input' },
  {
    cmd: 'npx @artyominc/ui add number-field',
    component: NumberFieldSample,
    title: 'NumberField'
  },
  { cmd: 'npx @artyominc/ui add progress', component: ProgressSample, title: 'Progress' },
  { cmd: 'npx @artyominc/ui add select', component: SelectSample, title: 'Select' },
  { cmd: 'npx @artyominc/ui add sheet', component: SheetSample, title: 'Sheet' },
  { cmd: 'npx @artyominc/ui add skeleton', component: SkeletonSample, title: 'Skeleton' },
  { cmd: 'npx @artyominc/ui add slider', component: SliderSample, title: 'Slider' },
  { cmd: 'npx @artyominc/ui add sonner', component: SonnerSample, title: 'Sonner' },
  { cmd: 'npx @artyominc/ui add switch', component: SwitchSample, title: 'Switch' },
  { cmd: 'npx @artyominc/ui add table', component: TableSample, title: 'Table' },
  { cmd: 'npx @artyominc/ui add tabs', component: TabsSample, title: 'Tabs' },
  { cmd: 'npx @artyominc/ui add text-area', component: TextAreaSample, title: 'TextArea' },
  {
    cmd: 'npx @artyominc/ui add theme-button',
    component: ThemeButtonSample,
    title: 'ThemeButton'
  },
  { cmd: 'npx @artyominc/ui add toggle', component: ToggleSample, title: 'Toggle' },
  { cmd: 'npx @artyominc/ui add tooltip', component: TooltipSample, title: 'Tooltip' }
])
</script>

<style scoped>
h2 {
  @apply text-2xl font-semibold;
}
h3 {
  @apply text-xl font-semibold;
}
</style>
