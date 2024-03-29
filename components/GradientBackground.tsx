import { Box } from '@chakra-ui/layout';

export const GradientBackground = ({ color, children }) => {
  return (
    <Box
      height="100%"
      overflowY="scroll"
      color="white"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.9) 90%)`}
    >
      {children}
    </Box>
  );
};
