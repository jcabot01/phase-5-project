import { Box, Button } from '@mui/material'
import React from 'react'


function StudentLogoutButton({setUser}) {

  function handleClick(){
    fetch("/logout/student", {method: "DELETE"}).then((r) => {
      if (r.ok) {
        setUser(null)
      }
    });
  }

  return (
    <Box component={'div'}  >
      <Button variant="outlined" color='inherit' size='small' onClick={handleClick}>
        Logout
      </Button>
    </Box>
  );
}

export default StudentLogoutButton