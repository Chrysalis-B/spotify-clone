import { Box, Flex, Input, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import NextImage from 'next/image';
import { FC, useState } from 'react';
import { auth } from '../lib/mutations';

export const AuthForm: FC<{ mode: 'signin' | 'signup' }> = ({ mode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: add input fields for first and last name
    await auth(mode, { email, password, firstName: 'Jane', lastName: 'Doe' });
    setIsLoading(false);
    router.push('/');
  };

  return (
    <Flex
      direction="column"
      height="100vh"
      width="100vw"
      bg="black"
      color="white"
    >
      <Flex
        justify="center"
        align="center"
        height="100px"
        borderBottom="white 1px solid"
      >
        <NextImage src="/logo.svg" height={60} width={120} />
      </Flex>
      <Flex justify="center" align="center" grow={1}>
        <Box padding={10} bg="gray.900" borderRadius={3}>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="email"
              type="email"
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
            <Button type="submit" colorScheme="teal" isLoading={isLoading}>
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Flex>
  );
};
