import React, { useState } from 'react';
import TeacherLoginForm from '../components/Logins/TeacherLoginForm';
import TeacherSignupForm from '../components/Logins/TeacherSignupForm';
import { Box, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';



function TeacherLoginPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <Box>
        <Box>
          <Wrapper>
            <Typography>Teacher Portal</Typography>
            {showLogin ? (
              <>
                <TeacherLoginForm setUser={setUser}/>
                <Box>
                  Don't have an account? &nbsp;
                  <Button color="primary" onClick={() => setShowLogin(false)}>
                    Signup
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <TeacherSignupForm setUser={setUser}/>
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
    </Box>
  )
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

export default TeacherLoginPage