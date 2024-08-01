# Installation

How to install dependencies and structure your app.

## 1. Create project

Start by creating a new Vue project using `vite`

```sh
npm create vite@latest
```

## 2. Add Tailwind and its configuration

Install `tailwindcss` and its peer dependencies, then generate your tailwind.config.js and configure postcss plugins

```sh
npm install -D tailwindcss autoprefixer postcss
npx tailwindcss init -p
```

## 3. Edit tsconfig/jsconfig.json

Add the code below to the compilerOptions of your `tsconfig.json` so your app can resolve paths without error

```json
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
    // ...
  }
}
```

## 4. Update vite.config.ts

Add the code below to the vite.config.ts so your app can resolve paths without error

```ts
import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
```

## 5. Run the CLI

```sh
npx @artyominc/ui start
```
