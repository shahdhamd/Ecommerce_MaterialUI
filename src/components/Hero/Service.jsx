import { Container, Typography, Stack, Box, Divider, useMediaQuery } from '@mui/material'
import React from 'react'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import PaymentIcon from '@mui/icons-material/Payment';
import { useTheme } from '@emotion/react';
function Service() {
  const data = [
    { icon: <AirportShuttleIcon />, main: 'Fast Delivery', text: 'Start from $10' },
    { icon: <AttachMoneyIcon />, main: 'Money Guarantee', text: '7 Days Back' },
    { icon: <AddAlarmIcon />, main: '365 Days', text: 'For free return' },
    { icon: <PaymentIcon />, main: 'Payment', text: 'Secure system' },
  ]
  const theme = useTheme();
  return (
    <Box sx={{ bgcolor: theme.palette.myColor.main }}>
      <Container sx={{
        bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff", my: 3
        , paddingLeft: '0px!important', paddingRight: '0px!important'
      }}>
        <Stack divider={useMediaQuery('(min-width:600px)') ? <Divider orientation="vertical" flexItem /> : null}
          sx={{
            flexDirection: 'row', alignItems: 'center', padding: '5px 0', flexWrap: 'wrap',
          }}>
          {data.map((item) => {
            return (
              <MyBox item={item} />
            )
          })}

        </Stack>

      </Container>
    </Box>

  )
}

export default Service



function MyBox({ item }) {
  return (
    <Box sx={{
      display: 'flex', alignItems: 'center', flexGrow: 1, width: 250, gap: 2, justifyContent: 'center', py: 1.4,
      // border: '2px solid red'
    }}>

      {item.icon}
      <Box sx={{ p: 1 }}>
        <Typography variant='h4' sx={{ fontSize: '17px' }}>{item.main}</Typography>
        <Typography variant='span' sx={{ color: '#7D879C', fontSize: '12px' }}>{item.text}</Typography>
      </Box>
    </Box>
  )
}

