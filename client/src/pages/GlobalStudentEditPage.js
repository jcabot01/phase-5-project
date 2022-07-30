import React from 'react';
import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import GlobalEditTable from '../components/GlobalEditTable';


function GlobalStudentEditPage() {
  
  return (
    <Box>
      <Box>
        <Wrapper component={'div'} style={{ borderRadius: '7px' }}>
          <Typography variant='h4'>Global Student Edit</Typography>
        </Wrapper>
      </Box>
      
      <Box sx={{height: 20}}>
      </Box>
      
      <GlobalEditTable />
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