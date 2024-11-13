import { type VariantProps, cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'flex cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap text-nowrap rounded-lg align-middle font-medium no-underline outline-none transition-[color_background-color] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default'
    },
    variants: {
      size: {
        default: 'h-8 min-h-8 px-3 py-2',
        icon: 'h-8 w-8 min-w-8 min-h-8'
      },
      variant: {
        danger:
          'bg-danger text-danger-foreground hover:bg-danger/80 drop-shadow-sm shadow-[inset_0_1px_0_0_hsl(var(--danger-foreground)/35%)]',
        default: 'border border-border bg-default text-default-foreground hover:bg-default-foreground/10 ',
        primary:
          'bg-primary drop-shadow-sm text-primary-foreground hover:bg-primary/80 shadow-[inset_0_1px_0_0_hsl(var(--primary-foreground)/35%)]'
      }
    }
  }
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
