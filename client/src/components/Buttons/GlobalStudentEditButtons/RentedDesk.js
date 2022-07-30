import React, {useState} from 'react'
import { FormControl, OutlinedInput, InputLabel, Select, MenuItem } from '@mui/material'

function RentedDesk({desks, params}) {
const [deskSelect, setDeskSelect] = useState("")
const studentId = params.row.id

function handlePost(deskId) {
  const deskPayload = {
    desk_id: deskId,
    student_id: studentId,
    is_owned_or_rented: "rented"
  }

    fetch('/student_desks', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(deskPayload)
    })
    .then((res) => res.json())
    .then((newDesk) => console.log(newDesk)) //ready for redux
}


  function handleChange(e) {
    setDeskSelect(e.target.value)
    handlePost(e.target.value)
  };

  const menuItems = desks.map((desk) => (
    <MenuItem
      key={desk.id}
      value={desk.id}
    >
      Desk #{desk.id}
    </MenuItem>
  ))
  return (
    <div>
    <FormControl sx={{ width: 350 }}>
      <InputLabel id="desk-select-label" sx={{fontSize: '10px'}}>Rent desk</InputLabel>
      <Select
        labelId="desk-select-label"
        id="desk-selector"
        defaultValue=""
        value={deskSelect}
        onChange={handleChange}
        input={<OutlinedInput label="Rent Desk" />}
      >
        {menuItems}
      </Select>
    </FormControl>
  </div>
  )
}

export default RentedDesk