import React, {useState} from 'react'
import { FormControl, OutlinedInput, InputLabel, Select, MenuItem } from '@mui/material'
import { useDispatch } from 'react-redux';
import { jobSelectChangeSalary } from '../../../features/studentsSlice';



function JobTitleSelect({jobs, jobTitle, studentId}) {
  const [jobSelect, setJobSelect] = useState("");
  const dispatch = useDispatch()
 
  
  function handleSubmit(jobId) {
    const jobMatch = jobs.find((job) => job.id === jobId)

    dispatch(jobSelectChangeSalary({id: studentId, title: jobMatch.title, salary: jobMatch.salary, jobId: jobMatch.id}))
    
    const updatedJobPayload = {
      job_id: jobId,
    }

    const newJobObject = {
      job_id: jobId,
      student_id: studentId 
    }

    if (jobTitle == "") {  //brand new student, no job association yet, don't mess with == vs. ===.  Runs an authorize method if ===
      fetch('/student_jobs', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newJobObject)
      })
      .then((res) => res.json())
      .then((newJob) => console.log(newJob))

    } else {
      
      fetch(`/student_jobs/${studentId}`, { //if they have a job, this updates it
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedJobPayload)
      })
      .then((res) => res.json())
      .then((updatedJob) => console.log(updatedJob))  //redux dispatch eventually
      }
  }

  function handleChange(e) {
    setJobSelect(e.target.value)
    handleSubmit(e.target.value)
  };

  const menuItems = jobs.map((job) => (
    <MenuItem
      key={job.title}
      value={job.id}
    >
      {job.title}
    </MenuItem>
  ))
  return (
    <div>
    <FormControl sx={{ width: 165 }}>
      <InputLabel id="job-select-label">{jobTitle}</InputLabel>
      <Select
        labelId="job-select-label"
        id="job-selector"
        defaultValue=""
        value={jobSelect}
        onChange={handleChange}
        input={<OutlinedInput label="Job" />}
      >
        {menuItems}
      </Select>
    </FormControl>
  </div>
  )
}

export default JobTitleSelect