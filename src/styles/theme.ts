import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      "900": "FFBA08"
    },
    gray: {
      "900": "#47585B",
      "100": "#F5F8FA"
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: '',
        color: '',
      }
    }
  }
})