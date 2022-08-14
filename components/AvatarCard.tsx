import { Box, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';

export const AvatarCard = ({ avatar }) => {
  return (
    <Box width="100%" bg="gray.900" borderRadius={3} padding={3}>
      <Image
        src={`https://i.pravatar.cc/200?img=${avatar.id}`}
        borderRadius="100%"
      />
      <Box marginTop={4}>
        <Text fontSize="lg">{avatar.name}</Text>
        <Text fontSize="sm">{avatar.description}</Text>
      </Box>
    </Box>
  );
};
