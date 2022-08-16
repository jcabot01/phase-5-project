import { TextField, FormControl, Grid, Box, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateBalance } from '../../../features/studentsSlice';


//dispatch of balance


function Balance({params}) {
  const balance = params.row.balance
  const [value, setValue] = useState(balance)
  const dispatch = useDispatch();
  

  const studentId = params.row.id
  
  

  function handleChange(e) {
    setValue(e.target.value)
    handlePatch(parseInt(e.target.value))
  }

  function handlePatch(newValue) {

    const updatedObject = {
      balance: newValue
    }
    
    fetch(`/students/${studentId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedObject)
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((editedStudent) => console.log(editedStudent))
          dispatch(updateBalance({studentId: studentId, balance: newValue}))
          } else {
          res.json().then((err) => alert(err.errors))
          }
      })
     
  };

  
  return (
    <div>
      <Box sx={{}}>
        
        <Grid container>
          <Grid item xs={2} sx={{marginTop: 2}}>
            <Typography>$</Typography>
          </Grid>
          <Grid item xs={10}>
          <TextField
            id="outlined-number"
            // label="Number"
            type="number"
            inputProps={{
              min: 0,
            }}
            value={value}
            onChange={handleChange}
          />
          </Grid>
        </Grid>
        

      </Box>
     
       
       
      
    </div>
  )
}

export default Balance