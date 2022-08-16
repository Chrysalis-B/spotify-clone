import { Box, Flex, Text } from '@chakra-ui/layout';
import { useStoreState } from 'easy-peasy';
import Player from './Player';

export const PlayerBar = () => {
  const songs = useStoreState((state: any) => state.activeSongs);
  const activeSong = useStoreState((state: any) => state.activeSong);
  return (
    <Box height="100%" width="100%" bg="gray.900" padding={2}>
      <Flex align="center" justify="space-between">
        <Box padding={4} color="white">
          <Text fontSize="lg">{activeSong?.name}</Text>
          <Text fontSize="sm">{activeSong?.artist?.name}</Text>
        </Box>
        <Box flex="0 1 500px">
          <Player songs={songs} activeSong={activeSong} />
        </Box>
        <Box>Buttons</Box>
      </Flex>
    </Box>
  );
};
