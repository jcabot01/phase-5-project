import React, { useEffect, useState }from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { Avatar, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PaydayButton from './Buttons/GlobalStudentEditButtons/PaydayButton';
import RentButton from './Buttons/GlobalStudentEditButtons/RentButton';
import CollectRentButton from './Buttons/GlobalStudentEditButtons/CollectRentButton';
import PrivilegeButton from './Buttons/GlobalStudentEditButtons/PrivilegeButton';



function GlobalEditTable() {  //import students objects, fetch one level higher?
  const [students, setStudents] = useState([]);
 
//API and CRUD
  useEffect(() => {
    fetch("/students")
      .then((r) => r.json())
      .then((studentsData) => setStudents(studentsData))
  }, []);

  function handleDelete(id) {
    console.log(id)
  }

//Datagrid Helper Functions & Variables
  const currencyFormatter = new Intl.NumberFormat('en-US', {
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

  // const copyOfStudents = [...students]
  // function studentData () {
  //   return copyOfStudents.map((student) => student)
  // } 
  // const {student} = studentData();
  // console.log({student})
  // console.log(students)
  
  // console.log(students[0].job.title)

  const columns = [
    { 
      field: 'id', 
      headerName: 'ID', 
      width: 10 
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
      valueFormatter: ({ value }) => currencyFormatter.format(value),
      renderCell: (params) => params.row.job.salary
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
              <Typography key={desk.id}>Desk #{desk}</Typography>
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
              <Typography key={desk.id}>Desk #{desk}</Typography>
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
      width: 96, 
      renderCell: () => <PrivilegeButton /> 
    }, //a button, onClick => dialog popup to purchase privilege; snack, music, investment
    { 
      field: "investment", 
      headerName: 'Investment $', 
      editable: true, 
      width: 80, 
      type: 'number', 
      valueFormatter: ({ value }) => currencyFormatter.format(value),
      // renderCell: (params) => params.row.job.salary 
    },
    {
      field: 'actions',
      type: 'actions',
      width: 80,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          // onClick={handleDelete(params.id)}
        />,
        ]
    }
  ]

  // const studentJob = students.map((student) => student.job)
  // const jobTitle = studentJob.map((job) => job.title)
  // const studentsToFlat = [...students]
  // let flattendStudents = studentsToFlat.flat(5)

  // const rows = students.map((row) => ({
  //   id: row.id,
  //   avatar_url: row.avatar_url,
  //   first_name: row.first_name,
  //   balance: row.balance,
  //   job: row.job
  //   // salary: row.salary,
     
  // }))

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