import NextImage from 'next/image';
import { Box, Divider } from '@chakra-ui/layout';
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite
} from 'react-icons/md';
import { SidebarList } from './SidebarList';

const navMenu = [
  {
    icon: MdHome,
    name: 'Home',
    route: '/'
  },
  {
    icon: MdSearch,
    name: 'Search',
    route: '/search'
  },
  {
    icon: MdLibraryMusic,
    name: 'Your Library',
    route: '/library'
  }
];

const musicMenu = [
  {
    icon: MdPlaylistAdd,
    name: 'Create Playlist',
    route: '/'
  },
  {
    icon: MdFavorite,
    name: 'Favorites',
    route: '/favorites'
  }
];

export const Sidebar = () => {
  return (
    <Box bg="black" height="100%" padding={3} color="gray.300">
      <Box>
        <NextImage src="/logo.svg" height={50} width={100} />
      </Box>
      <Box paddingY={3}>
        <SidebarList list={navMenu} />
      </Box>
      <Box paddingY={3}>
        <SidebarList list={musicMenu} />
      </Box>
      <Divider marginBottom={3} />
    </Box>
  );
};
