import { Box } from '@chakra-ui/layout';
import Head from 'next/head';
import { GradientBackground } from '../components/GradientBackground';
import { HeaderCard } from '../components/HeaderCard';

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
        <HeaderCard
          color={color}
          image="/"
          roundImage
          subtitle="subtitle"
          title="title"
          description="description"
        />
      </GradientBackground>
    </Box>
  );
};

export default Home;
