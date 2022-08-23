import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateWorkHabitScore } from '../../../features/studentsSlice'


function WorkHabitScore({params}) {
  const score = params.row.work_habit_score
  const [value, setValue] = useState(score)
  const dispatch = useDispatch();
  const studentId = params.row.id
  
  function handleChange(e) {
    setValue(e.target.value)
    handlePatch(parseInt(e.target.value))
  }

  function handlePatch(newValue) {
    const updatedObject = {
      work_habit_score: newValue
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
          res.json().then((editedStudent) => editedStudent)
          dispatch(updateWorkHabitScore({studentId: studentId, score: newValue}))
          } else {
          res.json().then((err) => alert(err.errors))
          }
      })
  };
  
  return (
    <div>
      <TextField
          id="outlined-number"
          type="number"
          inputProps={{
            min: 0, max: 4
          }}
          value={value}
          onChange={handleChange}
        />
    </div>
  );
}

export default WorkHabitScore