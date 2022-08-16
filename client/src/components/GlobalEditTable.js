import React, { useEffect, useState }from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, Typography, Button, Box } from '@mui/material';
import PaydayButton from './Buttons/GlobalStudentEditButtons/PaydayButton';
import PayRentButton from './Buttons/GlobalStudentEditButtons/PayRentButton';
import CollectRentButton from './Buttons/GlobalStudentEditButtons/CollectRentButton';
import PrivilegeDialog from './Buttons/GlobalStudentEditButtons/PrivilegeDialog';
import BuyDeskDialog from './Buttons/GlobalStudentEditButtons/BuyDeskDialog';
import JobTitleSelect from './Buttons/GlobalStudentEditButtons/JobTitleSelect';
import DeleteStudentButton from './Buttons/GlobalStudentEditButtons/DeleteStudentButton';
import InvestmentDialog from './Buttons/GlobalStudentEditButtons/InvestmentDialog';
import RentedDesk from './Buttons/GlobalStudentEditButtons/RentedDesk';
import WorkHabitScore from './Buttons/GlobalStudentEditButtons/WorkHabitScore';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import "./DataGridStyles.css" 
import { useDispatch } from 'react-redux';
import { updateWorkHabitScore, updateAvatar } from '../features/studentsSlice';




function GlobalEditTable({students}) {
  const [pageSize, setPageSize] = useState(30); //datagrid layout
  const [average, setAverage] = useState("No Scores"); //work_habit_scores average
  const dispatch = useDispatch();
 
  function handleDataSubmit(e) { //This handles "in-cell" edits.  These types of cells don't have embedded helper-components to persist to DB
    let studentData = e;
    let fieldName = e.field;
    let studentId = e.id;
    let value = e.value;

    const updatedObject = {[fieldName]: value}
    
    function handlePatch() {
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
          if (fieldName === "work_habit_score"){
            dispatch(updateWorkHabitScore({studentId: studentData.id, score: studentData.value}))
          } else if (fieldName === "avatar_url") {
            dispatch(updateAvatar({studentId: studentData.id, url: studentData.value}))
          }
         
        } else {
          res.json().then((err) => alert(err.errors + ". Please refresh your page to retrive previous value."))
        }
        })  
        
    };
    

    switch (studentData.field) {
      case 'class_period':
        handlePatch()
        break;
      case 'avatar_url':
        handlePatch()
        break;
      case 'balance':
        handlePatch()
        break;
      case 'work_habit_score':
        handlePatch()
        break;
      
      default:
        alert("Can't leave field blank. Please refesh page to retrieve old data")
        console.log("sorry, property doesn't exist")
    }
  }

  
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Datagrid Helper Functions and Variables
const currencyFormatter = new Intl.NumberFormat('en-US', {
  maximumSignificantDigits: 3,
  style: 'currency',
  currency: 'USD',
});

//GET jobs to populate select dropdown
const [jobs, setJobs] = useState([]);
useEffect(() => {
  fetch("/jobs")
  .then((r) => r.json())
  .then((job) => setJobs(job))
}, [])

//average the work_habit_scores
function handleClick() {
  const workHabitScoresArray = students.map((student) => student.work_habit_score)
  const average = workHabitScoresArray.reduce((a, b) => a + b, 0) / workHabitScoresArray.length;
  setAverage(average)
}

//GET desks to populate rental dropdown
const [desks, setDesks] = useState([]);
useEffect(() => {
  fetch('/desks')
  .then((r) => r.json())
  .then((desk) => setDesks(desk))
}, [])
 

/////Data Grid//////////////////////////////////////////////////////
  const columns = [
    { 
      field: 'id', 
      headerName: 'ID', 
      width: 10 
    },
    {
      field: "class_period", 
      headerName: 'Period', 
      editable: true,
      width: 60
    },
    { 
      field: 'avatar_url', 
      headerName: 'Avatar', 
      width: 55,
      editable: true,
      sortable: false,
      renderCell: (students) => {
        return (
          <>
            <Avatar src={students.row.avatar_url} />
          </>
        )
      }
    },
    { 
      field: "username", 
      headerName: 'Username', 
      editable: true, 
      width: 80 
    },
    { 
      field: "balance", 
      headerName: 'Balance $', 
      editable: true, 
      width: 80, 
      type: 'number', 
      valueFormatter: ({ value }) => currencyFormatter.format(value), 
    },
    {
      field: "job",
      headerName: "Job",
      editable: true, 
      width: 150,
      renderCell: (params) => {
        const jobTitle = (params.row.jobs.map((job) => job.title))
        const studentId = params.row.id
        const studentJobsTable = params.row.student_jobs
        // if (jobTitle == "") return <Typography sx={{color: 'red'}}>Pick a job</Typography>
        return (
          <div>
            <JobTitleSelect jobTitle={jobTitle} jobs={jobs} studentId={studentId} studentJobsTable={studentJobsTable}/>
          </div>    
        )
      }        
    },
    { 
      field: "salary", 
      headerName: 'Salary', 
      width: 55, 
      type: 'number', 
      renderCell: (params) => {
        let salary = (params.row.jobs.map((job) => job.salary))

        if (params.row.jobs == ""){
          return (
            <Typography>$0</Typography>
          )
        }
          return (
            <Typography>{currencyFormatter.format(salary[0])}</Typography>
          )
      }
    },
    {  
      field: "payday", 
      headerName: 'Payday', 
      editable: true, 
      width: 75, 
      renderCell: (params) => <PaydayButton params={params} /> 
    },
    { 
      field: "work_habit_score", 
      headerName: 'Work Habit (0/4)', 
      editable: true, 
      type: 'number', 
      width: 120,
      renderCell:(params) => {
        return (
          <WorkHabitScore params={params}/>
        )
      }
    },
    { 
      field: "desk_rented", 
      headerName: 'Desk Rented', 
      editable: true, 
      width: 140,
      renderCell: (params) => {
        if (params.row.student_desks.length === 0) {
          return (
            <RentedDesk desks={desks} params={params}/>
          )
        } else {
            let result = []
            params.row.student_desks.map((desk) => desk.is_owned_or_rented == "rented" ? result.push(desk.desk_id) : null)        
              return (
                <div>
                  {result.map((desk) => (
                    <Typography key={desk}>Desk #{desk}</Typography>
                  ))}
                </div>
              )
        }
      }  
    },
    { 
      field: "desks_owned", 
      headerName: 'Desk(s) Owned', 
      editable: false, 
      type: 'string', 
      width: 110, 
      renderCell: (params) => {
        let result = []
        params.row.student_desks.map((desk) => desk.is_owned_or_rented === "owned" ? result.push(desk.desk_id) : null)        
        return (
          <div>
            {result.map((desk) => (
              <Typography sx={{margin: "4px", fontSize: "11px", lineHeight: 1}}key={desk}>Desk #{desk}</Typography>
            ))}
           
          </div>
        )
      }  
    },
    { 
      field: "monthly_rent", 
      headerName: 'Monthly Rent', 
      editable: true, 
      width: 100, 
      renderCell: (params) => {
        const balance = params.row.balance
        const studentId = params.row.id
          return (
            <PayRentButton balance={balance} studentId={studentId}/>
          )
      } 
    },
    { 
      field: "collect_rent", 
      headerName: 'Collect Rent', 
      editable: true, 
      width: 120, 
      renderCell: (params) => {
       if (params.row.student_desks.length >= 2) {
        return (
          <CollectRentButton params={params}/>
        )
       } else {
        return (
        //   <Button sx={{fontSize: "10px"}}
        //   variant="contained"
        //   size="small"
        //   color='warning'
        //   onClick={() => alert("You don't own a rental property yet")}>
        //     Collect Rent
        // </Button>
        <Typography>No Rentals</Typography>
        )
       } 
        
      }
    },
    {
      field: "buy_desk",
      headerName: "Buy Desk",
      editable: true, 
      type: 'singleSelect',
      width: 100,
      renderCell: (params) => {
        if (params.row.balance > 50) {
          return (
            <BuyDeskDialog params={params} /> 
          )
         } else {
          return (
          <Typography>---</Typography>
          )
         }
        }
    },
    { 
      field: "privilege", 
      headerName: 'Privileges', 
      editable: true, 
      width: 104, 
      renderCell: (params) => {
        if (params.row.balance > 20) {
          return (
            <PrivilegeDialog params={params}/> 
          )
         } else {
          return (
          <Typography>---</Typography>
          )
         }
        } 
    },
    { 
      field: "investment", 
      headerName: 'Investment $', 
      editable: false, 
      width: 110, 
      renderCell: (params) => <InvestmentDialog params={params} />
    },
    { 
      field: "delete", 
      headerName: 'Remove User', 
      editable: false, 
      width: 90, 
      renderCell: (params) => {
        return (
          <DeleteStudentButton params={params} />
        )
      }
    }, 
  ];
  
  return (
    <div style={{width: '100%' }}>
      <div style={{ display: 'flex', justifyContent:'center' }}>
        <div style={{ flexGrow: 1 }}>
        <StyledEngineProvider injectFirst>
          <DataGrid
            autoHeight
            rows={students}
            columns={columns}
            getRowId={(row) => row.id}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[10, 30, 60]}
            pagination
            // onCellEditCommit={handleDataSubmit}
          />
        </StyledEngineProvider>
        </div>
        
      </div>  
      <Box textAlign={'center'} marginBottom="20px">
        <Button 
        variant="contained"
        size="small"
        color='primary'
        onClick={() => handleClick()}>
          Click to Average
        </Button>
        
        <Typography>{average}</Typography>
      </Box>
    </div>
  )
}

export default GlobalEditTable