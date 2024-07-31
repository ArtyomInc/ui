#!/usr/bin/env node

import { program } from 'commander'

import { addComponent } from '../cli/index.js'

program
  .command('add <component>')
  .description('Add a new component')
  .action((component) => {
    addComponent(component)
  })

program.parse(process.argv)
