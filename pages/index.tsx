import { Box, Flex } from '@chakra-ui/layout';
import Head from 'next/head';
import { GradientBackground } from '../components/GradientBackground';

const Home = () => {
  const color = 'red';
  return (
    <Box height="100%">
      <Head>
        <title>Spotify Clone</title>
        <meta name="description" content="Spotify-like music player" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GradientBackground color={color}>
        <Flex bg={`${color}.600`} padding={6} align="end">
          Heini
        </Flex>
        <div>Home page</div>
      </GradientBackground>
    </Box>
  );
};

export default Home;
