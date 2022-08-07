import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'
import LogoutButton from './Buttons/NavBarButtons/LogoutButton'
import MenuButton from './Buttons/NavBarButtons/MenuButton'



function NavBar({user, setUser}) {
  return (
    <Box display={'flex'} sx={{margin: 3, borderRadius: 7, bgcolor: '#cccccc'}}>
      <Box display="flex" justifyContent="center" alignItems="center" marginRight="32px">
        <Typography sx={{marginLeft: 2}}>
          Welcome {user.first_name}!
        </Typography>
      </Box>
      
      <LogoWrapper component={'div'} style={{ border: '4px solid' }}>
        <Logo>Class-o-poly</Logo>
      </LogoWrapper>
      
      <Box display="flex" alignItems="center" justifyContent="center" sx={{marginRight: 2}} >
        <MenuButton />
        <LogoutButton setUser={setUser} />
      </Box>
    </Box>
  )
}

const Logo = styled.h1`
  margin-top: -2px;
  margin-bottom: 0px;
  font-family: 'Alegreya', serif;
  font-size: 3rem;
  background: #BF0000;
  background: radial-gradient(circle farthest-corner at right center, #BF0000 25%, #FFFF4D 54%, #00CF0E 76%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LogoWrapper = styled.section`
  text-align: center;
  height: 60px;
  width: 260px;
  margin: auto;
  background-color: #cccccc;
  padding: 5px; 
  border: 3px
`;

export default NavBar