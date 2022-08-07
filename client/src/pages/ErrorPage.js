import React from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import { Box, Stack } from '@mui/material';


function ErrorPage() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" marginTop={7}>
      <Stack  spacing={2}>
        <Box margin='auto'><ErrorIcon sx={{ fontSize: 40 }}/></Box>
        <Box>Error 404: Page Not Found.  URL may be incorrect.</Box>
      </Stack>
    </Box>
    
  )
}

export default ErrorPage