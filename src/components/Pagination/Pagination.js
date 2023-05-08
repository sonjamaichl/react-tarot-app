import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function CardsPagination() {
  return (
    <Stack spacing={2}>
      <Pagination count={7} color="primary" />
    </Stack>
  );
}

//count = {7}, because 78 cards / 12 cards per page = 7 pages