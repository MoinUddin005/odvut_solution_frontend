import MainLayout from '~/components/HomeComponents/Layouts/MainLayout'
import '../styles/globals.css'
import '../public/assets/libs/tiny-slider/tiny-slider.css'
import '../public/assets/libs/tobii/css/tobii.min.css'
import '../public/assets/libs/@iconscout/unicons/css/line.css'
import '../public/assets/css/icons.css'
import '../public/assets/css/tailwind.css'

function MyApp({ Component, pageProps }) {

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
