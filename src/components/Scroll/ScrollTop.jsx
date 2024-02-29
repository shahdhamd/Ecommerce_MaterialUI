import { Box, Fab, Zoom, useScrollTrigger } from '@mui/material'
import React from 'react'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
function ScrollTop() {
  return (
    <Zoom in={useScrollTrigger({threshold:50})}>   
        
        <Fab color="primary" size='small' aria-label="add"
        onClick={()=>window.scrollTo(0,0)}
        sx={{position:'fixed',bottom:20 ,right:20,}}>
            <KeyboardArrowUpOutlinedIcon/>
        </Fab>

    </Zoom> 
  )
  
// zoom ==>   مشان الاينيميشن لما يظهر ويختفي
// useScrollTrigger()  ==> لما اعمل سكرل وانزل 50 بحول قيمته ل تروو
}

export default ScrollTop