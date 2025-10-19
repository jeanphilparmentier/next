// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Node.js
import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })

  if (req.method === 'GET') {
    const filePath = path.join(process.cwd(), 'data', 'listes.json')
    const fileData = fs.readFileSync(filePath)
    const data = JSON.parse(fileData)
    res.status(200).json(data)
  } else if (req.method === 'POST') {
    const enWord = req.body.en
    const frWord = req.body.fr

    const newWord = {
      en: enWord,
      fr: frWord,
    }

    const filePath = path.join(process.cwd(), 'data', 'listes.json')
    const fileData = fs.readFileSync(filePath)
    const data = JSON.parse(fileData) // On crée du JS à partir du Json
    data.englishList[0].data.push(newWord) // On le push à la fin
    fs.writeFileSync(filePath, JSON.stringify(data)) // Crée un fichier en remplaçant l'ancien et en transformant le js en  Json

    // On envoie une réponse maintenant
    res.status(201).json({ message: 'Succès !' })
  }
}
