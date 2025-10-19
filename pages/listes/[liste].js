import styles from '../../styles/Home.module.css'
import { v1 as uuid } from 'uuid'
import { useRouter } from 'next/router'

export default function Liste(props) {
  console.log(props)

  const router = useRouter()

  // Si on utilise fallback: true les données ne vont pas encore exister au moment du rendering il faut donc écrire: Si les données n'existent pas:
  if (!props.listeEnCours) {
    return <h1>Chargement</h1>
  }

  return (
    <div className="container px-4 py-5">
      <h1 className="text-center">
        {router.query.liste.charAt(0).toUpperCase() +
          router.query.liste.slice(1)}
      </h1>
      <div className="row">
        <div className="div-desc col-12 col-sm-10 col-lg-7 col-xl-8 ms-auto me-auto mb-5">
          <p className="mt-5">Explications du développeur :</p>
          <ul className="ul-desc">
            <li>
              On va créer ici des pages et des chemins dynamiquement. Dés
              qu&apos;on a des chemins dynamiques, il faut preciser à Next
              toutes les pages que l&apos;on a envie de créer et on utilise{' '}
              <b>getStaticPaths()</b>. Cela permet de créer des pages statiques
              quand on ne connaît pas encore le nombre total de pages ou leur
              nom (quand on utilise des données variables ou issues d&apos;une
              API par exemple).
            </li>
            <li>
              Et puis je lui fournis les données avec getStaticProps().
              J&apos;utilise useRouter() juste pour récupérer le slug de
              l&apos;url et l&apos;afficher sur la page.
            </li>
            <li>
              Pour limiter le nombre de page créées lors du build, on peut dire
              à Next de ne pas en créer certaines grâce à <b>fallback=true</b>.
              Ainsi les pages concernées ne seront créées par le serveur
              qu&apos;à la demande (un peu plus lent). Cela peut être utile pour
              ne pas créer trop de pages lors du build. Ici la page des
              adjectifs sera créée à la demande côté serveur.
            </li>
          </ul>
        </div>
      </div>
      <table className={styles.tableau}>
        <tbody>
          {props.listeEnCours.map((el) => (
            <tr key={uuid()}>
              <td key={uuid()}>{el.en}</td>
              <td key={uuid()}>{el.fr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export async function getStaticProps(context) {
  const slug = context.params.liste
  const data = await import('/data/listes.json')

  const listeEnCours = data.englishList.find((liste) => liste.name === slug)

  // Ici dans le cas de fallback: true et si on entre une mauvaise url
  if (!listeEnCours) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      listeEnCours: listeEnCours.data,
    },
  }
}

export async function getStaticPaths() {
  const data = await import(`/data/listes.json`)
  const array = data.englishList

  const paths = data.englishList.map((item) => ({
    params: { liste: item.name },
  }))

  return {
    paths: [
      { params: { liste: 'words' } },
      // {params: {liste: "adjectives"}},
      { params: { liste: 'verbs' } },
    ],
    // paths,
    // fallback: false // si on tape un chemin qui n'existe pas on arrive sur page 404

    fallback: true, // adjectives ne va plus être créé de manière statique directement, mais au moment ou l'appel est fait au niveau du serveur

    // fallback: "blocking" // Tout va se faire coté serveur (le plus lent)
  }
}
