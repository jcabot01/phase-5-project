import { Box, Button, Link } from '@mui/material'
import React from 'react'


function LogoutButton({setUser}) {

  function handleClick(){
    fetch("/logout", {method: "DELETE"}).then((r) => {
      if (r.ok) {
        setUser(null)
      }
    });
    console.log("Logged out")
  }

  return (
    <Box component={'div'}  >
      <Button variant="outlined" color='inherit' size='small' onClick={handleClick}>
        {/* <Link href="/" underline='none' color="inherit"> */}
           Logout
        {/* </Link> */}
      </Button>
    </Box>
  )
}

export default LogoutButton