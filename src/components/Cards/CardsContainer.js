import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Cards from "./Cards";

export default function CardsContainer() {
  let pageNum = 1;  //use setPageNum to change it!
  return (
    <Box sx={{ flexGrow: 1, m: '2rem' }}>
      <Grid container spacing={2} >
        {/*insert grid items = cards here */}
        <Cards pageNum={pageNum}/>
      </Grid>
    </Box>
  );
}