import { Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';


function LogoutButton({setUser}) {
  const navigate = useNavigate();
  function handleClick(){
    fetch("/logout/teacher", {method: "DELETE"}).then((r) => {
      if (r.ok) {
        setUser(null)
        navigate("/")
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

export default LogoutButton