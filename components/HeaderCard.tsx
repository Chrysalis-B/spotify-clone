import { Box, Flex } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';

export const HeaderCard = ({
  color,
  image,
  subtitle,
  title,
  description,
  roundImage
}) => {
  return (
    <Flex bg={`${color}.600`} padding={6} align="end">
      <Box padding={3}>
        <Image
          boxSize="160px"
          boxShadow="2xl"
          src={image}
          borderRadius={roundImage ? '100%' : '3px'}
        />
      </Box>
    </Flex>
  );
};
