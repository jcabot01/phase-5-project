import React, { useState } from 'react'
import { FormControl, MenuItem, Select, InputLabel, Typography, Box} from '@mui/material'

function PrivilegeSelect() {
const [amount, setAmount] = useState('')

  function handleChange(e) {
    console.log(e.target.value)
    setAmount(e.target.value)
     //setAmount()
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
          <MenuItem value={20}>Music Card $20</MenuItem>
          <MenuItem value={20}>Snack Card $20</MenuItem>   
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