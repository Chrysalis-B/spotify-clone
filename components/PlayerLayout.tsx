import { Grid, GridItem } from '@chakra-ui/layout';
import { PlayerBar } from './PlayerBar';
import { Sidebar } from './Sidebar/Sidebar';

export const PlayerLayout = ({ children }) => {
  return (
    <Grid
      height="100vh"
      templateColumns="minmax(250px, 15%) 1fr"
      templateRows="1fr 100px"
    >
      <GridItem overflow="hidden">
        <Sidebar />
      </GridItem>
      <GridItem overflow="scroll">{children}</GridItem>
      <GridItem colSpan={2}>
        <PlayerBar />
      </GridItem>
    </Grid>
  );
};
