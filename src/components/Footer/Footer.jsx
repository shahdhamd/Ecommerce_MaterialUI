import { useTheme } from '@emotion/react'
import { Typography, Box } from '@mui/material'
import React from 'react'

function Footer() {
    const theme=useTheme()
    return (
        <Box sx={{display:'flex', alignItems:'center',justifyContent:'center',py:3,bgcolor: "#2B3445" }}>
            <Typography variant='body2'  color="#fff" >
            Copyright ©2023 All rights reserved | This template is made with 
            </Typography>
            <Typography variant='h6' sx={{color:'red',fontWeight:800,fontSize:15,px:0.9}}>Shahd</Typography>
        </Box>

    )
}

export default Footer