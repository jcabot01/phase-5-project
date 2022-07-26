import React, { useEffect, useState }from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { Avatar, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PaydayButton from './Buttons/GlobalStudentEditButtons/PaydayButton';
import RentButton from './Buttons/GlobalStudentEditButtons/RentButton';
import CollectRentButton from './Buttons/GlobalStudentEditButtons/CollectRentButton';
import PrivilegeDialog from './Buttons/GlobalStudentEditButtons/PrivilegeDialog';




function GlobalEditTable() {  //import students objects, fetch one level higher?
  const [students, setStudents] = useState([]);
 
//API and CRUD
  useEffect(() => {
    fetch("/students")
      .then((r) => r.json())
      .then((studentsData) => setStudents(studentsData))
  }, []);

  function handleDelete(e) {
    console.log(e)
  }

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

 
  // console.log(students)
  

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
      editable: true, 
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
      editable: true, 
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
    }, //onChange => student.desks.desk_number if owned ?
    { 
      field: "monthly_rent", 
      headerName: 'Monthly Rent', 
      editable: true, 
      width: 90, 
      renderCell: () => <RentButton /> 
    }, //a button, onClick => student.balance - 10 
    { 
      field: "collect_rent", 
      headerName: 'Collect Rent', 
      editable: true, 
      width: 124, 
      renderCell: () => <CollectRentButton /> 
    }, //a button, onClick => student.balance - 10 
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
      editable: true, 
      width: 80, 
      type: 'number', 
      valueFormatter: ({ value }) => currencyFormatter.format(value),
      renderCell: (params) => params.row.privileges.map((privilege) => {
        if (privilege.event === "Invest") {
          return currencyFormatter.format(privilege.amount)
        }
      }) 
    },
    {
      field: 'actions',
      type: 'actions',
      width: 80,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={handleDelete(params.id)}
        />,
        ]
    }
  ]

  // const rows = students?.map(student => {
  //   return {
  //     id: student?.id,
  //     class_period: student?.class_period,
  //     avatar_url: student?.avatar_url,
  //     username: student?.username,
  //     balance: student?.balance,
  //     job: student?.job.title,
  //     salary: student?.job.salary,
  //     work_habit_score: student?.work_habit_score,
  //     desks: student?.desks.desk

  //   }
  // })

  // console.log(students)
  return (
    <div>
      <DataGrid
        autoHeight
        rows={students}
        // rows={rows}
        columns={columns}
        
      />
    </div>
  )
}

export default GlobalEditTable