import { Grid, Typography, Box, Stack } from '@mui/material'
import HouseIcon from '@mui/icons-material/House';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import React from 'react'

//map over is_owned_or_rented to create additional properties
//map over snack, music, and investments to produce a history of purchases

function StudentProfileStack() {
  return (
    <Grid container rowSpacing={1}  >
        <Grid item xs={12} display='flex' border='2px solid'>
          <Box>
            <HouseIcon />
          </Box>
          <Stack>
            <Box width='450px'>
              <Typography fontWeight={'bold'} >Desk Rented:  #1</Typography>
            </Box>
            <Box width='450px' display='flex'>
              <Typography fontWeight={'bold'} >Desk Owned: #2</Typography> &nbsp;
              <Typography>timestamp  , Purchased for $  , Value $   .</Typography>
            </Box>
          </Stack>
          
        </Grid>

        <Grid item xs={12} display='flex' border='2px solid'>
          <Box>
            <MusicNoteIcon />
          </Box>
          <Box>
            <Typography fontWeight={'bold'}>Music Card: </Typography>
            <Typography>timestamp  , Purchased for $  , Value $   .</Typography>
          </Box>
        </Grid>
    </Grid>
  )
}

export default StudentProfileStack