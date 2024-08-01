#!/usr/bin/env node
import { exec } from 'child_process'
import { Command } from 'commander'
import { promises as fs } from 'fs'
import inquirer from 'inquirer'
import path from 'path'
import util from 'util'

import fetchContentFile from './utils/fetchContentFile.mjs'

const program = new Command()

program.version('1.0.5').description('Welcome to the CLI of @artyominc/ui')

program
  .command('start')
  .description('Start the interactive CLI')
  .action(async () => {
    console.log('Welcome to the CLI of @artyominc/ui')

    // Tailwind CSS file
    const { cssPath } = await inquirer.prompt([
      {
        default: 'src/style.css',
        message: 'Where place your tailwind css file ? (your css will be replaced)',
        name: 'cssPath',
        type: 'input'
      }
    ])
    const cssDir = path.dirname(cssPath)
    try {
      await fs.access(cssDir)
    } catch {
      await fs.mkdir(cssDir, { recursive: true })
    }
    const style = await fetchContentFile('ArtyomInc', 'ui', 'docs/.vitepress/theme/styles/tailwind.css')
    await fs.writeFile(cssPath, style)
    console.log('tailwind style created/replaced !')

    // Ask for the Tailwind config file name
    const { configPath } = await inquirer.prompt([
      {
        default: 'tailwind.config.js',
        message: 'How is named your tailwind config file ?',
        name: 'configPath',
        type: 'input'
      }
    ])

    // Simulate config file creation/replacement
    const tailwindcss = await fetchContentFile('ArtyomInc', 'ui', 'tailwind.config.js')
    await fs.writeFile(configPath, tailwindcss)
    console.log('tailwind.config.js created/replaced !')

    // Ask for installing dependencies
    const { installDependencies } = await inquirer.prompt([
      {
        choices: ['yes', 'no'],
        default: 'yes',
        message: 'Would you like to install dependencies ?',
        name: 'installDependencies',
        type: 'list'
      }
    ])
    const dependencies = [
      { dev: true, name: '@iconify/vue' },
      { dev: false, name: '@vueuse/core' },
      { dev: false, name: 'class-variance-authority' },
      { dev: false, name: 'clsx' },
      { dev: false, name: 'pinia' },
      { dev: false, name: 'radix-vue' },
      { dev: false, name: 'tailwind-merge' },
      { dev: false, name: 'tailwindcss' },
      { dev: false, name: 'tailwindcss-animate' }
    ]
    if (installDependencies === 'yes') {
      // Installation des dépendances avec Child Process
      const execPromise = util.promisify(exec)
      for (const dependency of dependencies) {
        try {
          const { stderr, stdout } = await execPromise(
            `npm install ${dependency.dev ? '--save-dev' : '--save'} ${dependency.name}`
          )
          if (stderr) {
            console.error(`stderr: ${stderr}`)
          } else {
            console.log(`Installed ${dependency.name}`)
          }
        } catch (error) {
          console.error(`Error installing ${dependency.name}: ${error}`)
        }
      }
    }

    // Ask for where the components will be imported
    const { componentLocation } = await inquirer.prompt([
      {
        default: 'src/components/ui',
        message: 'Where do you want to import the components ?',
        name: 'componentLocation',
        type: 'input'
      }
    ])
    console.log(`Components will be imported in ${componentLocation}`)

    // Ask which components to import
    const { components } = await inquirer.prompt([
      {
        choices: [
          'accordion',
          'badge',
          'button',
          'card',
          'checkbox',
          'dialog',
          'input',
          'progress',
          'select',
          'sheet',
          'skeleton',
          'sonner',
          'table',
          'theme-button',
          'toggle',
          'tooltip'
        ],
        message: 'Which components you want to import ?',
        name: 'components',
        type: 'checkbox'
      }
    ])

    // Simulate importing components
    components.forEach(async (component) => {
      if (component === 'accordion') {
        console.log('importing accordion...')
        await importAndWriteFile(componentLocation, 'accordion', 'index.ts')
        await importAndWriteFile(componentLocation, 'accordion', 'Accordion.vue')
        await importAndWriteFile(componentLocation, 'accordion', 'AccordionContent.vue')
        await importAndWriteFile(componentLocation, 'accordion', 'AccordionItem.vue')
        await importAndWriteFile(componentLocation, 'accordion', 'AccordionTrigger.vue')
      } else if (component === 'badge') {
        console.log('importing badge...')
        await importAndWriteFile(componentLocation, 'badge', 'index.ts')
        await importAndWriteFile(componentLocation, 'badge', 'Badge.vue')
      } else if (component === 'button') {
        console.log('importing button...')
        await importAndWriteFile(componentLocation, 'button', 'index.ts')
        await importAndWriteFile(componentLocation, 'button', 'Button.vue')
      } else if (component === 'card') {
        console.log('importing card...')
        await importAndWriteFile(componentLocation, 'card', 'index.ts')
        await importAndWriteFile(componentLocation, 'card', 'Card.vue')
      } else if (component === 'checkbox') {
        console.log('importing checkbox...')
        await importAndWriteFile(componentLocation, 'checkbox', 'index.ts')
        await importAndWriteFile(componentLocation, 'checkbox', 'Checkbox.vue')
      } else if (component === 'dialog') {
        console.log('importing dialog...')
        await importAndWriteFile(componentLocation, 'dialog', 'index.ts')
        await importAndWriteFile(componentLocation, 'dialog', 'Dialog.vue')
      } else if (component === 'input') {
        console.log('importing input...')
        await importAndWriteFile(componentLocation, 'input', 'index.ts')
        await importAndWriteFile(componentLocation, 'input', 'Input.vue')
      } else if (component === 'progress') {
        console.log('importing progress...')
        await importAndWriteFile(componentLocation, 'progress', 'index.ts')
        await importAndWriteFile(componentLocation, 'progress', 'Progress.vue')
      } else if (component === 'select') {
        console.log('importing select...')
        await importAndWriteFile(componentLocation, 'select', 'index.ts')
        await importAndWriteFile(componentLocation, 'select', 'Select.vue')
      } else if (component === 'sheet') {
        console.log('importing sheet...')
        await importAndWriteFile(componentLocation, 'sheet', 'index.ts')
        await importAndWriteFile(componentLocation, 'sheet', 'Sheet.vue')
      } else if (component === 'skeleton') {
        console.log('importing skeleton...')
        await importAndWriteFile(componentLocation, 'skeleton', 'index.ts')
        await importAndWriteFile(componentLocation, 'skeleton', 'Skeleton.vue')
      } else if (component === 'sonner') {
        console.log('importing sonner...')
        await importAndWriteFile(componentLocation, 'sonner', 'index.ts')
        await importAndWriteFile(componentLocation, 'sonner', 'Sonner.vue')
      } else if (component === 'table') {
        console.log('importing table...')
        await importAndWriteFile(componentLocation, 'table', 'index.ts')
        await importAndWriteFile(componentLocation, 'table', 'Table.vue')
        await importAndWriteFile(componentLocation, 'table', 'TableBody.vue')
        await importAndWriteFile(componentLocation, 'table', 'TableCell.vue')
        await importAndWriteFile(componentLocation, 'table', 'TableEmpty.vue')
        await importAndWriteFile(componentLocation, 'table', 'TableFooter.vue')
        await importAndWriteFile(componentLocation, 'table', 'TableHead.vue')
        await importAndWriteFile(componentLocation, 'table', 'TableHeader.vue')
        await importAndWriteFile(componentLocation, 'table', 'TableRow.vue')
      } else if (component === 'theme-button') {
        console.log('importing theme-button...')
        await importAndWriteFile(componentLocation, 'theme-button', 'index.ts')
        await importAndWriteFile(componentLocation, 'theme-button', 'ThemeButton.vue')
      } else if (component === 'toggle') {
        console.log('importing toggle...')
        await importAndWriteFile(componentLocation, 'toggle', 'index.ts')
        await importAndWriteFile(componentLocation, 'toggle', 'Toggle.vue')
      } else if (component === 'tooltip') {
        console.log('importing tooltip...')
        await importAndWriteFile(componentLocation, 'tooltip', 'index.ts')
        await importAndWriteFile(componentLocation, 'tooltip', 'Tooltip.vue')
        await importAndWriteFile(componentLocation, 'tooltip', 'TooltipContent.vue')
        await importAndWriteFile(componentLocation, 'tooltip', 'TooltipProvider.vue')
        await importAndWriteFile(componentLocation, 'tooltip', 'TooltipTrigger.vue')
      }
    })

    if (components.length === 0) {
      console.log('No components selected')
    }
  })

async function importAndWriteFile(folderLocation, folderName, fileName) {
  // create folder
  await fs.mkdir(`${folderLocation}/${folderName}`, { recursive: true })
  // featch
  const content = await fetchContentFile('ArtyomInc', 'ui', `src/components/ui/${folderName}/${fileName}`)
  // create file and write content
  await fs.writeFile(`${folderLocation}/${folderName}/${fileName}`, content)
}

program.parse(process.argv)
