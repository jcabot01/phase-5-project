import React, { useState } from 'react'
import { FormControl, MenuItem, Select, InputLabel, Typography, Box} from '@mui/material'
import { useDispatch } from 'react-redux'
import { updateBalanceAfterPrivilege, updateInvestmentDialog } from '../../../features/studentsSlice';



function PrivilegeSelect({params}) {
const [amountSpent, setAmountSpent] = useState('');
const dispatch = useDispatch();
const studentId = params.row.id


  function handleChange(e) {
    setAmountSpent(e.target.value)
    const privilegeCase = e.target.value
    
    function handlePost(privilegeObject){
      const oldBalance = params.row.balance
      const newBalance = oldBalance - privilegeObject.amount
      const amount = privilegeObject.amount

      dispatch(updateBalanceAfterPrivilege({id: studentId, balance: newBalance }))
      
      function isEvent (eventIsInvest) {
         return eventIsInvest ? dispatch(updateInvestmentDialog({id: studentId, amount: amount, event: "Invest", created_at: "just now..."})) : null
      }
      isEvent(privilegeObject.event === "Invest")   
     

        fetch('/privileges', {  //create new privilege in DB
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(privilegeObject)
        })
          .then((res) => res.json())
          .then((newPrivilege) => console.log(newPrivilege)) 
      /////////////////////////////////////////////////////////////////////////////////  
        const newBalancePayload = {
          balance: newBalance
        }
        
        fetch(`/students/${studentId}`, { //Decrements the student's balance
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newBalancePayload)
        })
        .then((res) => res.json())
        .then((updatedBalance) => console.log(updatedBalance)) //ready for redux
    }
    
    switch (privilegeCase) {
      case 'Music Card':
        const musicCard = {
          amount: 20,
          value: 20,
          event: "Music Card",
          student_id: studentId
        }
        handlePost(musicCard)
        break;

      case 'Snack Card':
        const snackCard = {
          amount: 20,
          value: 20,
          event: "Snack Card",
          student_id: studentId
        }
        handlePost(snackCard)
        break;      

      default:
        const invest = {
          amount: privilegeCase,
          value: privilegeCase,
          event: "Invest",
          student_id: studentId
        }
        handlePost(invest) //handles variable value; $100 or $30
    }
  }

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-simple-select-label">Select one</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={amountSpent}
          label="Privileges"
          onChange={handleChange}
        >
          <MenuItem value={"Music Card"}>Music Card $20</MenuItem>
          <MenuItem value={"Snack Card"}>Snack Card $20</MenuItem>   
          <Typography component={'div'}>
            <Box sx={{textAlign:'center', fontStyle: 'italic', fontWeight: 'light', fontSize: 12}}>
              or Invest
            </Box> 
          </Typography> 
          <MenuItem value={30}>$30</MenuItem>
          <MenuItem value={40}>$40</MenuItem>
          <MenuItem value={50}>$50</MenuItem>
          <MenuItem value={60}>$60</MenuItem>
          <MenuItem value={70}>$70</MenuItem>
          <MenuItem value={80}>$80</MenuItem>
          <MenuItem value={90}>$90</MenuItem>
          <MenuItem value={100}>$100</MenuItem>
        </Select>
    </FormControl>
  )
}

export default PrivilegeSelect