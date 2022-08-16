import { Box, Typography, Stack, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import StudentNavBar from '../components/StudentProfileComponents/StudentNavBar'
import StudentProfileStack from '../components/StudentProfileComponents/StudentProfileStack'
import StudentAvatarChange from '../components/StudentProfileComponents/StudentAvatarChange'
import HouseIcon from '@mui/icons-material/House';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { pink } from '@mui/material/colors';
import styled from '@emotion/styled'



function StudentProfilePage({user, setUser, onUpdateUser}) { 
  const [goal, setGoal] = useState("")
  const snackCard = user.privileges.find((privilege) => privilege.event === "Snack Card")
  const musicCard = user.privileges.find((privilege) => privilege.event === "Music Card")
  const investor = user.privileges.find((privilege) => privilege.event === "Invest")
  const deskOwner = user.student_desks.find((desk) => desk.is_owned_or_rented === "owned")
  const secondDesk = user.student_desks.filter((desk) => desk.is_owned_or_rented === "owned")
  
 function handleChange(e) {
  setGoal(e.target.value)
 }
 
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
  .then((student) => onUpdateUser(student))
  setGoal("")
 }

  return (
    <Box>
      <StudentNavBar user={user} setUser={setUser} />
      <Wrapper component={'div'} style={{ borderRadius: 7 }}>
          <Typography variant='h5'>Student Profile</Typography>
      </Wrapper>
      <Box display={'flex'} alignItems="center" justifyContent="center" marginTop={3} marginBottom={3}>
          <Typography component={'div'} bgcolor='#65d931' sx={{width: 'fit-content', border: '2px solid', paddingLeft: 2, paddingRight: 2, borderRadius: 7}}>Balance: $  {user.balance}</Typography>
      </Box>
      <Box display={'flex'} alignItems="center" justifyContent="center" >
        <Box marginRight={3} justifyContent="center" alignItems="center" border='2px solid' borderRadius={7}>
          <Box display="flex" justifyContent="center" alignItems="center" borderBottom={'1px solid'}>
            <Stack spacing={7}>
              <Box>
                {(snackCard ? <FastfoodIcon color="secondary"/> : null)}
              </Box>
              <Box>
                {(musicCard ? <MusicNoteIcon color="primary"/> : null)}
              </Box>
            </Stack>
            <StudentAvatarChange user={user} onUpdateUser={onUpdateUser}/>
            <Stack spacing={5}>
              <Box>
                <Box>
                  {(deskOwner ? <HouseIcon /> : null)}
                </Box>
                <Box>
                  {(secondDesk.length > 1 ? <HouseIcon fontSize='small' sx={{ color: pink[500]}}/> : null)}
                </Box>
              </Box>
              <Box>
                {(investor ? <MonetizationOnIcon color="success" /> : null)}
              </Box>
            </Stack>
          </Box>
          <Box maxWidth={200}>
            <Typography fontSize={12}>Monthly Goal:</Typography>
            <Typography fontSize={12}>{user.goal}</Typography>
          </Box>
          
          <form onSubmit={handleSubmit}>
            <TextField
              id="filled-multiline-flexible"
              label={"Set one new goal"}
              multiline
              maxRows={4}
              value={goal}
              onChange={handleChange}
              variant="filled"
              size="small"
            />
            <GoalsWrapper>
            <Box marginTop={1}>
              <Button type='submit' variant='contained' color='primary' size='small' >Submit</Button>
            </Box>
            </GoalsWrapper>
          </form>
        </Box>
        <Box marginLeft={7} width={'fit-content'}>
          <StudentProfileStack user={user}/>
        </Box>
      </Box>
      <Box sx={{height: 60}}>
      </Box>
      <Box textAlign='center'>
         <Typography><CopyrightIcon/>Future Forward Education LLC</Typography>
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

const GoalsWrapper = styled.section`
  text-align: center;
  width: 200px;
`;