import { Avatar, Box, Typography, Stack, TextField, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import StudentNavBar from '../components/StudentProfileComponents/StudentNavBar'
import StudentProfileStack from '../components/StudentProfileComponents/StudentProfileStack'
import HouseIcon from '@mui/icons-material/House';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { pink } from '@mui/material/colors';
import styled from '@emotion/styled'




function StudentProfilePage({user}) { 
  const [goal, setGoal] = useState("")
  

  const snackCard = user.privileges.find((privilege) => privilege.event === "Snack Card")
  const musicCard = user.privileges.find((privilege) => privilege.event === "Music Card")
  const investor = user.privileges.find((privilege) => privilege.event === "Invest")
  const deskOwner = user.student_desks.find((desk) => desk.is_owned_or_rented === "owned")
  const secondDesk = user.student_desks.filter((desk) => desk.is_owned_or_rented === "owned")
  
 function handleChange(e) {
  setGoal(e.target.value)
 }
//  console.log(goal)
 
 const updatedGoal = {
  goal: goal
}

 function handleSubmit(e) {
  e.preventDefault();
 
  fetch(`/students/${user.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedGoal)
  })
  .then((res) => res.json())
  .then((student) => console.log(student))
  setGoal("")
 }

  return (
    <Box>
      <StudentNavBar user={user} />
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
              <Stack spacing={7}>
                <Box>{(snackCard ? <FastfoodIcon /> : null)}</Box>
                <Box>{(musicCard ? <MusicNoteIcon /> : null)}</Box>
              </Stack>
              <Avatar src={user.avatar_url} sx={{ width: 90, height: 90 }}/>
              <Stack spacing={5}>
                <Box>
                  <Box>{(deskOwner ? <HouseIcon /> : null)}</Box>
                  <Box>{(secondDesk.length > 1 ? <HouseIcon fontSize='small' sx={{ color: pink[500]}}/> : null)}</Box>
                </Box>
                <Box>{(investor ? <ShowChartIcon /> : null)}</Box>
              </Stack>
            </Box>
            <GoalsWrapper>
              <Box width='fit-content'>
              
                <Box border='2px solid'>
                  <Typography>Goals:</Typography>
                  {user.goal}</Box>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      id="filled-multiline-flexible"
                      label={"Create new goal"}
                      multiline
                      maxRows={4}
                      value={goal}
                      onChange={handleChange}
                      variant="filled"
                    />
                    <Button type='submit' variant='contained' color='primary' size='small'>Submit</Button>
                  </form>
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