import { Box, Flex, Text } from '@chakra-ui/layout';
import Head from 'next/head';
import { AvatarCard } from '../components/AvatarCard';
import { GradientBackground } from '../components/GradientBackground';
import { HeaderCard } from '../components/HeaderCard';
import prisma from '../lib/prisma';

const Home = ({ artists }) => {
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
          image="https://i.pravatar.cc/160"
          roundImage
          subtitle="profile"
          title="Anne Moss"
          description="description"
        />
        <Box padding={6}>
          <Box marginBottom={6}>
            <Text fontSize="2xl" fontWeight="bold">
              Top artists this month
            </Text>
            <Text fontSize="md">Only visible to you</Text>
          </Box>
          <Flex gap={4} flexWrap="wrap">
            {artists.map(artist => (
              <Box flex="0 1 220px">
                <AvatarCard avatar={{ ...artist, description: 'Artist' }} />
              </Box>
            ))}
          </Flex>
        </Box>
      </GradientBackground>
    </Box>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({
    select: {
      id: true,
      name: true
    }
  });

  return {
    props: { artists }
  };
};

export default Home;
