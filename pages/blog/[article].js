export default function article(props) {
  console.log(props)
  return (
    <div className="container px-4 py-5">
      <h1 className="text-center">Details de l&apos;article</h1>
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
            <li>Et puis je lui fournis les données avec getStaticProps()</li>
          </ul>
        </div>
      </div>
      <h2 className="mb-4">{props.article.title}</h2>
      <p>{props.article.body}</p>
    </div>
  )
}

export async function getStaticProps(context) {
  const id = context.params.article

  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  const article = await data.json()

  return {
    props: {
      article,
    },
  }
}

export async function getStaticPaths() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')

  const articles = await data.json()

  const paths = articles.map((item) => ({
    params: { article: item.id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}
