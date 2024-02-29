import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Container, Stack, Box, Typography, Rating, IconButton } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Close } from '@mui/icons-material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { useTheme } from '@emotion/react';
function CardProduct({ product }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }
const theme=useTheme()

  return (
    <Box>

      <Card sx={{ maxWidth: 345, ":hover .MuiCardMedia-root": { scale: '1.1', animation: '.2s' } }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height='340'
          image={product.image}
        />
        <CardContent>
          <Stack sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="p" color="text.secondary">
              {product.price}
            </Typography>
          </Stack>
          <Typography variant='body2'>
            {product.desc}
          </Typography>
        </CardContent>
        <CardActions sx={{ 'justifyContent': 'space-between' }}>
          <Button size="small" onClick={handleClickOpen}> <AddShoppingCartIcon sx={{ size: 'small' }} /> Add to card</Button>
          <Rating name="read-only" value={product.evaluation} size='small' precision={0.1} readOnly />
        </CardActions>
      </Card>




      <Dialog
        sx={{
          '.MuiPaper-root': { minWidth: { xs: '90%', md: 800 } },

        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton onClick={handleClose} sx={{ ":hover": { rotate: '180deg', transition: '0.3s' }, position: 'absolute', top: 0, right: 10 }}>
          <Close />
        </IconButton>
        <Box sx={{[theme.breakpoints.up('sm')]: {
      display:'flex', alignItems:'center',justifyContent:'center',gap:2
    },[theme.breakpoints.down('sm')]: {
      display:'block',margin:'auto'
    }}}>
          <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img src={product.image} width={300} />
          </Box>
          <Box sx={{ minWidth: '50%',p:2}}>
            <Typography variant='h5'>{product.title}</Typography>
            <Typography variant="p" color="text.secondary">
              {product.price}
            </Typography>
            <Typography variant='body2'>
            {product.desc}
          </Typography>
          <Stack sx={{flexDirection:'row',alignItems:'center',gap:1,my:2}}>
            {['./images/1.jpg','./images/2.jpg'].map((item)=>{
              return(
                <img key={item} src={item} width={100} height={100}/>
              )
            })}
          </Stack>
          <Button sx={{color:'white',bgcolor:'#252b32',":hover":{bgcolor:'#252b32'}}}>
<AddShoppingCartOutlinedIcon/> Buy now 
          </Button>
          </Box>
        </Box>
        {/* </Box> */}
        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent> */}
        {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          
        </DialogActions> */}
      </Dialog>
    </Box>



  )
}

export default CardProduct