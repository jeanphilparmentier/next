export default function contact(props) {
  console.log(props)

  return (
    <div className="container px-4 py-5">
      <h1>{props.data.joke}</h1>
      <div className="row">
        <div className="div-desc col-12 col-sm-10 col-lg-7 col-xl-8 ms-auto me-auto mb-5">
          <p className="mt-5">Explications du développeur :</p>
          <ul className="ul-desc">
            <li>
              Ici on va faire de l&apos;<b>ISR</b> (Incremental static
              generation).
            </li>
            <li>
              On appelle une API donnant des blagues (mauvaises) avec
              getStaticProps(). Et pour empêcher d&apos;appeler l&apos;API à
              chaque fois que l&apos;on recharge la page on va utiliser
              revalidate: 20. Au bout de 20s ⏱ getStaticProps() sera alors
              appelée coté serveur et une nouvelles pages static sera générée
              coté serveur.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const quote = await fetch('https://v2.jokeapi.dev/joke/Any?type=single')
  // const quote = await fetch("https://type.fit/api/quotes")

  const data = await quote.json()

  return {
    props: {
      data,
    },
    revalidate: 20,
  }
}
// https://type.fit/api/quotes
// https://goquotes-api.herokuapp.com/api/v1/random?count=1
