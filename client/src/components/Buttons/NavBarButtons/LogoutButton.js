import { Box, Button, Link } from '@mui/material'
import React from 'react'


function LogoutButton({setUser}) {

  function handleClick(){
    fetch("/logout/teacher", {method: "DELETE"}).then((r) => {
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
  )
}

export default LogoutButton