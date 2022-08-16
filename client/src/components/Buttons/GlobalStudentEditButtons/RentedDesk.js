import React, {useState} from 'react'
import { FormControl, OutlinedInput, InputLabel, Select, MenuItem } from '@mui/material'
import { useDispatch } from 'react-redux';
import { addRentedDeskToRentedColumn } from '../../../features/studentsSlice';


function RentedDesk({desks, params}) {
const [deskSelect, setDeskSelect] = useState("")
const studentId = params.row.id
const dispatch = useDispatch();
const isDesk = params.row.student_desks.length


// console.log(isDesk.length > 0 ? deskSelect : "Click to Rent")


function handlePost(deskId) {
  console.log(deskSelect, "deskSelect state")
  dispatch(addRentedDeskToRentedColumn({studentId: studentId, deskId: deskId, is_owned_or_rented: "rented"}))
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
    .then((newDesk) => console.log(newDesk))
}


  function handleChange(e) {
    console.log(e.target.value, "e.target.value")
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
  // isDesk.length > 0 ? deskSelect : "Click to Rent"
  return (
    <div>
      <form>
        {/* <FormControl sx={{ width: 350 }}> */}
        <FormControl id="form-Control" sx={{ width: 165 }}>
          <InputLabel  id="desk-select-label">Click to Rent</InputLabel>
          <Select
            
            labelId="desk-select-label"
            id="desk-selector"
            value={deskSelect}
            onChange={handleChange}
            input={<OutlinedInput label="Rent Desk" />}
          >
            {menuItems}
          </Select>
        </FormControl>
      </form>
      
    </div>
  )
}

export default RentedDesk