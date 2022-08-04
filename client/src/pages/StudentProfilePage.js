import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import StudentNavBar from '../components/StudentProfileComponents/StudentNavBar'
import StudentProfileStack from '../components/StudentProfileComponents/StudentProfileStack'
import HouseIcon from '@mui/icons-material/House';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import styled from '@emotion/styled'


function StudentProfilePage({user}) {
 
  return (
    <Box>
      <StudentNavBar />
      <Wrapper component={'div'} style={{ borderRadius: '7px' }}>
          <Typography variant='h5'>Student Profile</Typography>
      </Wrapper>
      <BalanceWrapper>
          <Typography component={'div'} sx={{width: 'fit-content', border: '2px solid'}}>Balance: $  {user.balance}</Typography>
      </BalanceWrapper>
      <Box>
        <Box display={'flex'} marginLeft={12}>
          <Box marginRight={5}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Avatar src={user.avatar_url} sx={{ width: 90, height: 90 }}/>
            </Box>
            <GoalsWrapper>
              <Box width='fit-content'>
                <Typography>Goals: "{user.goal}"</Typography>
              </Box>
            </GoalsWrapper>
          </Box>
          <Box marginLeft={5}marginRight={'200px'}>
            <StudentProfileStack user={user}/>
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
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 30px;
  margin-top: 15px
`;

const GoalsWrapper = styled.section`
  text-align: center;
  width: 200px;
`;