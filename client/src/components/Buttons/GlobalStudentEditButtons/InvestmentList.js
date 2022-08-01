import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import {Avatar} from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


function InvestmentList({params}) {
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    maximumSignificantDigits: 3,
    style: 'currency',
    currency: 'USD',
  });
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {params.row.privileges.map((privilege) => privilege.event === "Invest" ? (
         
            <ListItem key={privilege.id}>
              <ListItemAvatar>
                <Avatar>
                  <MonetizationOnIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={currencyFormatter.format(privilege.amount)} secondary={privilege.created_at.slice(0, 10)} />
            </ListItem> 
        ) : (
          null
        )
      )}  
    </List>
        


      
       

      
      
  )
}

export default InvestmentList