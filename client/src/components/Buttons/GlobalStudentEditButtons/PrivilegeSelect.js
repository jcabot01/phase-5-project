import React, { useState } from 'react'
import { FormControl, MenuItem, Select, InputLabel, Typography, Box} from '@mui/material'

function PrivilegeSelect({params}) {
const [amount, setAmount] = useState('')
const studentId = params.row.id

  function handleChange(e) {
    setAmount(e.target.value)
    const privilegeCase = e.target.value
    

    function handlePost(privilegeObject){
      // console.log(privilegeObject)
      fetch('/privileges', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(privilegeObject)
      })
        .then((res) => res.json())
        .then((newPrivilege) => console.log(newPrivilege)) //ready for redux
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
          value={amount}
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