import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import { v1 as uuid } from 'uuid'

export default function Home(props) {
  console.log(props)

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Titre</title>
      </Head>
      <div className="container px-4 py-5">
        <h1 className="text-center">Vocabulaire de base</h1>
        <div className="row">
          <div className="div-desc col-12 col-sm-10 col-lg-7 col-xl-8 ms-auto me-auto mb-5">
            <p className="mt-5">Explications du développeur :</p>
            <ul className="ul-desc">
              <li>
                Je vais récupérer des données depuis le fichier local
                vocabulary.json.
              </li>
              <li>
                Cette page va être statique, elle va être généré lors du build
                (npm run build). Il faut donc soit utiliser getStaticProps() ou
                getStaticPath(). Je connais le nom de la page (son nom ne sera
                pas issu de données variables), pas besoin de créer de chemins
                dynamiques, j&apos;utilise donc <b>getStaticProps()</b> pour
                cela.
              </li>
            </ul>
          </div>
        </div>
        <table className={styles.tableau}>
          <tbody>
            {props.array.map((el) => (
              <tr key={uuid()}>
                <td key={uuid()}>{el.en}</td>
                <td key={uuid()}>{el.fr}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
