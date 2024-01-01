import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Logo from "../assets/images/Logo-1.png"

const Footer = () => {
    return (
        <Box mt="80px" bgcolor="#fff3f4">
            <Stack gap="40px" alignItems="center" px="40px" pt="24px">
                <img src={Logo} alt='Gold Gym' width="200px" height="40px" />
                <Typography variant='h5' mt="20px" pb="40px">Gautam's Fitness App 🙂</Typography>
            </Stack>
        </Box>
    )
}

export default Footer