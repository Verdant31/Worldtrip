import { Grid, GridItem } from "@chakra-ui/layout";
import { Option } from "../option";

export function Options() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justify="space-between"
      align="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1, 5]}
    >
      <GridItem>
        <Option icon="nightlife" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Option icon="beach" text="praia" />
      </GridItem>
      <GridItem>
        <Option icon="modern" text="moderno" />
      </GridItem>
      <GridItem>
        <Option icon="classic" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Option icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  )
}