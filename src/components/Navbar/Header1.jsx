import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import { Box, Button, Container, IconButton, ListItem, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import './header.css'
function Header1() {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    const options = ['AR', 'EN'];
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const open = Boolean(anchorEl);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Box sx={{ bgcolor: "#2B3445" }}
        >
            <Container>
            <Stack direction={'row'} alignItems={'center'}>  {/*--- to make item display:flex ---*/}

                <Typography color="#fff" fontSize={"13px"} borderRadius="12px" bgcolor={"#721a1a"} padding={"3px 10px"} mr={2}>
                    hot
                </Typography>
                <Typography color='#fff' padding={"3px 10px"} mr={2} fontSize={"13px"}>
                    Free Express Shipping
                </Typography>
                <Box flexGrow={1} /> {/*---- to make space between item  -----*/}

                {/*---------------------- icon Dark mode  ----------------------------*/}
                <div>
                    {theme.palette.mode === "light" ? (
                        <IconButton
                            onClick={() => {
                                localStorage.setItem(
                                    "mode",
                                    theme.palette.mode === "dark" ? "light" : "dark"
                                );
                                colorMode.toggleColorMode();
                            }}
                            color="inherit"
                        >
                            <LightModeOutlined sx={{ fontSize: 'small',color:'#fff' }} />
                        </IconButton>
                    ) : (
                        <IconButton
                            onClick={() => {
                                localStorage.setItem(
                                    "mode",
                                    theme.palette.mode === "dark" ? "light" : "dark"
                                );
                                colorMode.toggleColorMode();
                            }}
                            color="inherit"
                        >
                            <DarkModeOutlined sx={{ fontSize: 'small' }} />
                        </IconButton>
                    )}
                </div>

                {/*---------------------- menu select language  ----------------------------*/}


                <List component="nav" aria-label="Language settings" sx={{p:0,m:0}}>
                    <ListItem
                        id="language-button"
                        aria-haspopup="true"
                        aria-controls="language-menu"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClickListItem}
                        sx={{"&:hover":{cursor:"pointer"}}} 
                    >{/*---- change mouse when hover  -----*/}
                        <ListItemText secondary={options[selectedIndex]} 
                        sx={{".MuiTypography-root":{color:'#fff'}}}/> {/*---- change color EN or AR -----*/}
                    <ExpandMore sx={{'fontSize':'16px' , color:'#fff'}} />  {/*---- icon V -----*/}
                    </ListItem>
                </List>
                <Menu
                    id="language-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'language-button',
                        role: 'listbox',
                    }}
                >
                    {options.map((option, index) => (
                        <MenuItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>



                {/*---------------------- icon import from material ui  ----------------------------*/}


                <FacebookIcon sx={{ fontSize: "16px", color: '#fff'}} />
                <TwitterIcon sx={{ fontSize: "16px", color: '#fff' ,mx:1 }} />
                <InstagramIcon sx={{ fontSize: "16px", color: '#fff' }}  />
            </Stack>
            </Container>
        </Box>
    )
}

export default Header1