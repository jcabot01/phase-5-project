import React, { useState } from 'react';
import StudentLoginForm from '../components/Logins.js/StudentLoginForm';
import StudentSignupForm from '../components/Logins.js/StudentSignupForm';
// import Image from '../src/images/board-game-gd3b62ce94_1920.jpg'
import { Box, Typography, Button } from '@mui/material';




function StudentLoginPage() {
  const [showLogin, setShowLogin] = useState(true)
  return (
    <Box>
        <Box>
          <Typography>Class-o-polyLOGO</Typography>
        </Box>
        <Box>
          <Typography>Student Portal</Typography>
          {showLogin ? (
            <>
              <StudentLoginForm />
              <Box>
                Don't have an account? &nbsp;
                <Button color="secondary" onClick={() => setShowLogin(false)}>
                  Signup
                </Button>
              </Box>
            </>
          ) : (
            <>
              <StudentSignupForm />
              <Box>
                Already have an account? &nbsp;
                <Button color="secondary" onClick={() => setShowLogin(true)}>
                  Login
                </Button>
              </Box>

            </>
          )}
          
        </Box>
    </Box>
  )
}

export default StudentLoginPage