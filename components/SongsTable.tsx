import { Box } from '@chakra-ui/layout';
import { Table, Thead, Td, Tr, Tbody, Th, IconButton } from '@chakra-ui/react';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';

export const SongsTable = ({ songs }) => {
  return (
    <Box bg="transparent" color="white">
      <Box padding={9} marginBottom={4}>
        <Box marginBottom={4}>
          <IconButton
            icon={<BsFillPlayFill fontSize="30px" />}
            colorScheme="green"
            aria-label="play"
            size="lg"
            isRound
          />
        </Box>
        <Table variant="unstyled">
          <Thead borderBottom="ipx solid" borderColor="rgba(255,255,255,0.2">
            <Tr>
              <Th>#</Th>
              <Th>Title</Th>
              <Th>Date Added</Th>
              <Th>
                <AiOutlineClockCircle />
              </Th>
            </Tr>
          </Thead>
        </Table>
      </Box>
    </Box>
  );
};
