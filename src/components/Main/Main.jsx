import { Container, Stack, Box, Typography, Rating } from '@mui/material'
import React, { useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTheme } from '@emotion/react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CardProduct from './CardProduct';
function Main() {
  const [alignment, setAlignment] = React.useState('left');
  const [value, setValue] = useState(3.3);

  const products=[
    {image:'./images/1.jpg',title:"Women's Fashion",price:'12.99',desc:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',evaluation:3.1}
    ,{image:'./images/2.jpg',title:"Men Fashion",price:'15.99',desc:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',evaluation:4.2}
    ,{image:'./images/1.jpg',title:"Women's Fashion",price:'12.99',desc:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',evaluation:4.5}

]

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const theme = useTheme()
  return (
    <Box sx={{ bgcolor: theme.palette.myColor.main, py: 5 }}>
      <Container sx={{}}>
        <Stack sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Box>
            <Typography variant='h6'>
              Selected Products
            </Typography>
            <Typography variant='body1'>
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>

          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{ gap: 2 }}
          >
            <ToggleButton value="left" aria-label="left aligned" className='MyButton'>
              All products
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered" className='MyButton'>
              Men Category
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned" className='MyButton'>
              Women Category
            </ToggleButton>

          </ToggleButtonGroup>
        </Stack>
        <Stack sx={{flexDirection:'row', alignItems:'center',justifyContent:'space-between',flexWrap:'wrap', gap:2,[theme.breakpoints.down('md')]: {
       justifyContent: 'start',margin:'auto'
    }}}>
          {products.map((product)=>{
            return (
          <CardProduct product={product} />
            )
          })}
          {/* <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height='340'
              image="./images/1.jpg"
            />
            <CardContent>
              <Stack sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography gutterBottom variant="h5" component="div">
                  Women's Fashion
                </Typography>
                <Typography variant="p" color="text.secondary">
                  $12.99
                </Typography>
              </Stack>
              <Typography variant='body2'>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions sx={{ 'justifyContent': 'space-between' }}>
              <Button size="small"> <AddShoppingCartIcon sx={{ size: 'small' }} /> Add to card</Button>
              <Rating name="read-only" value={value} size='small' precision={0.1} readOnly />
            </CardActions>
          </Card> */}
        </Stack>
      </Container>
    </Box>
  )
}

export default Main