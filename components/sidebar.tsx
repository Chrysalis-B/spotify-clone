import NextImage from 'next/image';
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/layout';
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite
} from 'react-icons/md';

export const Sidebar = () => {
  return (
    <Box bg="black" height="100%" padding={3} color="gray.300">
      <Box paddingBottom={3}>
        <NextImage src="/logo.svg" height={60} width={120} />
      </Box>
    </Box>
  );
};
