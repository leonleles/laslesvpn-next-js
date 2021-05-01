import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { ThemeContextProvider } from '../contexts/ThemeContext';
import ThemeProviderLayout from '../contexts/ThemeProviderLayout';

import { GlobalStyles } from '../styles/GlobalStyles';
import 'swiper/swiper.scss';

function MyApp({ Component, pageProps }) {

  return (
    <ThemeContextProvider>
      <ThemeProviderLayout>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProviderLayout>
    </ThemeContextProvider>
  )
}

export default MyApp;
