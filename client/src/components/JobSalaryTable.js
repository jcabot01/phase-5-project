import React from 'react'
import styled from '@emotion/styled';
import { Box, Grid, Paper } from '@mui/material'

function JobSalaryTable() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    textAlign: 'center',
    borderRadius: 0
  }));

  const Header = styled(Paper)(({ theme }) => ({
    backgroundColor: '#cccccc',
    textAlign: 'center',
    borderRadius: 0,
    border: '2px solid'
  }));
  return (
    <Box maxWidth={220}>
      <Grid container rowSpacing={0} columnSpacing={0}>
        <Grid item xs={6}>
          <Header>Jobs</Header>
        </Grid>
        <Grid item xs={6}>
          <Header>Salaries</Header>
        </Grid>
        <Grid item xs={6}>
          <Item>Accountant</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>$35</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Point Pusher</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>$35</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Tutor</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>$32</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Analyst</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>$30</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Crate Buster</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>$30</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Paper Pusher</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>$30</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Techie</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>$30</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Teacher's Pet</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>$25</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Substitute</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>$25</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Stduent</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>$15</Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default JobSalaryTable