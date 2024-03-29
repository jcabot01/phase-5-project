import React from 'react'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { updateBalance } from '../../../features/studentsSlice'


function PayRentButton({balance, studentId}) {
  const remainingBalance = balance - 10
  const dispatch = useDispatch();
  
  function handlePatch() {
    dispatch(updateBalance({balance: remainingBalance, id: studentId}))

    const newBalancePayload = {
      balance: remainingBalance
    }

    fetch(`/students/${studentId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBalancePayload)
    }).then((res) => {
        if (res.ok) {
          res.json().then((updatedBalance) => updatedBalance)    
        } else {
          res.json().then((err) => alert(err.errors))
        }
      })
  } 

  return (
    <Button sx={{fontSize: "10px"}}
      variant="contained"
      size="small"
      color='primary'
      onClick={() => handlePatch()}>
        Pay Rent
    </Button>
  );
}

export default PayRentButton