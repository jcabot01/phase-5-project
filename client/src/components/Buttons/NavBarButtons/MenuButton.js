import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';





function MenuButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    console.log("clicked menu")
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    console.log("closed menu")
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="inherit"
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem component={Link} to="/rules-overview" onClick={handleClose} >Rules</MenuItem>
        <MenuItem component={Link} to="/global-edit" onClick={handleClose}>Global Student Edit</MenuItem>
        
      </Menu>
    </div>
  );
}

export default MenuButton