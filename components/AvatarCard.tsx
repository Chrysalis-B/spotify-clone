import { Box, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';

export const AvatarCard = ({ avatar }) => {
  return (
    <Box
      key={avatar.id}
      width="100%"
      bg="gray.900"
      borderRadius={3}
      padding={3}
    >
      <Image
        src={`https://i.pravatar.cc/200?img=${Math.floor(
          Math.random() * 70 + 1
        )}`}
        borderRadius="100%"
      />
      <Box marginTop={4}>
        <Text fontSize="lg">{avatar.name}</Text>
        <Text fontSize="sm">{avatar.description}</Text>
      </Box>
    </Box>
  );
};
