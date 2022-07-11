import NextImage from 'next/image';
import { Box, Divider, Grid, GridItem } from '@chakra-ui/layout';
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

const playLists = [...Array(50).keys()].map(i => ({
  name: `Playlist ${i + 1}`,
  route: '/'
}));

export const Sidebar = () => {
  return (
    <Grid
      bg="black"
      height="100%"
      padding={3}
      color="gray.300"
      display="grid"
      templateRows="auto 1fr"
    >
      <GridItem>
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
      </GridItem>
      <GridItem overflowY="scroll" bg="black">
        <SidebarList list={playLists} />
      </GridItem>
    </Grid>
  );
};
