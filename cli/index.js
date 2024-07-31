import { simpleGit } from 'simple-git'

import { addComponent } from './utils.js'

export { addComponent }

const git = simpleGit()

export const cloneRepo = async (repoUrl, targetPath) => {
  try {
    await git.clone(repoUrl, targetPath)
  } catch (error) {
    console.error('Failed to clone repo:', error)
  }
}
