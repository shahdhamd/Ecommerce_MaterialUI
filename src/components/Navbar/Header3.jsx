import { Box, Container, Drawer, IconButton, ListItemIcon, ListItemText, Paper, Stack, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import WindowRoundedIcon from '@mui/icons-material/WindowRounded';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ComputerIcon from '@mui/icons-material/Computer';
import { useTheme } from '@emotion/react';
import { Close } from '@mui/icons-material';
import Link from './Item';
function Header3() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [title, setTitle] = useState(['Home', 'Pages', 'User Account','Vender Account'])
  console.log(title[2])
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const theme = useTheme()    /**theme.js أستدعاء لهوك لاستخدام متغيرات معرفة في ملف  */
  return (
    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{ width: '230px', bgcolor: theme.palette.myColor.main, color: theme.palette.text.secondary }}
        >
          <WindowRoundedIcon />  {/*  ايقونة النافذة */}
          <Typography >categories</Typography>  {/* النص  */}
          <Box flexGrow={1} />  {/* لجعل مسافة بين النص والايقونة  */}
          <ArrowForwardIosRoundedIcon sx={{ fontSize: '12px' }} />

        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          sx={{ '.MuiPaper-root': { width: '230px' } }}
        >  {/*بدي ازيد عرضه يمثل الواجهة الي بتنزلMuiPaper-root  بمعنى عندي كلاس ب  */}

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MusicNoteOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              Music
            </ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PetsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Pets</ListItemText>

          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>

          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ComputerIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronic</ListItemText>

          </MenuItem>
        </Menu>
      </Box>

      {useMediaQuery('(max-width:842px)') && (<IconButton onClick={toggleDrawer("right", true)}>
        <ReorderOutlinedIcon />
      </IconButton>)}

      {useMediaQuery('(min-width:841px)') && (
        <Stack direction="row" alignItems='center' justifyContent='space-between'>
          {title.map((tit) => {
            return (
              <Link title={tit} />)
          })}
        </Stack>
      )
      }
      {/* <Box sx={{ display: 'flex', position: 'relative', ':hover .show-drow': { display: "block" }, ":hover": { cursor: 'pointer' } }}>
        <Typography>HOME</Typography>
        <ExpandMoreIcon />
        <Box sx={{ position: 'absolute', top: "100%", display: 'none', ".MuiPaper-root": { minWidth: '170px' } }} className='show-drow'>
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
                <Box sx={{ position: 'absolute', left: "100%", top: 0, display: "none" }} className='show-products' >
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
      </Box> */}
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", true)}
        sx={{ '.MuiPaper-root ': { width: '100%' } }}
      > {/*  بمعنى الواجهة الجانبية توخد ويدث كامل وتعبي الصفحة */}


        <Box

          sx={{
            minWidth: "440px",
            mx: 'auto',
            mt: 6,
            pt: 6,
            textAlign: 'end'
          }}
        >
          <IconButton onClick={toggleDrawer("right", false)} sx={{ ":hover": { rotate: '180deg', transition: '0.3s' } }}>
            <Close />
          </IconButton>

          {/* <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Accordion 1
            </AccordionSummary>
            <AccordionDetails>
              <List sx={{ p: '0px 10px' }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Trash" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Spam" />
                  </ListItemButton>
                </ListItem>
              </List>

            </AccordionDetails>
          </Accordion> */}
          {[{ mainLink: "Home", subLinks: ["Link 1", "Link 2", "Link 3"] },
          { mainLink: "Mega menu", subLinks: ["Link 1", "Link 2", "Link 3"] },
          {
            mainLink: "full screen menu",
            subLinks: ["Link 1", "Link 2", "Link 3"],
          },
          { mainLink: "pages", subLinks: ["Link 1", "Link 2", "Link 3"] },
          {
            mainLink: "user account",
            subLinks: ["Link 1", "Link 2", "Link 3"],
          },
          {
            mainLink: "vendor account",
            subLinks: ["Link 1", "Link 2", "Link 3"],
          },].map((item) => {
            return (
              <Accordion elevation={0} sx={{ bgcolor: 'initial' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {item.mainLink}
                </AccordionSummary>
                <AccordionDetails>
                  <List sx={{ p: '0px 10px' }}>
                    {item.subLinks.map((link) => {
                      return (
                        <ListItem key={link} disablePadding>
                          <ListItemButton>
                            <ListItemText primary={link} />
                          </ListItemButton>
                        </ListItem>)
                    })}

                    {/* <ListItem disablePadding>
                      <ListItemButton component="a" href="#simple-list">
                        <ListItemText primary="Spam" />
                      </ListItemButton>
                    </ListItem> */}
                  </List>

                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>

      </Drawer>

    </Container>
  )
}

export default Header3