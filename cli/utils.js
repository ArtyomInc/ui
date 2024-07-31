import path from 'path'
import { simpleGit } from 'simple-git'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const git = simpleGit()

export const addComponent = async (component) => {
  const repoUrl = 'https://github.com/votre-repo/votre-repo-de-components'
  const targetPath = path.resolve(__dirname, '../src/components/ui', component)

  try {
    await git.clone(repoUrl, targetPath)
    console.log(`Component ${component} added successfully!`)
  } catch (error) {
    console.error('Failed to add component:', error)
  }
}
