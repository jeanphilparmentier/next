import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Home(props) {
  // const id = "article"

  const [state, setState] = useState(false)

  //Pour faire appel à notre fonction une fois que le composant est chargé: useEffect et seulement une fois (..., [])
  useEffect(() => {
    newWord()
  }, [])

  const newWord = () => {
    fetch('api/vocapi')
      .then((response) => response.json())
      .then((data) => setState(data))
  }

  let randomWord
  if (state) {
    const array = state.englishList[0].data
    randomWord = array[Math.floor(Math.random() * array.length)].en
    console.log(randomWord)
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Titre</title>
      </Head>
      <div className="container px-4 py-5">
        <h1 className="text-center">Mot au hasard</h1>
        <div className="row">
          <div className="div-desc col-12 col-sm-10 col-lg-7 col-xl-8 ms-auto me-auto mb-5">
            <p className="mt-5">Explications du développeur :</p>
            <ul className="ul-desc">
              <li>
                Ici j&apos;ai créé un petite <b>API</b> capable de répondre à
                des requêtes GET ou POST (ici: pages/api/vocapi.js).
              </li>
              <li>
                Je l&apos;appelle en faisant un GET. Si la requête est de type
                GET (req.method === &quot;GET&quot;) alors je parcours le
                fichier local listes.json et je retourne une réponse sous format
                json <b>res.status(200).json(data);</b>. Puis je choisis un mot
                au hasard dans cette liste et l&apos;affiche à chaque clic.
              </li>
            </ul>
          </div>
        </div>
        <button onClick={newWord} className="btn btn-primary d-block m-auto">
          Get random words{' '}
        </button>
        <h2 className="text-center mt-5">{randomWord}</h2>
        {/* <Link legacyBehavior href="/blog">
          <a>Blog</a>
        </Link> */}
        {/* <Link legacyBehavior href="/blog/article">
          <a>Article</a>
        </Link> */}
        {/* Dynamic */}
        {/* <Link legacyBehavior href={`/blog/${id}`}>
          <a>Article</a>
        </Link> */}
      </div>
    </>
  )
}

export async function getStaticProps() {
  // Ici on peut utiliser des clés d'api du node.js etc ca ne sera jamais rendu coté client
  const data = await import(`/data/vocabulary.json`)
  const array = data.vocabulary

  // Redirige vers page 404
  if (array.length === 0) {
    return {
      notFound: true,
    }
  }
  // Redirige ailleurs
  // if(array.length ===0) {
  //   return {
  //     destination: "/blog"
  //   }
  // }

  return {
    props: {
      array, // même chose que array: array
    },
  }
}
