import { Grid, Typography, Box, Stack } from '@mui/material'
import HouseIcon from '@mui/icons-material/House';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import React from 'react'
import { pink } from '@mui/material/colors';


//map over is_owned_or_rented to create additional properties
//map over snack, music, and investments to produce a history of purchases

function StudentProfileStack({user}) {

  const rentedDesk = user.student_desks.filter((desk) => {
    if (desk.is_owned_or_rented === "rented") {
      return desk
    }
  })

  const ownedDesksArray = user.student_desks.map((desk) => {
    if (desk.is_owned_or_rented === "owned") {
      return desk
    }
  })

  const musicCards = user.privileges.filter((privilege) => {
    if (privilege.event === "Music Card") {
      return privilege
    }
  })

  const snackCards = user.privileges.filter((privilege) => {
    if (privilege.event === "Snack Card") {
      return privilege
    }
  })

  const investments = user.privileges.filter((privilege) => {
    if (privilege.event === "Invest") {
      return privilege
    }
  })
  

  
  return (
    <Grid container spacing={2} marginTop={2} maxWidth={500}>
        <Grid item xs={12} display='flex' border='2px solid'>
          <Box>
            <Stack>
              <HouseIcon />
              <HouseIcon fontSize='small' sx={{ color: pink[500]}}/>
            </Stack>
          </Box>
          <Stack>
            <Box width='fit-content' display='flex'>
              <Typography fontWeight={'bold'} >Desk Rented:</Typography> &nbsp;
              {rentedDesk.length > 0 ? <Typography sx={{fontSize: 14, color: 'grey', paddingTop: '2px'}}>#{rentedDesk.desk_id},</Typography> : <Typography sx={{fontSize: 14, color: 'grey'}}>"Not renting anymore"</Typography>}   
            </Box>
            <Box width='fit-content' display='flex'>
              <Typography fontWeight={'bold'} >Desk(s) Owned: </Typography> &nbsp;
              <Stack>
              {ownedDesksArray.map((desk) => (
                <Typography key={desk.id} sx={{fontSize: 14, color: 'grey', paddingTop: '2px'}}>#{desk.desk_id},{" "}{desk.created_at.slice(0, 10)}, Purchased for $50, Value $100</Typography>
              ))}
              </Stack>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} display='flex' border='2px solid'>
          <Box>
            <MusicNoteIcon />
          </Box>
          <Stack>
            <Box width='fit-content' display='flex'>
              <Typography fontWeight={'bold'} >Music Card: </Typography> &nbsp;
              <Stack>
              {musicCards.map((musicCard) => (
                <Typography key={musicCard.id} sx={{fontSize: 14, color: 'grey', paddingTop: '2px'}}>{musicCard.created_at.slice(0, 10)}, Purchased for $20, Value $20</Typography>
              ))}
              </Stack>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} display='flex' border='2px solid'>
          <Box>
            <FastfoodIcon />
          </Box>
          <Stack>
            <Box width='fit-content' display='flex'>
              <Typography fontWeight={'bold'} >Snack Card: </Typography> &nbsp;
              <Stack>
              {snackCards.map((snackCard) => (
                <Typography key={snackCard.id} sx={{fontSize: 14, color: 'grey', paddingTop: '2px'}}>{snackCard.created_at.slice(0, 10)}, Purchased for $20, Value $20</Typography>
              ))}
              </Stack>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} display='flex' border='2px solid'>
          <Box>
            <ShowChartIcon />
          </Box>
          <Stack>
            <Box width='fit-content' display='flex' align-items='end'>
              <Typography fontWeight={'bold'} >Investments: </Typography> &nbsp;
              <Stack>
              {investments.map((investment) => (
                <Typography key={investment.id} sx={{fontSize: 14, color: 'grey', paddingTop: '2px'}}>{investment.created_at.slice(0, 10)}, Purchased for ${investment.amount}, Value ${investment.value}</Typography>
              ))}
              </Stack>
            </Box>
          </Stack>
        </Grid>
    </Grid>
  )
}

export default StudentProfileStack