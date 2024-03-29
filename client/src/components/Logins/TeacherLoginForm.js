import React, {useState} from 'react'
import { TextField, Button, Typography, Box, Link, Stack } from '@mui/material';

function TeacherLoginForm({setUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) { //sessions#create => set session-hash to user_id
    e.preventDefault(); 
    setErrors([]);
    fetch("/login/teacher", {
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
              id="Username"  
              variant="outlined"
              placeholder="Username"
              sx={{width: '28ch', backgroundColor: '#ffffff', marginTop: 2 }}
            />
            <TextField 
              value={password} onChange={(e) => setPassword(e.target.value)}
              id="Password"
              type={'password'}  
              variant="outlined"
              placeholder="Password"
              sx={{width: '28ch', backgroundColor: '#ffffff' }}
            />
            <Link href="/">
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
  );
}

export default TeacherLoginForm