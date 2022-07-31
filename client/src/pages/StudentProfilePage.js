import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import StudentNavBar from '../components/StudentProfileComponents/StudentNavBar'
import StudentProfileStack from '../components/StudentProfileComponents/StudentProfileStack'
import styled from '@emotion/styled'


function StudentProfilePage() {
  return (
    <Box>
      <StudentNavBar />
      <Wrapper component={'div'} style={{ borderRadius: '7px' }}>
          <Typography variant='h5'>Student Profile</Typography>
      </Wrapper>
      <Box>
      </Box>
      <Box>
        <BalanceWrapper component={'div'}>
          <Typography>Balance: $  "student.balance"</Typography>
        </BalanceWrapper>
        <Box display={'flex'}>
          <Box>
            <Box>Profile pic <Avatar /></Box>
            <GoalsWrapper>
              <Box>Goals: "student.goals"</Box>
            </GoalsWrapper>
          </Box>
          <Box>
            <StudentProfileStack />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default StudentProfilePage

const Wrapper = styled.section`
  text-align: center;
  height: auto;
  width: 350px;
  margin: auto;
  background-color: #cccccc;
`;

const BalanceWrapper = styled.section`
  text-align: center;
  width: 200px;
  border: 2px solid
`;

const GoalsWrapper = styled.section`
  text-align: center;
  width: 200px;
  border: 2px solid
`;