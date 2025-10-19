import Link from 'next/link'
import { v1 as uuid } from 'uuid'

export default function index(props) {
  console.log(props)

  return (
    <div className="container px-4 py-5">
      <h1 className="text-center">Les listes de vocabulaire</h1>
      <div className="row">
        <div className="div-desc col-12 col-sm-10 col-lg-7 col-xl-8 ms-auto me-auto mb-5">
          <p className="mt-5">Explications du développeur :</p>
          <ul className="ul-desc">
            <li>
              Je vais récupérer des données depuis le fichier local liste.json.
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
      <ul className="list-group">
        {props.array.map((el) => (
          <li key={uuid()} className="list-group-item p-3">
            <Link legacyBehavior href={`/listes/${el.name}`}>
              <a>{el.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const data = await import(`/data/listes.json`)
  const array = data.englishList
  // Redirige vers page 404
  if (array.length === 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      array, // même chose que array: array
    },
  }
}
