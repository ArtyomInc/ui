<template>
  <div class="mx-auto px-10 py-5 md:max-w-4xl">
    <div>
      <h1>Get Started</h1>
      <p>
        This project takes some components from the shadcn-vue repository, which is itself a port of shadcn-ui to Vue.
        This is a customized version with ui and ux that differs slightly from the vue port and consequently also from
        the original shadcn ui project.
      </p>
      <p>
        This is NOT a component library. It's a collection of re-usable components that you can import with the CLI to
        add to your apps.
      </p>
      <p>What do you mean not a component library?</p>
      <p>
        Pick the components you need. Use the CLI to automatically add the components into your project and customize to
        your needs. The code is yours.
      </p>
      <p>Use this as a reference to build your own component libraries.</p>
    </div>
    <div>
      <h2>Typescript</h2>
      <p>
        This project and the components are written in TypeScript. We recommend using TypeScript for your project as
        well.
      </p>
    </div>
    <div>
      <h2>Installation</h2>
      <p>How to install dependencies and structure your app.</p>
      <h3>1. Create project</h3>
      <p>Start by creating a new Vue project using <Code>vite</Code></p>
      <PreCode class="mb-2">npm create vite@latest</PreCode>
      <h3>2. Add Tailwind and it's configuration</h3>
      <p>
        Install <Code>tailwindcss</Code> and its peer dependencies, then generate your tailwind.config.js and configure
        postcss plugins
      </p>
      <PreCode class="mb-2">npm install -D tailwindcss autoprefixer postcss<br />npx tailwindcss init -p</PreCode>

      <h3>3. Edit tsconfig/jsconfig.json</h3>
      <p>
        Add the code below to the compilerOptions of your <Code>tsconfig.json</Code> so your app can resolve paths
        without error
      </p>
      <PreCode class="mb-2">{{ tsConfig }}</PreCode>
      <h3>4. Update vite.config.ts</h3>
      <p>Add the code below to the vite.config.ts so your app can resolve paths without error</p>
      <PreCode>{{ viteConfig }}</PreCode>
      <h3>5. Run the CLI</h3>
      <PreCode>npx @artyominc/ui start</PreCode>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Code } from '@/components/ui/code'
import { PreCode } from '@/components/ui/pre-code'
import tsConfig from '@/docs/tsconfig.json?raw'
import viteConfig from '@/docs/vite.config.ts?raw'
</script>

<style scoped>
h1 {
  @apply my-5 text-4xl font-bold first:mt-0;
}
h2 {
  @apply my-3 text-2xl font-semibold;
}
h3 {
  @apply my-3 text-xl font-semibold;
}
p {
  @apply my-2;
}
</style>
