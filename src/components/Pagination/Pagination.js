import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';




export default function CardsPagination({ numOfCards, handlePageSelect }) {
//eventHandler to get the value of the clicked page = pageNum 
function handleClick(event) {
  console.log(event.target.innerText);  //nothing happens so far, change pageNum here!
  handlePageSelect(event.target.innerText);
}


  return (
    <Box sx={{display: 'flex', justifyContent: 'center', mb: 4}}>
    <Stack spacing={2}>
        {numOfCards !== 0 && <Pagination count={Math.ceil(numOfCards / 12)} color="primary" onClick={(event) => handleClick(event)} />}
    </Stack>
    </Box>
  );
}
