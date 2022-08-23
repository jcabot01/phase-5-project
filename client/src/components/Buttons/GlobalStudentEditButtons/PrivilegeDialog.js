import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography} from '@mui/material';
import PrivilegeSelect from './PrivilegeSelect';



function PrivilegeDialog({params}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button sx={{fontSize: "10px"}}
        variant="contained"
        onClick={handleClickOpen}
        size="small"
        color='secondary'
      >
        Privilege
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Purchase a Privilege</DialogTitle>
        <DialogContent>
          <PrivilegeSelect params={params} handleClose={handleClose}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
        <Typography textAlign='center' margin={2} >Your available Balance to spend is ${params.row.balance}</Typography>
      </Dialog>
    </div>
  );
}

export default PrivilegeDialog