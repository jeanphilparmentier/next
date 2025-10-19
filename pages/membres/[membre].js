export default function membre(props) {
  return (
    <div className="container px-4 py-5">
      <h1 className="text-center">Member personal informations</h1>
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
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item my-2">Name: {props.member.name}</li>
          <li className="list-group-item my-2">Email: {props.member.email}</li>
          <li className="list-group-item my-2">Phone: {props.member.phone}</li>
          <li className="list-group-item my-2">
            City: {props.member.address.city}
          </li>
        </ul>
      </div>
    </div>
  )
}

// 2:
export async function getStaticProps(context) {
  const id = context.params.membre
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const member = await data.json()

  return {
    props: {
      member,
    },
  }
}

// 1:
export async function getStaticPaths(context) {
  const members = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await members.json()

  // Retourner un tableau avec tous les chemins qui vont correspondre à toutes les pages
  const paths = data.map((user) => ({
    params: { membre: user.id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

// Nope
// export async function getServerSideProps(context){
//     const members = await fetch("https://jsonplaceholder.typicode.com/users")

//     const data = await members.json()

//     const member = data.find(liste => liste.id === parseInt(context.query.membre))

//     return {
//         props: {
//             member
//         }
//       }
// }
