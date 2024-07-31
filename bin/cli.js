import { Command } from 'commander'
import { promises as fs } from 'fs'
import inquirer from 'inquirer'
import path from 'path'

const program = new Command()

program.version('1.0.0').description('Welcome to the CLI of @artyominc/ui')

program
  .command('start')
  .description('Start the interactive CLI')
  .action(async () => {
    console.log('Welcome to the CLI of @artyominc/ui')

    // Ask where to place the Tailwind CSS file
    const { cssPath } = await inquirer.prompt([
      {
        type: 'input',
        name: 'cssPath',
        message: 'Where place your tailwind css file ? (your css will be replaced)',
        default: 'src/style.css'
      }
    ])

    // Ensure the directory exists
    const cssDir = path.dirname(cssPath)
    try {
      await fs.access(cssDir)
    } catch {
      await fs.mkdir(cssDir, { recursive: true })
    }

    // Simulate file creation/replacement
    await fs.writeFile(cssPath, '/* Tailwind CSS content */')
    console.log('tailwind style created/replaced !')

    // Ask for the Tailwind config file name
    const { configPath } = await inquirer.prompt([
      {
        type: 'input',
        name: 'configPath',
        message: 'How is named your tailwind config file ?',
        default: 'tailwind.config.js'
      }
    ])

    // Simulate config file creation/replacement
    await fs.writeFile(configPath, '/* Tailwind config content */')
    console.log('tailwind.config.js created/replaced !')

    // Ask which components to import
    const { components } = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'components',
        message: 'Which components you want to import ?',
        choices: ['accordion', 'button', 'card', 'toggle']
      }
    ])

    // Simulate importing components
    components.forEach(component => {
      // Logic to import the component
      console.log(`Importing ${component}...`)
    })

    console.log(`Successfully imported ${components.join(', ')}`)
  })

program.parse(process.argv)
