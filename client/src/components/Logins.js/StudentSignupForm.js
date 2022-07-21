import { React, useState } from 'react';
import { Typography, TextField, Box, Button, Link, Grid } from '@mui/material';

function StudentSignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [classPeriod, setClassPeriod] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [admin, setAdmin] = useState(false);
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) { //sessions#create => set session-hash to user_id
    e.preventDefault();
    console.log(firstName, lastName, avatar, classPeriod, username, password, passwordConfirmation, admin, errors)
    // e.preventDefault()
    // setErrors([]);
    // fetch("/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({username, password})
    // }).then((r) => {
    //   if (r.ok) {
    //     r.json().then((user) => onLogin(user)); //pass user response object up to App
    //   } else {
    //     r.json().then((err) => setErrors(err.errors));
    //   }
    // });
  }

  return (
    <Box component="div">
    <Box textAlign={'center'} >     
      
      <form onSubmit={handleSubmit}>
        <Grid container spacing={4} direction={'column'} alignItems="center">
        <Typography variant='h4' fontFamily={'cursive'} sx={{ color: "black", marginBottom: 3 }}>Signup</Typography>
        <TextField 
            value={firstName} onChange={(e) => setFirstName(e.target.value)}
            id="First Name"  
            variant="outlined"
            placeholder="First Name"
            sx={{width: '28ch', backgroundColor: '#ffffff' }}
          />
          <TextField 
            value={lastName} onChange={(e) => setLastName(e.target.value)}
            id="Last Name"  
            variant="outlined"
            placeholder="Last Name"
            sx={{width: '28ch', backgroundColor: '#ffffff' }}
          />
          <TextField 
            value={avatar} onChange={(e) => setAvatar(e.target.value)}
            id="Avatar"  
            variant="outlined"
            placeholder="Avatar"
            sx={{width: '28ch', backgroundColor: '#ffffff' }}
          />
          <TextField 
            value={classPeriod} onChange={(e) => setClassPeriod(e.target.value)}
            id="Class Period"  
            variant="outlined"
            placeholder="Class Period"
            sx={{width: '28ch', backgroundColor: '#ffffff' }}
          />
          <TextField 
            value={username} onChange={(e) => setUsername(e.target.value)}
            id="Username"  
            variant="outlined"
            placeholder="Username"
            sx={{width: '28ch', backgroundColor: '#ffffff' }}
          />
          <TextField 
            value={password} onChange={(e) => setPassword(e.target.value)}
            id="Password"
            type={'password'}  
            variant="outlined"
            placeholder="Password"
            sx={{width: '28ch', backgroundColor: '#ffffff' }}
          />
          <TextField 
            value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}
            id="Password Confirmation"
            type={'password'}  
            variant="outlined"
            placeholder="re-type password"
            sx={{width: '28ch', backgroundColor: '#ffffff' }}
          />
          </Grid>
          <Link href="/">
            <Button 
              type='submit'
              color="secondary"
              variant="contained" 
              sx={{ borderRadius: 2, margin: 3}}
            >
              Submit
            </Button>
          </Link>
          
          {errors.map((err) => (
            <Typography key={err} >{err}</Typography>
          ))}
      </form>
    </Box>
  </Box>
  )
}

export default StudentSignupForm