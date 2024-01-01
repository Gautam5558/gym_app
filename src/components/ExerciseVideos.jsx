import React from 'react'
import { Box, Stack, Typography } from "@mui/material"

const ExerciseVideos = ({ exerciseVideos, name }) => {
    if (name === null) {
        return "Loading..."
    }

    const arrayOfVideos = exerciseVideos?.slice(0, 6).map((item, index) => {
        return (
            <a
                key={index}
                className='exercise-video'
                href={'https://www.youtube.com/watch?v=' + item.video.videoId}
                target='_blank'
                rel='noreferrer'
            >
                <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                <Box>
                    <Typography variant='h5' sx={{ color: "#000" }}>{item.video.title}</Typography>
                    <Typography variant='h6' color="#000">{item.video.channelName}</Typography>
                </Box>
            </a>
        )
    })

    return (
        <Box sx={{ mt: { lg: "200px", xs: "20px" }, p: "20px" }}>
            <Typography variant='h3' mb="33px">Watch <span style={{ color: "#ff2625", textTransform: "capitalize" }}>{name}</span> exercise videos</Typography>
            <Stack justifyContent="flex-start" alignItems="center" flexWrap="wrap" sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}>
                {arrayOfVideos}
            </Stack>
        </Box>
    )
}

export default ExerciseVideos 