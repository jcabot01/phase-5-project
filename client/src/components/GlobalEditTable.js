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

import { useSelector, useDispatch } from 'react-redux';
import { fetchStudents } from '../features/studentsSlice';


function GlobalEditTable({students}) {
  

  // const [students, setStudents] = useState([]);
  const [deskPurchase, setDeskPurchase] = useState('1')
  const [pageSize, setPageSize] = useState(30);
  const [average, setAverage] = useState("No Scores")
 
  function handleDataSubmit(e) { //don't delete
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
        .then((res) => res.json())
        .then((editedStudent) => console.log(editedStudent))
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
        console.log("sorry, property doesn't exist")
    }
  }


/////////////////////////////////////////////////////////////////////////////////////////////////////////  
//API and CRUD
  // useEffect(() => {
  //   fetch("/students")
  //     .then((r) => r.json())
  //     .then((studentsData) => setStudents(studentsData))
  // }, []);

  // function deleteUser(id) {
  //   setStudents((prevStudents) => prevStudents.filter((row) => row.id !== id));
  //   fetch(`/students/${id}`, {
  //     method: "DELETE",
  //   })  
  // }
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Datagrid Helper Functions & Variables
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    maximumSignificantDigits: 3,
    style: 'currency',
    currency: 'USD',
  });

//jobs to populate select dropdown
const [jobs, setJobs] = useState([])

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
//desk to populate rental dropdown
const [desks, setDesks] = useState([])

useEffect(() => {
  fetch('/desks')
  .then((r) => r.json())
  .then((desk) => setDesks(desk))
}, [])
 
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
          return (
            <div>
              <JobTitleSelect jobTitle={jobTitle} jobs={jobs} studentId={studentId}/>
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
      width: 80 
    },
    { 
      field: "desk_rented", 
      headerName: 'Desk Rented', 
      editable: true, 
      width: 80,
      renderCell: (params) => {
        if (params.row.student_desks.length == 0) {
          return (
            <RentedDesk desks={desks} params={params}/>
          )
        } else {
            let result = []
            params.row.student_desks.map((desk) => desk.is_owned_or_rented === "rented" ? result.push(desk.desk_id) : null)        
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
      width: 80, 
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
      width: 90, 
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
      width: 124, 
      renderCell: (params) => <CollectRentButton params={params}/> 
    }, //a button, onClick => student.balance - 10 
    {
      field: "buy_desk",
      headerName: "Buy Desk",
      editable: true, 
      type: 'singleSelect',
      width: 100,
      renderCell: (params) => <BuyDeskDialog params={params} /> 
    },
    { 
      field: "privilege", 
      headerName: 'Purchase a Privilege', 
      editable: true, 
      width: 104, 
      renderCell: (params) => <PrivilegeDialog params={params}/> 
    },
    { 
      field: "investment", 
      headerName: 'Investment $', 
      editable: false, 
      width: 110, 
      renderCell: (params) => <InvestmentDialog params={params} />
    },
    // { 
    //   field: "delete", 
    //   headerName: 'Remove User', 
    //   editable: false, 
    //   width: 90, 
    //   renderCell: (params) => {
    //     return (
    //       <DeleteStudentButton params={params} deleteUser={deleteUser} />
    //     )
    //   }
    // }, 
  ];
  
  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        autoHeight
        rows={students}
        columns={columns}
        getRowId={(row) => row.id}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10, 30, 60]}
        pagination
        onCellEditCommit={handleDataSubmit}
      />
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