import React from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions} from '@mui/material'
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
          <PrivilegeSelect params={params}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default PrivilegeDialog