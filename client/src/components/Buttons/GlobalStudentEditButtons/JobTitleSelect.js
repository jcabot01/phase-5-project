import React, {useState} from 'react'
import { FormControl, OutlinedInput, InputLabel, Select, MenuItem } from '@mui/material'

function JobTitleSelect({jobs, jobTitle, studentId}) {
  const [jobSelect, setJobSelect] = useState("");
 
  // console.log(result)
  // console.log(jobId)
  
  function handlePatch(jobId){
    const updatedJobPayload = {
      job_id: jobId
    }

    fetch(`/student_jobs/${studentId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedJobPayload)
    })
    .then((res) => res.json())
    .then((updatedJob) => console.log(updatedJob)) //redux dispatch eventually
  }

  function handleChange(e) {
    setJobSelect(e.target.value)
    handlePatch(e.target.value)
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
    <FormControl sx={{ width: 350 }}>
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


// function JobTitleSelect({jobs, result}) {

//   const [jobSelect, setJobSelect] = useState("")
//   const [jobChoice, setJobChoice] = useState("")
  
  
  
//     function handleJobSubmit(e) {
//       e.preventDefault()
//       console.log(jobChoice)
//     }
  
//     function handleChange(e) {
//       setJobSelect(e.target.value)
//       const jobState = params.row.jobs.map((job) => job.title)
//       setJobChoice(jobState[0])
//       // console.log(params)
//     }
  
//     return (
//       <form onSubmit={handleJobSubmit} id="jobSelect"> 
//               <FormControl fullWidth>
//                 <InputLabel id="job-select-label">Select Job</InputLabel>
//                 <Select
//                   labelId="job-select-label"
//                   id="job-select"
//                   value={jobSelect}
//                   label="Jobs"
//                   onChange={handleChange}
//                   // type='submit'
//                   // form="jobSelect"
//                 > 
//                 {jobs.map((job) => (
//                     <MenuItem key={job.id} value={job.id}>{job.title}</MenuItem>
//                 ))}   
//                 </Select>
//               </FormControl>
//               </form>
//     )
//   }
  
//   export default JobTitleSelect