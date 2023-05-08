import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';


//eventHandler to get the value of the clicked page = pageNum
function handleClick(event) {
  console.log(event.target.innerText);  //nothing happens so far, change pageNum here!
}

export default function CardsPagination() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', mb: 4}}>
    <Stack spacing={2}>
      <Pagination count={7} color="primary" onClick={(event) => handleClick(event)}/>
    </Stack>
    </Box>
  );
}

//count = {7}, because 78 cards / 12 cards per page = 7 pages