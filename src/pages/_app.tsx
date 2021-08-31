import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';

import { Header } from '../components/Header/header';

import { theme } from '../styles/theme';


import '../styles/slider.scss';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
