import React from 'react'
import { Box, ListItemText, Paper, Typography, useMediaQuery } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Item({title}) {
  return (
    <Box sx={{ display: 'flex', position: 'relative',padding:'0px 8px', ':hover .show-drow': { display: "block" }, ":hover": { cursor: 'pointer' } }}>
        <Typography>{title}</Typography>
        <ExpandMoreIcon />
        <Box sx={{ position: 'absolute', top: "100%", display: 'none',zIndex:999 , ".MuiPaper-root": { minWidth: '170px' } }} className='show-drow'>
          <Paper sx={{ mt: 2 }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Dashbord" sx={{ '.MuiTypography-root': { fontSize: "13px" } }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ position: 'relative', ':hover .show-products': { display: "block" } }}>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Products" sx={{ '.MuiTypography-root': { fontSize: "13px" } }} />
                  <Box flexGrow={1} />
                  <ArrowForwardIosRoundedIcon sx={{ fontSize: '12px' }} />
                </ListItemButton>
                <Box sx={{ position: 'absolute', right: "100%", top: 0, display: "none" }} className='show-products' >
                  <Paper sx={{ ml: 1 }}>
                    <List>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText primary="All products" sx={{ '.MuiTypography-root': { fontSize: "13px" } }} />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                          <ListItemText primary="Add/Edit product" sx={{ '.MuiTypography-root': { fontSize: "13px" } }} />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </Paper>
                </Box>

              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="orders" sx={{ '.MuiTypography-root': { fontSize: "13px" } }} />
                </ListItemButton>
              </ListItem>
            </List>
          </Paper>
        </Box>
      </Box>
  )
}

export default Item