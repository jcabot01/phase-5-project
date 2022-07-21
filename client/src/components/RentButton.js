import React from 'react'
import { Button } from '@mui/material'



function RentButton() {
  return (
    <Button 
      variant="contained"
      size="small"
      color='primary'
      onClick={() => console.log("paid rent :( ")}>
        Pay Rent
    </Button>
    )
  }

export default RentButton