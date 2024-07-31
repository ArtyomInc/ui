# tailwindcss

## Install Tailwind CSS

Install `tailwindcss` and its peer dependencies, then generate your `tailwind.config.js` and `postcss.config.js` files.

```sh
bun install -D tailwindcss postcss autoprefixer
bunx tailwindcss init -p
```

## Configure your template paths

Add the paths to all of your template files in your `tailwind.config.js` file.

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  darkMode: 'class',
  plugins: [],
  theme: {
    extend: {
      animation: {
        apparition: 'appear 0.5s ease-in-out forwards',
        rollbounce: 'roll 1.5s linear infinite'
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
```

## Configure your css file

Add the `@tailwind` directives for each of Tailwind’s layers to your `./src/style.css` file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: 0 0% 100%;
  --foreground: 240 6% 25%;
  --card: 0 0% 100%;
  --card-foreground: 240 6% 25%;
  --default: 240 4.8% 95.9%;
  --default-foreground: 240 6% 25%;
  --primary: 240 6% 25%;
  --primary-foreground: 0 0% 98%;
  --danger: 0 72.22% 50.59%;
  --danger-foreground: 0 0% 98%;
  --border: 0 0% 75%;
  --ring: 240 5% 64.9%;
}

.dark {
  --background: 240 7% 11%;
  --foreground: 60 11% 86%;
  --default: 240 4% 9%;
  --default-foreground: 60 11% 86%;
  --primary: 60 11% 86%;
  --primary-foreground: 240 5.9% 10%;
  --card: 240 4% 9%;
  --card-foreground: 60 11% 86%;
  --danger: 0 72% 51%;
  --danger-foreground: 0 85.7% 97.3%;
  --border: 0 0% 25%;
  --ring: 0 0% 55%;
}
```

### Sources

[Tailwind CSS](https://tailwindcss.com/)

[Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite#vue)
