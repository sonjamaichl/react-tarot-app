import React from 'react';
import { Box, Toolbar } from '@mui/material';
import LogOut from '../components/UserLog/LogOut';

function LogOutPage() {
    return (
        <Box component="main" sx={{ display: 'flex', justifyContent: 'center', p: 3, mt: 10}}>
        <Toolbar />
        <LogOut />
        </Box>
    );
};

export default LogOutPage;