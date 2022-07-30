import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions} from '@mui/material';
import InvestmentList from './InvestmentList';

function InvestmentDialog({params}) {
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
        variant="outlined"
        onClick={handleClickOpen}
        size="small"
        color='primary'
      >
        Investments
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Investment History</DialogTitle>
        <DialogContent>
          <InvestmentList params={params}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default InvestmentDialog