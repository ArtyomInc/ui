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
      <h3>Code :</h3>
      <PreCode class="my-2" v-if="item.content">{{ item.content }}</PreCode>
    </div>
  </div>
</template>

<script setup lang="ts">
import AccordionSample from '@/components/samples/Accordion.vue'
import AccordionContent from '@/components/samples/Accordion.vue?raw'
import BadgeSample from '@/components/samples/Badge.vue'
import BadgeContent from '@/components/samples/Badge.vue?raw'
import ButtonSample from '@/components/samples/Button.vue'
import ButtonContent from '@/components/samples/Button.vue?raw'
import CardSample from '@/components/samples/Card.vue'
import CardContent from '@/components/samples/Card.vue?raw'
import CheckboxSample from '@/components/samples/Checkbox.vue'
import CheckboxContent from '@/components/samples/Checkbox.vue?raw'
import DialogSample from '@/components/samples/Dialog.vue'
import DialogContent from '@/components/samples/Dialog.vue?raw'
import InputSample from '@/components/samples/Input.vue'
import InputContent from '@/components/samples/Input.vue?raw'
import NumberFieldSample from '@/components/samples/NumberField.vue'
import NumberFieldContent from '@/components/samples/NumberField.vue?raw'
import ProgressSample from '@/components/samples/Progress.vue'
import ProgressContent from '@/components/samples/Progress.vue?raw'
import SelectSample from '@/components/samples/Select.vue'
import SelectContent from '@/components/samples/Select.vue?raw'
import SheetSample from '@/components/samples/Sheet.vue'
import SheetContent from '@/components/samples/Sheet.vue?raw'
import SkeletonSample from '@/components/samples/Skeleton.vue'
import SkeletonContent from '@/components/samples/Skeleton.vue?raw'
import SliderSample from '@/components/samples/Slider.vue'
import SliderContent from '@/components/samples/Slider.vue?raw'
import SonnerSample from '@/components/samples/Sonner.vue'
import SonnerContent from '@/components/samples/Sonner.vue?raw'
import SwitchSample from '@/components/samples/Switch.vue'
import SwitchContent from '@/components/samples/Switch.vue?raw'
import TableSample from '@/components/samples/Table.vue'
import TableContent from '@/components/samples/Table.vue?raw'
import TabsSample from '@/components/samples/Tabs.vue'
import TabsContent from '@/components/samples/Tabs.vue?raw'
import TextAreaSample from '@/components/samples/TextArea.vue'
import TextAreaContent from '@/components/samples/TextArea.vue?raw'
import ThemeButtonSample from '@/components/samples/ThemeButton.vue'
import ThemeButtonContent from '@/components/samples/ThemeButton.vue?raw'
import ToggleSample from '@/components/samples/Toggle.vue'
import ToggleContent from '@/components/samples/Toggle.vue?raw'
import TooltipSample from '@/components/samples/Tooltip.vue'
import TooltipContent from '@/components/samples/Tooltip.vue?raw'
import { PreCode } from '@/components/ui/pre-code'
import { shallowRef, type Component } from 'vue'

const components = shallowRef<
  {
    title: string
    component: Component
    cmd: string
    content: string
  }[]
>([
  { cmd: 'npx @artyominc/ui add accordion', component: AccordionSample, content: AccordionContent, title: 'Accordion' },
  { cmd: 'npx @artyominc/ui add badge', component: BadgeSample, content: BadgeContent, title: 'Badge' },
  { cmd: 'npx @artyominc/ui add button', component: ButtonSample, content: ButtonContent, title: 'Button' },
  { cmd: 'npx @artyominc/ui add card', component: CardSample, content: CardContent, title: 'Card' },
  { cmd: 'npx @artyominc/ui add checkbox', component: CheckboxSample, content: CheckboxContent, title: 'Checkbox' },
  { cmd: 'npx @artyominc/ui add dialog', component: DialogSample, content: DialogContent, title: 'Dialog' },
  { cmd: 'npx @artyominc/ui add input', component: InputSample, content: InputContent, title: 'Input' },
  {
    cmd: 'npx @artyominc/ui add number-field',
    component: NumberFieldSample,
    content: NumberFieldContent,
    title: 'NumberField'
  },
  { cmd: 'npx @artyominc/ui add progress', component: ProgressSample, content: ProgressContent, title: 'Progress' },
  { cmd: 'npx @artyominc/ui add select', component: SelectSample, content: SelectContent, title: 'Select' },
  { cmd: 'npx @artyominc/ui add sheet', component: SheetSample, content: SheetContent, title: 'Sheet' },
  { cmd: 'npx @artyominc/ui add skeleton', component: SkeletonSample, content: SkeletonContent, title: 'Skeleton' },
  { cmd: 'npx @artyominc/ui add slider', component: SliderSample, content: SliderContent, title: 'Slider' },
  { cmd: 'npx @artyominc/ui add sonner', component: SonnerSample, content: SonnerContent, title: 'Sonner' },
  { cmd: 'npx @artyominc/ui add switch', component: SwitchSample, content: SwitchContent, title: 'Switch' },
  { cmd: 'npx @artyominc/ui add table', component: TableSample, content: TableContent, title: 'Table' },
  { cmd: 'npx @artyominc/ui add tabs', component: TabsSample, content: TabsContent, title: 'Tabs' },
  { cmd: 'npx @artyominc/ui add text-area', component: TextAreaSample, content: TextAreaContent, title: 'TextArea' },
  {
    cmd: 'npx @artyominc/ui add theme-button',
    component: ThemeButtonSample,
    content: ThemeButtonContent,
    title: 'ThemeButton'
  },
  { cmd: 'npx @artyominc/ui add toggle', component: ToggleSample, content: ToggleContent, title: 'Toggle' },
  { cmd: 'npx @artyominc/ui add tooltip', component: TooltipSample, content: TooltipContent, title: 'Tooltip' }
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
