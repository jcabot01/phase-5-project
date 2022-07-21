import React from 'react';
import Image from '../images/board-game-gd3b62ce94_1920.jpg';
import { Button, Box, Typography, Paper } from '@mui/material';
import styled from '@emotion/styled';



function StudentOrTeacherPAGE() {

  const styles = {
    paperContainer: { 
        backgroundImage: `url(${Image})`
    }
  };

  return (
    <Box sx={{width: '422px', margin: 'auto' }}>
      <Paper style={styles.paperContainer} sx={{maxHeight: 920, borderRadius: 5, backgroundRepeat: 'no-repeat'}}>
      <Typography>Class-o-poly LOGO</Typography>
      <Wrapper>
        <Typography>Welcome to "Class-o-poly</Typography>
        <Button 
          variant='contained' 
          color='primary' 
          // onClick={() => navigate("/student-login")}
          href="/student-login"
        >
        Student
        </Button>     

        <Typography>or</Typography>

        <Button 
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
  width: 350px;
  display: "flex";
  flexDirection: "column";
  margin: auto;
  background-color: #f3f6f4; 
  margin-top: 100px;
  padding: 5px; 
  border-radius: 7px;
  opacity: 0.9
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

const Logo = styled.h1`
  font-family: "Over the Rainbow", cursive;
  font-size: 6rem;
  color: white;
`;
export default StudentOrTeacherPAGE