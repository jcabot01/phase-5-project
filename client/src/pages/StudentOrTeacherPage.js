import React from 'react';
import Image from '../images/board-game-gd3b62ce94_1920.jpg';
import { Button, Box, Typography, Paper } from '@mui/material';
import styled from '@emotion/styled';
import { red } from '@mui/material/colors';



function StudentOrTeacherPAGE() {
  const styles = {
        paperContainer: { 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${Image})`
        }
      };
  
  return (
    <Box sx={{}}>
      
      <Paper style={styles.paperContainer} sx={{backgroundRepeat: 'no-repeat', margin: 5, height: 525 }}>
      <Box sx={{height: 100}}></Box>
      <LogoWrapper component={'div'} style={{ border: '4px solid' }}>
        <Logo>Class-o-poly</Logo>
      </LogoWrapper>
      <Wrapper>
        <Typography>Click your role to begin!</Typography>
        <Button 
          sx={{marginTop: 2}}
          variant='contained' 
          color='primary' 
          // onClick={() => navigate("/student-login")}
          href="/student-login"
        >
        Student
        </Button>     

        <Typography>or</Typography>

        <Button 
          sx={{marginBottom: 2}}
          variant='contained' 
          color='primary' 
          // onClick={() => navigate("/teacher-login")}
          href="/teacher-login"
        >
        Teacher
        </Button>
      </Wrapper>
      </Paper>
    </Box>
   
  );
}

const Wrapper = styled.section`
  width: 250px;
  display: "flex";
  flexDirection: "column";
  margin: auto;
  background-color: #f3f6f4; 
  margin-top: 50px;
  padding: 5px; 
  border-radius: 7px;
  opacity: 0.9;
  text-align:center
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

const Logo = styled.h1`
  margin-top: 7px;
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


export default StudentOrTeacherPAGE