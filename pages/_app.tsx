import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { StoreProvider } from 'easy-peasy';
import { PlayerLayout } from '../components/PlayerLayout';
import 'reset-css';
import { store } from '../lib/store';

const theme = extendTheme({
  colors: {
    gray: {
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121'
    }
  },
  components: {
    Button: {
      variants: {
        link: {
          ':focus': {
            boxShadow: 'none'
          },
          ':focus-visible': {
            boxShadow: 'var(--chakra-shadows-outline)'
          }
        }
      }
    }
  }
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <StoreProvider store={store}>
        {Component.authPage ? (
          <Component {...pageProps} />
        ) : (
          <PlayerLayout>
            <Component {...pageProps} />
          </PlayerLayout>
        )}
      </StoreProvider>
    </ChakraProvider>
  );
};

export default MyApp;
