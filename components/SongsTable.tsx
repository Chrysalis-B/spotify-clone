import { Box } from '@chakra-ui/layout';
import { Table, Thead, Td, Tr, Tbody, Th, IconButton } from '@chakra-ui/react';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FC } from 'react';
import { formatDate, formatTime } from '../lib/formatter';

interface SongProps {
  id: number;
  name: string;
  duration: number;
  createdAt: Date;
  artist: {
    id: number;
    name: string;
  };
}

interface SongListProps {
  songs: SongProps[];
}

export const SongsTable: FC<SongListProps> = ({ songs }) => {
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
          <Tbody>
            {songs.map((song, index) => (
              <Tr
                sx={{
                  transition: 'all .3s',
                  '&:hover': {
                    bg: 'rgba(255,255,255,0.1)'
                  }
                }}
                key={song.id}
                cursor="pointer"
              >
                <Td>{index + 1}</Td>
                <Td>{song.name}</Td>
                <Td>{formatDate(song.createdAt)}</Td>
                <Td>{formatTime(song.duration)}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};
