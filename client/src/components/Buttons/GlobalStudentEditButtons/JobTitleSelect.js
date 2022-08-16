import React, {useState} from 'react'
import { FormControl, OutlinedInput, InputLabel, Select, MenuItem, Typography } from '@mui/material'
import { useDispatch } from 'react-redux';
import { jobSelectChangeSalary } from '../../../features/studentsSlice';



function JobTitleSelect({jobs, jobTitle, studentId, studentJobsTable}) {
  const [jobSelect, setJobSelect] = useState("");
  const dispatch = useDispatch()
  const studentJobId = studentJobsTable.map((studentJob) => studentJob.id)

 
  
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
      
      fetch(`/student_jobs/${studentJobId}`, { //if they have a job, this updates it
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
    <form>
    <FormControl sx={{ width: 165 }}>
      <InputLabel id="job-select-label">{jobTitle.length > 0 ? jobTitle : ("SELECT JOB")}</InputLabel>
      <Select
        labelId="job-select-label"
        id="job-selector"
        value={jobSelect}
        onChange={handleChange}
        input={<OutlinedInput label="Job" />}
      >
    <MenuItem>{jobTitle}</MenuItem>
        {menuItems}
      </Select>
    </FormControl>
    </form>
    
  </div>
  )
}

export default JobTitleSelect