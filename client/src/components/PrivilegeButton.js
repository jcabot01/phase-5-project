import React from 'react';
import { Button } from '@mui/material';


function PrivilegeButton() {
  return (
    <Button 
      variant="contained"
      size="small"
      color='secondary'
      onClick={() => console.log("purchase a privilege")}>
        Privilege
    </Button>
  )
}

export default PrivilegeButton
