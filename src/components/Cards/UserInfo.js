import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function UserInfo({numOfResults, searchInput, searchBy}) {
    //severity = info/warning depending on if there are results
    const success = numOfResults !== 0 ? true : false;
    const alternative = searchBy === 'name' ? 'meaning' : 'name';
    const message = success ? `${numOfResults} result(s) found for ${searchInput}` : `Sorry no results found for '${searchInput}'. Try again with a different search input or change search parameter from '${searchBy}' to '${alternative}'`;
    console.log(message);
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity={success? 'success' : 'warning'}>{ message }.</Alert>
    </Stack>
  );
}

//using MUIs info alert (blue) for this, could also use severity=warning (yellow) or error (red)