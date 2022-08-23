import React, {useState } from 'react'
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { Select, FormControl, InputLabel, MenuItem, Box } from '@mui/material';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import "../components/DataGridStyles.css"



function Attendance({user}) {
  const [period, setPeriod] = useState(1)

  const students = user.students
  const filteredStudents = students.filter((student) => student.class_period === period)

  function handleChange(e) {
    setPeriod(e.target.value)
  }
  
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer> 
    );
  }

  const columns = [
    {field: 'class_period', 
    headerName: 'Class Period', 
    width: 100 
    },
    {field: 'last_name', 
    headerName: 'Last Name', 
    width: 100 
    },
    {field: 'first_name', 
    headerName: 'First Name', 
    width: 100 
    },   
  ]

  return (
      <div>
        <Box textAlign={'center'}>
          <FormControl width={20}>
            <InputLabel id="demo-simple-select-label">Period</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="period-select"
              value={period}
              label="Period"
              onChange={handleChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box style={{margin: 'auto', width: 400, marginTop: 20 }}>
          <StyledEngineProvider injectFirst >
          <DataGrid
                autoHeight
                columns={columns}
                rows={filteredStudents}
                checkboxSelection
                components={{
                  Toolbar: CustomToolbar,
                }}
              />
          </StyledEngineProvider>
        </Box>
      </div>
  );
}

export default Attendance