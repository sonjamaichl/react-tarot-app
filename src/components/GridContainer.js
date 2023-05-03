import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import GridItem from "./GridItem";

export default function GridContainer() {
  return (
    <Box sx={{ flexGrow: 1, m: '2rem' }}>
      <Grid container spacing={2} >
        {/*insert grid items and content here */}
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      </Grid>
    </Box>
  );
}