import React from 'react'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { updateBalance } from '../../../features/studentsSlice';



function CollectRentButton({params}) {
  const dispatch = useDispatch();

  
  function handleClick() {
    const studentBalance = params.row.balance
    const studentId = params.row.id
    const rentalIncome = 10
    const newBalance = studentBalance + rentalIncome

    dispatch(updateBalance({id: studentId, balance: newBalance}))

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
      .then((updatedBalance) => console.log(updatedBalance))
  }

  return (
    <Button sx={{fontSize: "10px"}}
    variant="contained"
    size="small"
    color='warning'
    onClick={() => handleClick()}>
      Collect Rent
  </Button>
  )
}

export default CollectRentButton