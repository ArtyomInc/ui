<template>
  <div class="flex w-full flex-col gap-3">
    <div
      v-for="item in components"
      :key="item.title"
      class="border-b border-b-foreground/20 px-10 py-5 last:border-b-0"
    >
      <h2 class="pb-4">{{ item.title }}</h2>
      <h3>CLI :</h3>
      <PreCode lang="sh" :code="item.cmd" class="my-2" />
      <h3>Demo :</h3>
      <div class="my-3">
        <Component :is="item.component" />
      </div>
      <h3 v-if="item.sample">Code :</h3>
      <PreCode :code="item.sample" v-if="item.sample" class="my-2" />
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
import accordion_md from '@/docs/Accordion.vue.md?raw'
import badge_md from '@/docs/Badge.vue.md?raw'
import button_md from '@/docs/Button.vue.md?raw'
import card_md from '@/docs/Card.vue.md?raw'
import checkbox_md from '@/docs/Checkbox.vue.md?raw'
import dialog_md from '@/docs/Dialog.vue.md?raw'
import input_md from '@/docs/Input.vue.md?raw'
import number_field_md from '@/docs/NumberField.vue.md?raw'
import progress_md from '@/docs/Progress.vue.md?raw'
import select_md from '@/docs/Select.vue.md?raw'
import sheet_md from '@/docs/Sheet.vue.md?raw'
import skeleton_md from '@/docs/Skeleton.vue.md?raw'
import slider_md from '@/docs/Slider.vue.md?raw'
import sonner_md from '@/docs/Sonner.vue.md?raw'
import switch_md from '@/docs/Switch.vue.md?raw'
import table_md from '@/docs/Table.vue.md?raw'
import tabs_md from '@/docs/Tabs.vue.md?raw'
import text_area_md from '@/docs/TextArea.vue.md?raw'
import theme_button_md from '@/docs/ThemeButton.vue.md?raw'
import toggle_md from '@/docs/Toggle.vue.md?raw'
import tooltip_md from '@/docs/Tooltip.vue.md?raw'
import { shallowRef, type Component } from 'vue'

const components = shallowRef<
  {
    title: string
    component: Component
    cmd: string
    sample?: string
  }[]
>([
  { cmd: 'npx @artyominc/ui add accordion', component: AccordionSample, sample: accordion_md, title: 'Accordion' },
  { cmd: 'npx @artyominc/ui add badge', component: BadgeSample, sample: badge_md, title: 'Badge' },
  { cmd: 'npx @artyominc/ui add button', component: ButtonSample, sample: button_md, title: 'Button' },
  { cmd: 'npx @artyominc/ui add card', component: CardSample, sample: card_md, title: 'Card' },
  { cmd: 'npx @artyominc/ui add checkbox', component: CheckboxSample, sample: checkbox_md, title: 'Checkbox' },
  { cmd: 'npx @artyominc/ui add dialog', component: DialogSample, sample: dialog_md, title: 'Dialog' },
  { cmd: 'npx @artyominc/ui add input', component: InputSample, sample: input_md, title: 'Input' },
  {
    cmd: 'npx @artyominc/ui add number-field',
    component: NumberFieldSample,
    sample: number_field_md,
    title: 'NumberField'
  },
  { cmd: 'npx @artyominc/ui add progress', component: ProgressSample, sample: progress_md, title: 'Progress' },
  { cmd: 'npx @artyominc/ui add select', component: SelectSample, sample: select_md, title: 'Select' },
  { cmd: 'npx @artyominc/ui add sheet', component: SheetSample, sample: sheet_md, title: 'Sheet' },
  { cmd: 'npx @artyominc/ui add skeleton', component: SkeletonSample, sample: skeleton_md, title: 'Skeleton' },
  { cmd: 'npx @artyominc/ui add slider', component: SliderSample, sample: slider_md, title: 'Slider' },
  { cmd: 'npx @artyominc/ui add sonner', component: SonnerSample, sample: sonner_md, title: 'Sonner' },
  { cmd: 'npx @artyominc/ui add switch', component: SwitchSample, sample: switch_md, title: 'Switch' },
  { cmd: 'npx @artyominc/ui add table', component: TableSample, sample: table_md, title: 'Table' },
  { cmd: 'npx @artyominc/ui add tabs', component: TabsSample, sample: tabs_md, title: 'Tabs' },
  { cmd: 'npx @artyominc/ui add text-area', component: TextAreaSample, sample: text_area_md, title: 'TextArea' },
  {
    cmd: 'npx @artyominc/ui add theme-button',
    component: ThemeButtonSample,
    sample: theme_button_md,
    title: 'ThemeButton'
  },
  { cmd: 'npx @artyominc/ui add toggle', component: ToggleSample, sample: toggle_md, title: 'Toggle' },
  { cmd: 'npx @artyominc/ui add tooltip', component: TooltipSample, sample: tooltip_md, title: 'Tooltip' }
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
