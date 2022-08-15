import { React, useEffect, useState } from 'react';
import { Typography, TextField, Box, Button, Link, Grid, Select, FormControl, InputLabel, MenuItem } from '@mui/material';



function StudentSignupForm({setUser}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [classPeriod, setClassPeriod] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [allTeachers, setAllTeachers] = useState([]);
  const [errors, setErrors] = useState([]);

 
  useEffect(() => {
    fetch("/teachers", {
      method: "GET"
    })
    .then((r) => r.json())
    .then((teachers) => setAllTeachers(teachers))
  }, [])

  function handleSubmit(e) { //sessions#create => set session-hash to user_id
    e.preventDefault();
    setErrors([]);
    fetch("/signup/student", {  //formerly "/students"
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        balance: 15,
        work_habit_score: 0,
        avatar_url: avatar, 
        goal: "No goal submitted yet...",     
        class_period: classPeriod,
        admin: false,
        teacher_id: teacherId,
        username: username, 
        password: password,
        password_confirmation: passwordConfirmation
      })
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user)); //pass user response object up to State via Redux
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  const classPeriods = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <Box component="div">
    <Box textAlign={'center'} >     
    <Typography variant='h4' sx={{ color: "black", marginBottom: 0, marginTop: -1}}>Signup</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container rowSpacing={1} >
        <Grid item xs={6} md={6} lg={6}>
            <TextField 
              value={firstName} onChange={(e) => setFirstName(e.target.value)}
              id="First Name"  
              variant="outlined"
              placeholder="First Name"
              sx={{width: '28ch', backgroundColor: '#ffffff' }}
            />
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <TextField 
              value={lastName} onChange={(e) => setLastName(e.target.value)}
              id="Last Name"  
              variant="outlined"
              placeholder="Last Name"
              sx={{width: '28ch', backgroundColor: '#ffffff' }}
            />
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <TextField 
              value={avatar} onChange={(e) => setAvatar(e.target.value)}
              id="Avatar URL"  
              variant="outlined"
              placeholder="Avatar URL"
              sx={{width: '28ch', backgroundColor: '#ffffff' }}
            />
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            {/* <TextField 
              value={classPeriod} onChange={(e) => setClassPeriod(e.target.value)}
              id="Class Period"  
              variant="outlined"
              placeholder="Class Period ex: 1"
              sx={{width: '28ch', backgroundColor: '#ffffff' }}
            /> */}
            <FormControl fullWidth>
              <InputLabel id="get-class-period">Class Period</InputLabel>
              <Select
                labelId='get-class-period'
                id='class-period-select'
                value={classPeriod}
                onChange={((e) => setClassPeriod(e.target.value))}
              >
              {classPeriods.map((period) => (
                <MenuItem key={period} value={period}>{period}</MenuItem>
              ))}
              
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <FormControl fullWidth>
              <InputLabel id="get-teacher">Teacher</InputLabel>
              <Select
              labelId='get-teacher'
              id='student-form-teacher-select'
              value={teacherId} 
              onChange={(e) => setTeacherId(e.target.value)}  
            >
            {allTeachers.map((teacher) => (
              <MenuItem key={teacher.id} value={teacher.id}>{teacher.last_name}</MenuItem>
            ))}
            </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <TextField 
              value={username} onChange={(e) => setUsername(e.target.value)}
              id="Username"  
              variant="outlined"
              placeholder="Username"
              sx={{width: '28ch', backgroundColor: '#ffffff' }}
            />
          </Grid>
          <Grid item xs={6}md={6} lg={6}>
            <TextField 
              value={password} onChange={(e) => setPassword(e.target.value)}
              id="Password"
              type={'password'}  
              variant="outlined"
              placeholder="Password"
              sx={{width: '28ch', backgroundColor: '#ffffff' }}
            />
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <TextField 
              value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}
              id="Password Confirmation"
              type={'password'}  
              variant="outlined"
              placeholder="Password confirmation"
              sx={{width: '28ch', backgroundColor: '#ffffff' }}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
          <Link href="/student-profile">
              <Button 
               
                type='submit'
                color="primary"
                variant="contained" 
                sx={{ borderRadius: 2, margin: 3}}
              >
                Submit
              </Button>
           </Link>
          </Grid>
        </Grid>
        {errors.map((err) => (
          <Typography key={err} >{err}</Typography>
        ))}
      </form>
    </Box>
  </Box>
  )
}

export default StudentSignupForm