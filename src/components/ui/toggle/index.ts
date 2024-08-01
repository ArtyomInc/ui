import { type VariantProps, cva } from 'class-variance-authority'

export { default as Toggle } from './Toggle.vue'

export const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-foreground/10 data-[state=on]:text-foreground',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default'
    },
    variants: {
      size: {
        default: 'h-8 w-8 px-3'
      },
      variant: {
        default: 'border border-border [border-style:solid] bg-default shadow-sm hover:bg-foreground/5 cursor-pointer'
      }
    }
  }
)

export type ToggleVariants = VariantProps<typeof toggleVariants>
