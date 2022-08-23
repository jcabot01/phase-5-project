import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateBalance } from '../../../features/studentsSlice';



function PaydayButton({params}) {
  const dispatch = useDispatch();

  function handleClick(){
    const salary = params.row.jobs.map((job) => job.salary)
    const oldBalance = params.row.balance
    const newBalance = salary[0] + oldBalance
    const studentId = params.row.id

    dispatch(updateBalance({id: studentId, balance: newBalance}))

    const newBalancePayload = {
      balance: newBalance
    }

    fetch(`/students/${studentId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBalancePayload)
    })
        .then((res) => res.json())
        .then((newBalanceObject) => newBalanceObject)
  }

  return (
    <Button sx={{fontSize: "10px"}}
      variant="contained"
      size="small"
      color='success'
      onClick={() => handleClick()}>
        Payday!
    </Button>
  );
}

export default PaydayButton