import { Grid, GridItem } from '@chakra-ui/layout';

const PlayerLayout = ({ children }) => {
  return (
    <Grid
      height="100vh"
      templateColumns="minmax(250px, 15%) 1fr"
      templateRows="1fr 100px"
    >
      <GridItem overflow="scroll">sidbar</GridItem>
      <GridItem overflow="scroll">{children}</GridItem>
      <GridItem colSpan={2}>player</GridItem>
    </Grid>
  );
};

export default PlayerLayout;
