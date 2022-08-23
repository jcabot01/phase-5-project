import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import CopyrightIcon from '@mui/icons-material/Copyright';
import GlobalEditTable from '../components/GlobalEditTable';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStudents } from '../features/studentsSlice';

function GlobalStudentEditPage({user}) {
  const students = useSelector((state) => state.students.entities)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  
  const studentByTeacher = students.filter((student) => student.teacher_id === user.id)
 
  return (
    <Box>
      <Box>
        <Wrapper component={'div'} style={{ borderRadius: '7px' }}>
          <Typography variant='h4'>Global Student Edit</Typography>
        </Wrapper>
      </Box>
      
      <Box sx={{height: 20}}>
      </Box>
      
      <Box marginLeft={2} marginRight={2}>
       <GlobalEditTable students={studentByTeacher}/>
      </Box>
      <Box textAlign='center'>
         <Typography><CopyrightIcon/>Future Forward Education LLC</Typography>
      </Box>
    </Box>
  )
}

export default GlobalStudentEditPage

const Wrapper = styled.section`
    text-align: center;
    height: auto;
    width: 350px;
    margin: auto;
    background-color: #cccccc;
  `;