import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Article() {
  const router = useRouter()

  console.log(router)
  console.log(router.route)
  console.log(router.asPath)
  console.log(router.query)

  const pushFunction = () => {
    router.push('/')
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{router.query.slug}</title>
      </Head>
      <div className="container px-4 py-5" style={{ minHeight: '600px' }}>
        <h1 className="text-center mb-5">{router.query.slug}</h1>
        <button onClick={pushFunction}>Push to Home</button>
      </div>
    </>
  )
}
