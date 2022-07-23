import React, { useState } from 'react';
import TeacherLoginForm from '../components/Logins.js/TeacherLoginForm';
import TeacherSignupForm from '../components/Logins.js/TeacherSignupForm';
import Image from '../images/board-game-gd3b62ce94_1920.jpg';
import { Box, Typography, Button, Paper } from '@mui/material';
import styled from '@emotion/styled';



function TeacherLoginPage() {
  const [showLogin, setShowLogin] = useState(true)

  const styles = {
    paperContainer: { 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${Image})`
    }
  };

  return (
    <Box>
        <Paper style={styles.paperContainer} sx={{backgroundRepeat: 'no-repeat', margin: 3, height: 565 }}>
        <Box sx={{height: 50}}>
        </Box>
        <LogoWrapper component={'div'} style={{ border: '4px solid' }}>
          <Logo>Class-o-poly</Logo>
        </LogoWrapper>
        <Box>
          <Wrapper>
            <Typography>Teacher Portal</Typography>
            {showLogin ? (
              <>
                <TeacherLoginForm />
                <Box>
                  Don't have an account? &nbsp;
                  <Button color="primary" onClick={() => setShowLogin(false)}>
                    Signup
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <TeacherSignupForm />
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
        </Paper>
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

const Logo = styled.h1`
  margin-top: 7px;
  margin-bottom: 0px;
  font-family: 'Alegreya', serif;
  font-size: 3rem;
  background: #BF0000;
  background: radial-gradient(circle farthest-corner at right center, #BF0000 25%, #FFFF4D 54%, #00CF0E 76%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

  const LogoWrapper = styled.section`
    text-align: center;
    height: 85px;
    width: 350px;
    margin: auto;
    background-color: #cccccc;
    padding: 5px; 
    border: 3px
  `;

export default TeacherLoginPage