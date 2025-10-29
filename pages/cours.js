export default function cours(props) {
  console.log(props)
  return (
    <div className="container px-4 py-5" style={{ minHeight: '600px' }}>
      {/* <h1 className="text-center">
        Le BTC est à : {props.results.bpi.EUR.rate}
      </h1> */}
      <h1 className="text-center">
        L&apos;Api api.coindesk.com n&apos;est plus disponible
      </h1>
      <div className="row">
        <div className="div-desc col-12 col-sm-10 col-lg-7 col-xl-8 ms-auto me-auto mb-5">
          <p className="mt-5">Explications du développeur :</p>
          <ul className="ul-desc">
            <li>
              L&apos;api n&apos;est plus disponible, voici ce que je faisais
              avant : Ici je vais faire du rendu coté serveur. La page va être
              créée à chaque fois coté serveur et en suite c&apos;est envoyé
              coté client. Pour cela j&apos;utilise <b>getServerSideProps()</b>.
            </li>
            <li>
              C&apos;est un peu plus lent mais cela peut être utile dans
              certains cas, par exemple pour avoir la donnée la plus à jour du
              cours d&apos;une devise ou d&apos;une valeur boursière.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// export async function getServerSideProps(context) {
//   console.log(context); // Se consulte au niveau du terminal et pas du browser

//   const data = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

//   const results = await data.json();

//   return {
//     props: {
//       results,
//     },
//   };
// }

// https://api.coindesk.com/v1/bpi/currentprice.json
