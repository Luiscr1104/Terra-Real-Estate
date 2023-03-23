
import MyCarousel from '@/components/Carousel'
import Header from '@/components/Header'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'


export default function App({ Component, pageProps }) {
  return (
  <>
  <Header />
  <MyCarousel />
  <Component {...pageProps} />
  </>
  )
}
