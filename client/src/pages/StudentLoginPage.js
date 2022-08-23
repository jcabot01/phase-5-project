import React, { useState } from 'react';
import StudentLoginForm from '../components/Logins/StudentLoginForm';
import StudentSignupForm from '../components/Logins/StudentSignupForm';
import { Box, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';



function StudentLoginPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true)
  return (
    <Box>
      <Wrapper>
      <Typography>Student Portal</Typography>
        {showLogin ? (
          <>
            <StudentLoginForm setUser={setUser}/>
            <Box>
              Don't have an account? &nbsp;
              <Button color="primary" onClick={() => setShowLogin(false)}>
                Signup
              </Button>
            </Box>
          </>
        ) : (
          <>
            <StudentSignupForm setUser={setUser} />
            <Box>
              Already have an account? &nbsp;
              <Button color="primary" onClick={() => setShowLogin(true)}>
                Login
              </Button>
            </Box>
          </>
        )}
      </Wrapper>
    </Box>
  );
}

const Wrapper = styled.section`
  width: 500px;
  display: "flex";
  flexDirection: "column";
  margin: auto;
  background-color: #f3f6f4; 
  margin-top: 25px;
  margin-bottom: -5px;
  padding: 5px; 
  border-radius: 7px;
  opacity: 0.9;
  text-align:center
`;

export default StudentLoginPage