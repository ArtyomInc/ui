import { type VariantProps, cva } from 'class-variance-authority'

export { default as Badge } from './Badge.vue'

export const badgeVariants = cva(
  'inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 whitespace-nowrap rounded-full',
  {
    defaultVariants: {
      variant: 'default'
    },
    variants: {
      variant: {
        danger: 'border-transparent bg-danger text-danger-foreground shadow',
        default: 'border-transparent bg-default text-default-foreground shadow ',
        primary: 'border-transparent bg-primary text-primary-foreground shadow'
      }
    }
  }
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
