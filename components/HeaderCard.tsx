import { Box, Flex, Text } from '@chakra-ui/layout';
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
      <Box padding={2}>
        <Text fontSize="sm" fontWeight="bold" casing="uppercase">
          {subtitle}
        </Text>
        <Text fontSize="6xl">{title}</Text>
        <Text fontSize="sm" fontWeight="300">
          {description}
        </Text>
      </Box>
    </Flex>
  );
};
