import React, {useState, useEffect} from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

function JobTitleSelect({jobs, params}) {

const [jobSelect, setJobSelect] = useState("")



  // function handleJobSubmit(e) {
  //   e.preventDefault()
  // }
  function handleChange(e) {
    setJobSelect(e.target.value)
    console.log(params)
  }

  return (
    // <form onSubmit={handleJobSubmit} id="jobSelect"> 
            <FormControl fullWidth>
              <InputLabel id="job-select-label">Select Job</InputLabel>
              <Select
                labelId="job-select-label"
                id="job-select"
                value={jobSelect}
                label="Jobs"
                onChange={handleChange}
                // type='submit'
                // form="jobSelect"
              > 
              {jobs.map((job) => (
                  <MenuItem key={job.id} value={job.id}>{job.title}</MenuItem>
              ))}   
              </Select>
            </FormControl>
            // </form>
  )
}

export default JobTitleSelect