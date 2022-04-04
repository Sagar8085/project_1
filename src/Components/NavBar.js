import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AddBusinessTwoToneIcon from '@mui/icons-material/AddBusinessTwoTone';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@material-ui/core/Badge';

export default function NavBar() {
  return (
    <div>
         <AppBar position="static">
        <Toolbar>
            <AddBusinessTwoToneIcon />    
                                                                
          <Typography  variant="h6" color="inherit" style={{flexGrow:'1'}} noWrap> 
            Shopping Cart
          </Typography>
          
          <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' , flexGrow:'1'}}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' ,flexGrow:'1'}}>Home</Link>
            <Link to="/table" style={{ color: 'inherit', textDecoration: 'inherit',flexGrow:'1'}}>Data_Table</Link>
            <Link to="/signup" style={{ color: 'inherit', textDecoration: 'inherit',flexGrow:'1'}}>SignUp</Link>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </div>

        </Toolbar>
       
      </AppBar>



    </div>
  )
}
