import React, {useState} from 'react' //probably use Redux here
import { TextField, Button, Typography, Box, Link, Stack } from '@mui/material';

function StudentLoginForm({setUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) { //sessions#create => set session-hash to user_id
    e.preventDefault();
    console.log(username, password)
    // e.preventDefault()
    setErrors([]);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username, password})
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user)); //pass user response object up to App
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Box component="div">
    <Box textAlign={'center'} >     
      <Typography variant='h4' sx={{ color: "black", }}>Log In</Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} direction={'column'} alignItems="center">
          <TextField 
            value={username} onChange={(e) => setUsername(e.target.value)}
            id="StudentUsername"  
            variant="outlined"
            placeholder="Username"
            sx={{width: '28ch', backgroundColor: '#ffffff', marginTop: 2 }}
            
          />
          <TextField 
            value={password} onChange={(e) => setPassword(e.target.value)}
            id="StudentPassword"
            type={'password'}  
            variant="outlined"
            placeholder="Password"
            sx={{width: '28ch', backgroundColor: '#ffffff' }}
          />
          <Link href="/student-profile">
            <Button 
              type='submit'
              color="primary"
              variant="contained" 
              sx={{ borderRadius: 2, margin: 3, marginTop: 0}}
            >
              Submit
            </Button>
          </Link>
          </Stack>
          {errors.map((err) => (
            <Typography key={err} >{err}</Typography>
          ))}
      </form>
    </Box>
  </Box>
  )
}

export default StudentLoginForm