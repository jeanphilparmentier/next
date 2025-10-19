import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

export default function index(props) {
  return (
    <div className="container x-4 py-5">
      <h1 className="text-center">Liste des auteurs</h1>
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
      <ul className="list-group">
        {props.data.map((member) => (
          <li key={uuidv4()} className="list-group-item mt-3">
            <div className="d-flex">
              <div className="p-2">{member.name}</div>
              <div className="ms-auto p-2">
                {/* <a>Details</a> */}
                <Link
                  legacyBehavior
                  href={`/membres/${member.id}`}
                  member={member}
                >
                  <a>Details</a>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Ca fonctionne mais pas intéressant ici
// export async function getServerSideProps(context){
//     const quote = await fetch("https://jsonplaceholder.typicode.com/users")

//     const data = await quote.json()

//     return {
//         props: {
//           data
//         }
//       }
// }

export async function getStaticProps() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users')

  const data = await users.json()

  return {
    props: {
      data,
    },
  }
}
