import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import GlobalEditTable from '../components/GlobalEditTable';

import { useSelector, useDispatch } from 'react-redux';
import { fetchStudents } from '../features/studentsSlice';

function GlobalStudentEditPage() {
  const students = useSelector((state) => state.students.entities)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  console.log(students)
  return (
    <Box>
      <Box>
        <Wrapper component={'div'} style={{ borderRadius: '7px' }}>
          <Typography variant='h4'>Global Student Edit</Typography>
        </Wrapper>
      </Box>
      
      <Box sx={{height: 20}}>
      </Box>
      
      <GlobalEditTable students={students}/>
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