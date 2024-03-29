import React, { useState } from 'react';
import Image from '../images/board-game-gd3b62ce94_1920.jpg';
import { Button, Box, Typography, Paper, Dialog, DialogActions, DialogContent } from '@mui/material';
import styled from '@emotion/styled';
import CopyrightIcon from '@mui/icons-material/Copyright';
import StudentLoginPage from './StudentLoginPage';
import TeacherLoginPage from './TeacherLoginPage';
import LogoImage from '../images/FutureForwardEdLogo.png'



function StudentOrTeacherPage({setUser}) {
  const [studentOpen, setStudentOpen] = useState(false);
  const [teacherOpen, setTeacherOpen] = useState(false);

  const handleStudentOpen = () => {
    setStudentOpen(true);
  };

  const handleStudentClose = () => {
    setStudentOpen(false);
  };

  const handleTeacherOpen = () => {
    setTeacherOpen(true);
  };

  const handleTeacherClose = () => {
    setTeacherOpen(false);
  };

  const styles1 = {
        paperContainer: { 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${Image})`
        }
      };
  
  return (
    <Box textAlign='center'>
      <Paper style={styles1.paperContainer} sx={{backgroundRepeat: 'no-repeat', marginTop: 5, marginRight:10, marginLeft: 10, marginBottom: 2, justifyContent: "center", alignItems: "center" }}>
        <Box sx={{height: 80}}>
        </Box>
        <LogoWrapper component={'div'} style={{ border: '4px solid' }}>
          <Logo>Class-o-poly</Logo>
        </LogoWrapper>
        <Wrapper>
          <Typography>Click your role to begin!</Typography>
          <Box>
            <Button
              id="student-btn" 
              sx={{marginTop: 2}}
              variant='contained' 
              color='primary' 
              onClick={handleStudentOpen}
            >
            Student
            </Button>   
            <Dialog open={studentOpen} onClose={handleStudentClose} id="student-btn">
              <DialogContent>
                <StudentLoginPage setUser={setUser} />
              </DialogContent>
              <DialogActions>
                <Button id="student-btn" onClick={handleStudentClose}>Close</Button>
              </DialogActions>
            </Dialog>
          </Box>
          
          <Typography>or</Typography>

          <Box>
            <Button 
              id="teacher-btn"
              sx={{marginBottom: 2}}
              variant='contained' 
              color='primary' 
              onClick={handleTeacherOpen}
            >
            Teacher
            </Button>
            <Dialog id="teacher-btn"open={teacherOpen} onClose={handleTeacherClose}>
              <DialogContent>
                <TeacherLoginPage setUser={setUser} />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleTeacherClose}>Close</Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Wrapper>
        <Box sx={{height: 50}}>
        </Box>
      </Paper>
      <Box>
        <Typography><CopyrightIcon/>Future Forward Education LLC</Typography>
        <Box>
          <img src={LogoImage} alt="Logo" />
        </Box>       
      </Box>
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


export default StudentOrTeacherPage