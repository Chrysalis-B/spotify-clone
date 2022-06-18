import { Grid, GridItem } from '@chakra-ui/layout';
import { Sidebar } from './sidebar';

export const PlayerLayout = ({ children }) => {
  return (
    <Grid
      height="100vh"
      templateColumns="minmax(250px, 15%) 1fr"
      templateRows="1fr 100px"
    >
      <GridItem overflow="scroll">
        <Sidebar />
      </GridItem>
      <GridItem overflow="scroll">{children}</GridItem>
      <GridItem colSpan={2}>player</GridItem>
    </Grid>
  );
};
