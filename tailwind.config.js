import animate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './docs/.vitepress/theme/**/*.{vue,js,ts,jsx,tsx,md}',
    './docs/components/**/*.{vue,js,ts,jsx,tsx,md}',
    './src/**/*.{vue,js,ts,md}'
  ],
  darkMode: 'class',
  plugins: [animate],
  theme: {
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out'
      },
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        border: 'hsl(var(--border) / <alpha-value>)',
        card: 'hsl(var(--card) / <alpha-value>)',
        'card-foreground': 'hsl(var(--card-foreground) / <alpha-value>)',
        danger: 'hsl(var(--danger) / <alpha-value>)',
        'danger-foreground': 'hsl(var(--danger-foreground) / <alpha-value>)',
        default: 'hsl(var(--default) / <alpha-value>)',
        'default-foreground': 'hsl(var(--default-foreground) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: 'hsl(var(--primary) / <alpha-value>)',
        'primary-foreground': 'hsl(var(--primary-foreground) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' }
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 }
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 }
        },
        'progress-animation': {
          '0%': { width: '100%' },
          '100%': { width: '0%' }
        },
        'progress-undefined': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' }
        },
        'scale-out': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' }
        },
        'slide-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'slide-out': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' }
        }
      }
    }
  }
}
