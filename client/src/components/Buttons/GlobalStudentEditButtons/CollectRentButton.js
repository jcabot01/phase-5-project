import React from 'react'
import { Button } from '@mui/material'

function CollectRentButton() {
  return (
    <Button 
    variant="contained"
    size="small"
    color='warning'
    onClick={() => console.log("collected rent fron tenant")}>
      Collect Rent
  </Button>
  )
}

export default CollectRentButton