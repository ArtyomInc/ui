#!/usr/bin/env node
import { exec } from 'child_process'
import { Command } from 'commander'
import { promises as fs } from 'fs'
import inquirer from 'inquirer'
import path from 'path'
import util from 'util'

import fetchGithub from './utils/fetchGithub.mjs'

const dependencies = [
  { dev: true, name: '@iconify/vue' },
  { dev: false, name: '@vueuse/core' },
  { dev: false, name: 'class-variance-authority' },
  { dev: false, name: 'clsx' },
  { dev: false, name: 'pinia' },
  { dev: false, name: 'radix-vue' },
  { dev: false, name: 'tailwind-merge' },
  { dev: false, name: 'tailwindcss-animate' }
]

const components = [
  {
    files: ['index.ts', 'Accordion.vue', 'AccordionContent.vue', 'AccordionItem.vue', 'AccordionTrigger.vue'],
    name: 'accordion'
  },
  { files: ['index.ts', 'Badge.vue'], name: 'badge' },
  { files: ['index.ts', 'Button.vue'], name: 'button' },
  { files: ['index.ts', 'Card.vue'], name: 'card' },
  { files: ['index.ts', 'Checkbox.vue'], name: 'checkbox' },
  { files: ['index.ts', 'Dialog.vue'], name: 'dialog' },
  { files: ['index.ts', 'Input.vue'], name: 'input' },
  { files: ['index.ts', 'Progress.vue'], name: 'progress' },
  { files: ['index.ts', 'Select.vue'], name: 'select' },
  { files: ['index.ts', 'Sheet.vue'], name: 'sheet' },
  { files: ['index.ts', 'Skeleton.vue'], name: 'skeleton' },
  { files: ['index.ts', 'Sonner.vue'], name: 'sonner' },
  {
    files: [
      'index.ts',
      'Table.vue',
      'TableBody.vue',
      'TableCell.vue',
      'TableEmpty.vue',
      'TableFooter.vue',
      'TableHead.vue',
      'TableHeader.vue',
      'TableRow.vue'
    ],
    name: 'table'
  },
  { files: ['index.ts', 'ThemeButton.vue'], name: 'theme-button' },
  { files: ['index.ts', 'Toggle.vue'], name: 'toggle' },
  {
    files: ['index.ts', 'Tooltip.vue', 'TooltipContent.vue', 'TooltipProvider.vue', 'TooltipTrigger.vue'],
    name: 'tooltip'
  }
]

const program = new Command()

program
  .command('start')
  .description('Global setup of the UI library')
  .action(async () => {
    console.log('Welcome to the CLI of @artyominc/ui')

    // Ask for the Tailwind CSS file path/name
    const { resStylePath } = await inquirer.prompt([
      {
        default: 'src/style.css',
        message: 'Where place tailwind.css file ? (your css will be replaced)',
        name: 'resStylePath',
        type: 'input'
      }
    ])
    console.log(resStylePath)
    const targetStyleDir = path.dirname(resStylePath)
    try {
      await fs.access(targetStyleDir)
    } catch {
      await fs.mkdir(targetStyleDir, { recursive: true })
    }
    const styleFileContent = await fetchGithub('ArtyomInc', 'ui', 'docs/.vitepress/theme/styles/tailwind.css')
    await fs.writeFile(resStylePath, styleFileContent)
    console.log('tailwind.css file created/replaced !')

    // Ask for the Tailwind config file path/name
    const { resTailwindPath } = await inquirer.prompt([
      {
        default: 'tailwind.config.js',
        message: 'Where place tailwind.config.js file ? (your tailwind config will be replaced)',
        name: 'resTailwindPath',
        type: 'input'
      }
    ])
    const targetTailwindDir = path.dirname(resTailwindPath)
    try {
      await fs.access(targetTailwindDir)
    } catch {
      await fs.mkdir(targetTailwindDir, { recursive: true })
    }
    const tailwindFileContent = await fetchGithub('ArtyomInc', 'ui', 'tailwind.config.js')
    await fs.writeFile(resTailwindPath, tailwindFileContent)
    console.log('tailwind.config.js created/replaced !')

    // Ask for installing dependencies
    const { resInstallDependencies } = await inquirer.prompt([
      {
        choices: ['yes', 'no'],
        default: 'yes',
        message: 'Would you like to install dependencies ? (using npm)',
        name: 'resInstallDependencies',
        type: 'list'
      }
    ])
    if (resInstallDependencies === 'yes') {
      // Installation des dépendances avec Child Process
      const execPromise = util.promisify(exec)
      for (const dependency of dependencies) {
        try {
          const { stderr, stdout } = await execPromise(
            `npm install ${dependency.dev ? '--save-dev' : '--save'} ${dependency.name}`
          )
          if (stderr) {
            console.error(`Failed to install ${dependency.name}`)
          } else {
            console.log(`Installed ${dependency.name}`)
          }
        } catch (error) {
          console.error(`Error installing ${dependency.name}: ${error}`)
        }
      }
    } else {
      console.log('Dependencies will not be installed')
    }

    // Ask for where the components will be imported
    const { resComponentsLocation } = await inquirer.prompt([
      {
        default: 'src/components/ui',
        message: 'Where do you want to import the components ?',
        name: 'resComponentsLocation',
        type: 'input'
      }
    ])
    console.log(`Components will be imported in ${resComponentsLocation}`)

    // Ask which components to import
    const { resComponentsSelected } = await inquirer.prompt([
      {
        choices: components.map((component) => component.name),
        message: 'Which components you want to import ?',
        name: 'resComponentsSelected',
        type: 'checkbox'
      }
    ])
    resComponentsSelected.forEach(async (component) => {
      const componentRelatedFiles = components.find((c) => c.name === component).files
      console.log(`Importing ${component} ...`)
      componentRelatedFiles.forEach(async (file) => {
        await importAndWriteFile(resComponentsLocation, component, file)
      })
    })
    if (resComponentsSelected.length == 0) {
      console.log('No components selected')
    }
  })

program
  .command('add <component>')
  .description('Add a specific component to your project')
  .action(async (component) => {
    console.log('Welcome to the CLI of @artyominc/ui')
    if (!components.find((c) => c.name === component)) {
      console.error(`Component ${component} not found`)
      return
    } else {
      console.log(`Importing ${component} ...`)
      const componentRelatedFiles = components.find((c) => c.name === component).files
      // Ask for where the components will be imported
      const { resComponentLocation } = await inquirer.prompt([
        {
          default: 'src/components/ui',
          message: `Where do you want to import ${component} component ?`,
          name: 'resComponentLocation',
          type: 'input'
        }
      ])
      // Import files
      componentRelatedFiles.forEach(async (file) => {
        await importAndWriteFile(resComponentLocation, component, file)
      })
    }
  })

async function importAndWriteFile(folderLocation, folderName, fileName) {
  await fs.mkdir(`${folderLocation}/${folderName}`, { recursive: true })
  const content = await fetchGithub('ArtyomInc', 'ui', `src/components/ui/${folderName}/${fileName}`)
  await fs.writeFile(`${folderLocation}/${folderName}/${fileName}`, content)
}

program.parse(process.argv)
