import React from 'react';
import { Button } from '@mui/material';


function PaydayButton() {
  // const [getPaid, setGetPaid]

  return (
    <Button 
      variant="contained"
      size="small"
      color='success'
      onClick={() => console.log("got paid")}>
        Payday!
    </Button>
  )
}

export default PaydayButton