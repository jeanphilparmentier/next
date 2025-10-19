import '../styles/globals.css'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from '../components/Container/Container'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
