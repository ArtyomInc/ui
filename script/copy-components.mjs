import fs from 'fs'
import path from 'path'

// Define source and destination directories
const srcDir = path.join('src', 'components', 'samples')
const destDir = path.join('src', 'docs')

// Ensure the destination directory exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true })
}

// Read all files from the source directory
fs.readdir(srcDir, (err, files) => {
  if (err) {
    console.error('Error reading source directory:', err)
    return
  }

  // Filter out only .vue files
  const vueFiles = files.filter((file) => path.extname(file) === '.vue')

  // Copy each .vue file to the destination directory as .md
  vueFiles.forEach((file) => {
    const srcFilePath = path.join(srcDir, file)
    const destFilePath = path.join(destDir, path.basename(file, '.vue') + '.vue.md')

    // Read the content of the .vue file
    fs.readFile(srcFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', srcFilePath, err)
        return
      }

      // Write the content to the new .md file
      fs.writeFile(destFilePath, data, 'utf8', (err) => {
        if (err) {
          console.error('Error writing file:', destFilePath, err)
        } else {
          console.log(`Copied ${srcFilePath} to ${destFilePath}`)
        }
      })
    })
  })
})
