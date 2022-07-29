import React from 'react'
import { Button } from '@mui/material'

function CollectRentButton({params}) {

  function handleClick() {
    const studentBalance = params.row.balance
    const studentId = params.row.id
    const rentalIncome = 10
    const newBalance = studentBalance + rentalIncome

    const collectRentPayload = {
      balance: newBalance
    }

    fetch(`/students/${studentId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(collectRentPayload)
    })
      .then((res) => res.json())
      .then((updatedBalance) => console.log(updatedBalance)) //ready for redux
  }

  return (
    <Button 
    variant="contained"
    size="small"
    color='warning'
    onClick={() => handleClick()}>
      Collect Rent
  </Button>
  )
}

export default CollectRentButton