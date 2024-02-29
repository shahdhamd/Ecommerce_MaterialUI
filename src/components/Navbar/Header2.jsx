import { Box, Container, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { ExpandMore } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
const options = [
    'All Categories',
    'Car',
    'Clothes',
    'Electronics',
    'Laptop'
  ];{/*     flexGrow:'0.4',    بمعنى اخلي السيرش يوخد المساحة المتبقية  */}
  const Search = styled('div')(({ theme }) => ({
    flexGrow:'0.4',    
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: '2px solid #777',  
    // '&:hover': {
    //   backgroundColor: alpha(theme.palette.common.white, 0.25),
    // },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    minWidth: '300px',
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(3),
    //   width: 'auto',
    // },
    [theme.breakpoints.down('md')]: {
      // marginLeft: theme.spacing(3),
      margin:'auto',
      width: '200px',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
function Header2() {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
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

  const theme=useTheme();  {/* theme.js لاستخدام لون معرف في ملف   */}
  return (
    <div>
      <Container sx={{ my: 5, display: 'flex', justifyContent: 'space-between' }}>
        <Box  >
          <Stack alignItems={'center'}>
            <ShoppingCartOutlinedIcon />
            <Typography>
              E-commerce
            </Typography>
          </Stack>

        </Box>
        <Search
          sx={{
            display: "flex",
            borderRadius: "22px",
            justifyContent: "space-between",
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />

          <div>
            <List
              component="nav"
              aria-label="Device settings"
              sx={{p:0}}
            >
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
                sx={{bgcolor:theme.palette.myColor.main,borderBottomRightRadius:22,borderTopRightRadius: 22}}
              >
                <ListItemText
                  sx={{
                    width: 93,
                    textAlign: "center",
                    "&:hover": { cursor: "pointer" },
                  }}
                  secondary={options[selectedIndex]}
                />
                <ExpandMore sx={{ fontSize: "16px" }} />
              </ListItem>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  sx={{ fontSize: "13px" }}
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Search>

        <Box sx={{}}>
          <IconButton aria-label="cart" sx={{ mx: 2 }}>
            <StyledBadge badgeContent={4} color="error">
              <ShoppingCartOutlinedIcon />
            </StyledBadge>
          </IconButton>
          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>
        </Box>
      </Container>
    </div>
  )
}

export default Header2