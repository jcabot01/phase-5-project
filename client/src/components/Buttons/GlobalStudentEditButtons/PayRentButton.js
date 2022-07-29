import React from 'react'
import { Button } from '@mui/material'




function PayRentButton({balance, studentId}) {
  const remainingBalance = balance - 10
  
  
  function handlePatch() {

    const newBalancePayload = {
      balance: remainingBalance
    }

    fetch(`/students/${studentId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBalancePayload)
    })
    .then((res) => res.json())
    .then((updatedBalance) => console.log(updatedBalance)) //redux dispatch eventually
  }
  
  return (
    <Button 
      variant="contained"
      size="small"
      color='primary'
      onClick={() => handlePatch()}>
        Pay Rent
    </Button>
    )
  }

export default PayRentButton