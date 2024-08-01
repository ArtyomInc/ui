async function fetchContentFile(owner, repo, path) {
  const url = `https://raw.githubusercontent.com/${owner}/${repo}/main/${path}`
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erreur HTTP, statut = ' + response.status)
      }
      return response.text()
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération du fichier:', error)
    })
}

export default fetchContentFile
