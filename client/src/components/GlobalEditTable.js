import React, { useEffect, useState }from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, Typography, Button } from '@mui/material';
import PaydayButton from './Buttons/GlobalStudentEditButtons/PaydayButton';
import RentButton from './Buttons/GlobalStudentEditButtons/RentButton';
import CollectRentButton from './Buttons/GlobalStudentEditButtons/CollectRentButton';
import PrivilegeDialog from './Buttons/GlobalStudentEditButtons/PrivilegeDialog';
import BuyDeskDialog from './Buttons/GlobalStudentEditButtons/BuyDeskDialog';




function GlobalEditTable() {  //import students objects, fetch one level higher?
  const [students, setStudents] = useState([]);
  const [deskPurchase, setDeskPurchase] = useState('1')
  const [pageSize, setPageSize] = useState(30);

  function handleDataSubmit(e) {
    console.log (e)
  }
   
/////////////////////////////////////////////////////////////////////////////////////////////////////////  
//API and CRUD
  useEffect(() => {
    fetch("/students")
      .then((r) => r.json())
      .then((studentsData) => setStudents(studentsData))
  }, []);

  function deleteUser(id) {
    setStudents((prevStudents) => prevStudents.filter((row) => row.id !== id));  
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////
  // function onBuyDesk(e){
  //   console.log(e)
  // }

//Datagrid Helper Functions & Variables
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    maximumSignificantDigits: 3,
    style: 'currency',
    currency: 'USD',
  });

//jobs to populate select dropdown
  const jobs = [ //literal job choices, once selected, they persist to DB as student job
    'Accountant', 
    'Point Pusher 1', 
    'Point Pusher 2', 
    'Class tutor 1', 
    'Class tutor 2', 
    'Financial Analyst', 
    'Crate Buster 1', 
    'Crate Buster 2', 
    'Paper Pusher 1', 
    'Paper Pusher 2', 
    'Techie',
    'Teacher\'s Pet',
    'Substitute',
    'Student #1',
    'Student #2',
    'Student #3',
    'Student #4', 
    'Student #5', 
    'Student #6', 
    'Student #7', 
    'Student #8', 
    'Student #9', 
    'Student #10', 
    'Student #11', 
    'Student #12', 
    'Student #13', 
    'Student #14', 
    'Student #15',
  ];

  // const desks = [
  //   { value: 1, label: "Desk #1" },
  //   { value: 2, label: "Desk #2" },
  //   { value: 3, label: "Desk #3" },
  //   { value: 4, label: "Desk #4" },
  //   { value: 5, label: "Desk #5" },
  //   { value: 6, label: "Desk #6" },
  //   { value: 7, label: "Desk #7" },
  //   { value: 8, label: "Desk #8" },
  //   { value: 9, label: "Desk #9" },
  //   { value: 10, label: "Desk #10" },
  //   { value: 11, label: "Desk #11" },
  //   { value: 12, label: "Desk #12" },
  //   { value: 13, label: "Desk #13" },
  //   { value: 14, label: "Desk #14" },
  //   { value: 15, label: "Desk #15" },
  //   { value: 16, label: "Desk #16" },
  //   { value: 17, label: "Desk #17" },
  //   { value: 18, label: "Desk #18" },
  //   { value: 19, label: "Desk #19" },
  //   { value: 20, label: "Desk #20" },
  //   { value: 21, label: "Desk #21" },
  //   { value: 22, label: "Desk #22" },
  //   { value: 23, label: "Desk #23" },
  //   { value: 24, label: "Desk #24" },
  //   { value: 25, label: "Desk #25" },
  //   { value: 26, label: "Desk #26" },
  //   { value: 27, label: "Desk #27" },
  //   { value: 28, label: "Desk #28" },
  //   { value: 29, label: "Desk #29" },
  //   { value: 30, label: "Desk #30" },
  // ];
 
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
      type: 'singleSelect', 
      valueOptions: jobs,
      width: 100,
      renderCell: (params) => params.row.job.title
    },
    { 
      field: "salary", 
      headerName: 'Salary', 
      editable: true, 
      width: 55, 
      type: 'number', 
      renderCell: (params) => currencyFormatter.format(params.row.job.salary)
    },
    {  
      field: "payday", 
      headerName: 'Payday', 
      editable: true, 
      width: 75, 
      renderCell: () => <PaydayButton /> 
    }, //a button, onClick => student.balance += student.salary
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
      editable: false, 
      type: 'number',
      width: 80,
      renderCell: (params) => {
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
      
    }, //onChange => student.desks.desk_number if rented ?
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

              <Typography key={desk}>Desk #{desk}</Typography>
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
      renderCell: () => <RentButton /> 
    }, //a button, onClick => student.balance - 10
     //Buy desk button 
    { 
      field: "collect_rent", 
      headerName: 'Collect Rent', 
      editable: true, 
      width: 124, 
      renderCell: () => <CollectRentButton /> 
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
      renderCell: () => <PrivilegeDialog /> 
    }, //a button, onClick => dialog popup to purchase privilege; snack, music, investment
    { 
      field: "investment", 
      headerName: 'Investment $', 
      editable: false, 
      width: 80, 
      type: 'number', 
      valueFormatter: ({ value }) => currencyFormatter.format(value),
      renderCell: (params) => params.row.privileges.map((privilege) => {
        if (privilege.event === "Invest") {
          return currencyFormatter.format(privilege.amount)
        } else {
          return null
        }
      }) 
    },
    { 
      field: "delete", 
      headerName: 'Remove User', 
      editable: false, 
      width: 90, 
      renderCell: (params) => {
        return (
          <Button 
            variant="contained"
            size="small"
            color='error'
            onClick={() => {
              deleteUser(params.row.id);
            }}
          >
          Delete
          </Button>
        )
      }
    }, 
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
    </div>
  )
}

export default GlobalEditTable