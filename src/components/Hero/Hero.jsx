import { useTheme } from '@emotion/react'
import { Box, Container, Typography, Link, Stack, Button } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Sider.css'
import 'swiper/css';
import 'swiper/css/pagination';
import Service from './Service';

function Hero() {
    const theme = useTheme();
    return (
        <Box sx={{ bgcolor: theme.palette.myColor.main, padding:'12px 0'}}>
            <Container>
<Box sx={{ pt: 2, display: { xs: 'block', md: 'flex' }, alignItems: 'center', gap: 2 }}>
    <Swiper
                loop={true}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide sx={{
                        [theme.breakpoints.up('sm')]: {
                            position: 'relative'
                        }

                    }} >
                        <img src='./images/banner-15.jpg' />
                        <Box
                            sx={{
                                [theme.breakpoints.up('sm')]: {
                                    color: 'black',
                                    position: "absolute",
                                    top: "12%",
                                    marginLeft: '15%',
                                    textAlign: "left",
                                    padding: '10px'
                                },
                                [theme.breakpoints.down("sm")]: {
                                    // pt: 4,
                                    // pb: 6,
                                    py: 6,
                                    color: 'black',
                                    fontSize: '12px',
                                },
                            }}>
                            <Typography variant="h4" sx={{ fontSize: '30px' }}>Lifestyle collection</Typography>
                            <Typography variant="h2">Men</Typography>
                            <Stack sx={{
                                [theme.breakpoints.down("sm")]: {
                                    justifyContent: 'center'
                                }, alignItems: 'center', flexDirection: 'row'
                            }}>
                                <Typography variant="h4">SALE UP TO </Typography>
                                <Typography color={"#D23F57"} variant="h4">  30% OFF</Typography>
                            </Stack>
                            <Typography variant="body1">Get Free Shipping on orders over $99.00</Typography>
                            <Button sx={{ bgcolor: '#252b32', color: '#fff', mt: 2, ':hover': { bgcolor: '#151515', color: '#fff' } }}>
                                Shop Now
                            </Button>
                        </Box>

                    </SwiperSlide>
                    <SwiperSlide sx={{ 
                        // ':hover':'grab',
                        [theme.breakpoints.up('sm')]: {
                            position: 'relative'
                        }

                    }} >
                        <img src='./images/banner-25.jpg' />
                        <Box
                            sx={{
                                [theme.breakpoints.up('sm')]: {
                                    color: 'black',
                                    position: "absolute",
                                    top: "12%",
                                    marginLeft: '15%',
                                    textAlign: "left",
                                    padding: '10px'
                                },
                                [theme.breakpoints.down("sm")]: {
                                    // pt: 4,
                                    // pb: 6,
                                    py: 6,
                                    color: 'black',
                                    fontSize: '12px',
                                },
                            }}>
                            <Typography variant="h4" sx={{ fontSize: '30px' }}>Lifestyle collection</Typography>
                            <Typography variant="h2">WOMEN</Typography>
                            <Stack sx={{
                                [theme.breakpoints.down("sm")]: {
                                    justifyContent: 'center'
                                }, alignItems: 'center', flexDirection: 'row'
                            }}>
                                <Typography variant="h4">SALE UP TO </Typography>
                                <Typography color={"#D23F57"} variant="h4">  35% OFF</Typography>
                            </Stack>
                            <Typography variant="body1">Get Free Shipping on orders over $99.00</Typography>
                            <Button sx={{ bgcolor: '#252b32', color: '#fff', mt: 2, ':hover': { bgcolor: '#151515', color: '#fff' } }}>
                                Shop Now
                            </Button>
                        </Box>
                    </SwiperSlide>
                </Swiper>
                <Box sx={{
                    [theme.breakpoints.up('md')]: {width: '36%'}, [theme.breakpoints.down('sm')]: {
                        display: 'flex',
                        gap: 2,
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '100%',
                        marginTop:'10px'
                    },
                }}>
                    <Box sx={{
                        position: 'relative', [theme.breakpoints.down('md')]: {
                            flexGrow:1
                        },
                    }}>
                        <img src='./images/banner-16.jpg' width='100%' />
                        <Box sx={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', marginLeft: 2, color: 'black' }}>  {/* بكس للنص الي بدي اكتبه في السلايدر */}
                            <Typography sx={{ fontSize: '13px', fontWeight: '400' }}>
                                GAMING 4K
                            </Typography>
                            <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>
                                DESKTOPS &
                                <br />
                                LAPTOPS
                            </Typography>

                            <a style={{ display: 'flex', alignItems: 'center' }}>Shop now <ArrowRightAltIcon /></a>

                        </Box>
                    </Box>
                    <Box sx={{
                        position: 'relative', [theme.breakpoints.down('md')]: {
                            minWidth: '49%',
                            
                        },
                    }}>
                        <img src='./images/banner-17.jpg' width='100%' />
                        <Box sx={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', marginLeft: 2, color: 'black' }}>
                            <Typography sx={{ fontSize: '13px', fontWeight: '400' }}>
                                NEW ARRIVALS
                            </Typography>
                            <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>
                                SUMMER
                                <br />
                                SALE 20% OFF
                            </Typography>

                            <Link to='#' style={{ display: 'flex', alignItems: 'center', color: 'black' }}>Shop now <ArrowRightAltIcon /></Link>

                        </Box>
                    </Box>
                </Box>
</Box>
<Service/>
            </Container>
        </Box>

    )
}
export default Hero