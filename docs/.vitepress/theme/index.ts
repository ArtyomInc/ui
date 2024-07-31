// @ts-ignore
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
// @ts-ignore
import ExampleOfAccordion from '@/samples/Accordion.vue'
// @ts-ignore
import { Badge } from '@/components/ui/badge'
// @ts-ignore
import ExampleOfBadge from '@/samples/Badge.vue'
// @ts-ignore
import { Button } from '@/components/ui/button'
// @ts-ignore
import ExampleOfButton from '@/samples/Button.vue'
// @ts-ignore
import { Card } from '@/components/ui/card'
// @ts-ignore
import ExampleOfCard from '@/samples/Card.vue'
// @ts-ignore
import { Checkbox } from '@/components/ui/checkbox'
// @ts-ignore
import ExampleOfCheckbox from '@/samples/Checkbox.vue'
// @ts-ignore
import { Dialog } from '@/components/ui/dialog'
// @ts-ignore
import ExampleOfDialog from '@/samples/Dialog.vue'
// @ts-ignore
import { Input } from '@/components/ui/input'
// @ts-ignore
import ExampleOfInput from '@/samples/Input.vue'
// @ts-ignore
import { Progress } from '@/components/ui/progress'
// @ts-ignore
import ExampleOfProgress from '@/samples/Progress.vue'
// @ts-ignore
import { Select } from '@/components/ui/select'
// @ts-ignore
import ExampleOfSelect from '@/samples/Select.vue'
// @ts-ignore
import { Sheet } from '@/components/ui/sheet'
// @ts-ignore
import ExampleOfSheet from '@/samples/Sheet.vue'
// @ts-ignore
import { Sonner } from '@/components/ui/sonner'
// @ts-ignore
import ExampleOfSonner from '@/samples/Sonner.vue'
// @ts-ignore
import { ThemeButton } from '@/components/ui/theme-button'
// @ts-ignore
import ExampleOfThemeButton from '@/samples/ThemeButton.vue'
// @ts-ignore
import { Toggle } from '@/components/ui/toggle'
// @ts-ignore
import ExampleOfToggle from '@/samples/Toggle.vue'
import { createPinia } from 'pinia'
import DefaultTheme from 'vitepress/theme'
import './styles/main.css'
import './styles/tailwind.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    const pinia = createPinia()
    app.use(pinia)
    //Accordion
    app.component('Accordion', Accordion)
    app.component('AccordionContent', AccordionContent)
    app.component('AccordionItem', AccordionItem)
    app.component('AccordionTrigger', AccordionTrigger)
    app.component('ExampleOfAccordion', ExampleOfAccordion)
    //Badge
    app.component('Badge', Badge)
    app.component('ExampleOfBadge', ExampleOfBadge)
    //Button
    app.component('Button', Button)
    app.component('ExampleOfButton', ExampleOfButton)
    //Card
    app.component('Card', Card)
    app.component('ExampleOfCard', ExampleOfCard)
    //Checkbox
    app.component('Checkbox', Checkbox)
    app.component('ExampleOfCheckbox', ExampleOfCheckbox)
    //Dialog
    app.component('Dialog', Dialog)
    app.component('ExampleOfDialog', ExampleOfDialog)
    //Input
    app.component('Input', Input)
    app.component('ExampleOfInput', ExampleOfInput)
    //Progress
    app.component('Progress', Progress)
    app.component('ExampleOfProgress', ExampleOfProgress)
    //Select
    app.component('Select', Select)
    app.component('ExampleOfSelect', ExampleOfSelect)
    //Sheet
    app.component('Sheet', Sheet)
    app.component('ExampleOfSheet', ExampleOfSheet)
    //Sonner
    app.component('Sonner', Sonner)
    app.component('ExampleOfSonner', ExampleOfSonner)
    //ThemeButton
    app.component('ThemeButton', ThemeButton)
    app.component('ExampleOfThemeButton', ExampleOfThemeButton)
    //Toggle
    app.component('Toggle', Toggle)
    app.component('ExampleOfToggle', ExampleOfToggle)
  }
}
