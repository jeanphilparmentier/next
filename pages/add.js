import { useRef } from 'react'
// useRef car uncontrolled inputs

export default function Add() {
  const enWord = useRef()
  const frWord = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    const newWord = {
      en: enWord.current.value,
      fr: frWord.current.value,
    }

    fetch('/api/vocapi', {
      method: 'POST',
      body: JSON.stringify(newWord), //On transforme l'objet js en Json
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        enWord.current.value = ''
        frWord.current.value = ''
        // console.log(data);
      })
  }

  return (
    <div className="container px-4 py-5">
      <h1 className="text-center">Ajouter du vocabulaire à l&apos;api</h1>
      <div className="row">
        <div className="div-desc col-12 col-sm-10 col-lg-7 col-xl-8 ms-auto me-auto mb-5">
          <p className="mt-5">Explications du développeur :</p>
          <ul className="ul-desc">
            <li>
              Ne fonctionne pas pour l&apos;instant tant que j&apos;héberge le
              projet chez Vercel.
            </li>
            <li>TO DO: Déployer sur mon serveur perso.</li>
            <li>
              Le but ici est d&apos;appeler l&apos;API avec un POST et
              d&apos;ajouter un mot à la liste words (en l&apos;ajoutant au
              fichier local liste.json et c&apos;est pour cela que cela ne
              fonctionne pas sur Vercel).
            </li>
          </ul>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="addEn" className="form-label">
          Ajouter un mot en Anglais
        </label>
        <input ref={enWord} type="text" className="form-control" id="addEn" />

        <label htmlFor="addFr" className="form-label">
          Ajouter un mot en Français
        </label>
        <input ref={frWord} type="text" className="form-control" id="addFr" />
        <button className="btn btn-primary mt-2">Ajouter</button>
      </form>
    </div>
  )
}
