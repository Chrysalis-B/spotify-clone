import { Box, Flex, Text } from '@chakra-ui/layout';
import Player from './Player';

export const PlayerBar = () => {
  return (
    <Box height="100%" width="100%" bg="gray.900" padding={2}>
      <Flex align="center" justify="space-between">
        <Box padding={4} color="white">
          <Text fontSize="lg">Song name</Text>
          <Text fontSize="sm">Artist name</Text>
        </Box>
        <Box>
          <Player />
        </Box>
        <Box>Buttons</Box>
      </Flex>
    </Box>
  );
};
