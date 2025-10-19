import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

export default function index(props) {
  console.log(props)
  return (
    <div className="container px-4 py-5">
      <h1 className="text-center">Bienvenue sur le Blog</h1>
      <div className="row">
        <div className="div-desc col-12 col-sm-10 col-lg-7 col-xl-8 ms-auto me-auto mb-5">
          <p className="mt-5">Explications du développeur :</p>
          <ul className="ul-desc">
            <li>
              Je vais récupérer les données depuis l&apos;API Jsonplaceholder.
            </li>
            <li>
              Cette page va être statique, elle va être généré lors du build
              (npm run build). Il faut donc soit utiliser getStaticProps() ou
              getStaticPath(). Je connais le nom de la page (son nom ne sera pas
              issu de données variables), pas besoin de créer de chemins
              dynamiques, j&apos;utilise donc <b>getStaticProps()</b> pour cela.
            </li>
          </ul>
        </div>
      </div>
      <div className="row g-3">
        {props.articles.map((article) => (
          <div key={uuidv4()} className="col-12 col-md-6 col-xl-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.body.slice(0, 20) + '...'}</p>
                <Link legacyBehavior href={`/blog/${article.id.toString()}`}>
                  <a className="card-link">Lire cet article</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// getStaticProps ou getStaticPaths ?
// Est-ce que le rendu est dynamique ou pas ? CAD:
// Est-ce que le chemin est dynamique ou pas ?
// Non ! Ici le nom du fichier est index.js
// Donc: getStaticProps

export async function getStaticProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const articles = await data.json()

  return {
    props: {
      articles,
    },
  }
}
