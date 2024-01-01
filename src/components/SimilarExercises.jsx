import React from 'react'
import { Box, Stack, Typography } from "@mui/material"
import { HorizontalScrollbar } from "./"
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, similarEqipmentExercises }) => {
    return (
        <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>

            <Typography variant='h3'>Exercises that target the same muscle group</Typography>
            <Stack direction="row" sx={{ padding: 2, position: "relative" }}>
                {targetMuscleExercises.length ? <Box sx={{ position: "relative", padding: "20px", width: "100%" }}><HorizontalScrollbar data={targetMuscleExercises} /></Box> : <Loader />}
            </Stack>
            <Typography variant='h3'>Exercises that use the same equipment</Typography>
            <Stack direction="row" sx={{ padding: 2, position: "relative" }}>
                {similarEqipmentExercises.length ? <Box sx={{ position: "relative", padding: "20px", width: "100%" }}><HorizontalScrollbar data={similarEqipmentExercises} /></Box> : <Loader />}
            </Stack>
        </Box>
    )
}

export default SimilarExercises
