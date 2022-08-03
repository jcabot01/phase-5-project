import { Grid, Typography, Box, Stack } from '@mui/material'
import HouseIcon from '@mui/icons-material/House';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import React from 'react'

//map over is_owned_or_rented to create additional properties
//map over snack, music, and investments to produce a history of purchases

function StudentProfileStack({user}) {
  return (
    <Grid container spacing={2} marginTop={2} maxWidth={600}>
        <Grid item xs={12} display='flex' border='2px solid'>
          <Box>
            <HouseIcon />
          </Box>
          <Stack>
            <Box width='fit-content' display='flex'>
              <Typography fontWeight={'bold'} >Desk Rented:</Typography> &nbsp;
              <Typography>Desk #1</Typography>
            </Box>
            <Box width='fit-content' display='flex'>
              <Typography fontWeight={'bold'} >Desk Owned: </Typography> &nbsp;
              <Typography>Desk #2 timestamp  , Purchased for $  , Value $   .</Typography>
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
              <Typography>timestamp  , Purchased for $  , Value $   .</Typography>
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
              <Typography>timestamp  , Purchased for $  , Value $   .</Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} display='flex' border='2px solid'>
          <Box>
            <ShowChartIcon />
          </Box>
          <Stack>
            <Box width='fit-content' display='flex'>
              <Typography fontWeight={'bold'} >Investments: </Typography> &nbsp;
              <Typography>timestamp  , Purchased for $  , Value $   .</Typography>
            </Box>
          </Stack>
        </Grid>

        
    </Grid>
  )
}

export default StudentProfileStack