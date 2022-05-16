import Layout from '../components/Layout'
import '../styles/globals.css'
import Navbar from './navbar/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
    {/* <Navbar/> */}
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
