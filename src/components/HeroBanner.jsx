import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import BannerImage from "../assets/images/banner.png"


const HeroBanner = () => {
    return (
        <Box sx={{ mt: { xs: "70px", lg: "212px" }, ml: { sm: "50px" } }} position="relative" padding="20px">
            <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
            <Typography fontWeight={700} sx={{ fontSize: { xs: "40px", lg: "44px" } }} mb="23px" mt="30px">Sweat, Smile <br />and Repeat</Typography>
            <Typography fontSize="22px" lineHeight="35px" mb={4}>Check put the most effective Exercises</Typography>
            <Button href='#exercises' variant='contained' color='error' sx={{ backgroundColor: "#ff2625", padding: "10px" }}>Explore Exercises</Button>
            <Typography fontWeight={600} color="#FF2625" sx={{ opacity: 0.1, display: { xs: "none", lg: "block" } }} fontSize="200px">Exercise</Typography>
            <img src={BannerImage} alt='bannerimage' className='hero-banner-img' />
        </Box>
    )
}

export default HeroBanner