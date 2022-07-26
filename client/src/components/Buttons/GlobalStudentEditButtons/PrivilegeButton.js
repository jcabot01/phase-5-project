import React from 'react';
import { Button } from '@mui/material';
import PrivilegeDialog from './PrivilegeDialog';


function PrivilegeButton() {
  return (
    <Button 
      variant="contained"
      size="small"
      color='secondary'
      onClick={() => <PrivilegeDialog />}>
        Privilege
    </Button>
  )
}

export default PrivilegeButton
