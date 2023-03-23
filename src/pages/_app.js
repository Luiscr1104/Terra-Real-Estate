
import MyCarousel from '@/components/Carousel'
import Header from '@/components/Header'
import Main from '@/components/Main'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@/components/Main.css';



export default function App({ Component, pageProps }) {
  return (
  <>
  <Header />
  <MyCarousel />
  <Main />
  </>
  )
}
