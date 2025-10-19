import Link from 'next/link'
import Head from 'next/head'

export default function Home(props) {
  console.log(props)

  // const id = "article"

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Titre</title>
      </Head>
      <div className="container px-4 py-5">
        <h1 className="mt-3">Bienvenue sur mon application Next</h1>
        <p className="mb-5">
          Le blog communautaire des aficionados du développement web.
        </p>
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0" style={{ minHeight: '200px' }}>
            <div className="card" style={{ minHeight: '170px' }}>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Lisez les articles</h5>
                <p className="card-text">
                  Chaque auteur tente de vous apporter le plus de valeur par
                  article.
                </p>
                <Link legacyBehavior href="/blog">
                  <a
                    className="btn btn-primary mt-auto"
                    style={{ width: '129px' }}
                  >
                    Visitez le Blog
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card" style={{ minHeight: '170px' }}>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Consultez la liste des membres</h5>
                <p className="card-text">
                  Ajoutez, invitez et discutez avec les différents membres.
                </p>
                <Link legacyBehavior href="/membres">
                  <a
                    className="btn btn-primary mt-auto"
                    style={{ width: '160px' }}
                  >
                    Liste des membres
                  </a>
                </Link>
                {/* <a href="#" className="btn btn-primary">Découvre la liste des membres</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
