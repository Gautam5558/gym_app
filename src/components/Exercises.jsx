import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import ExercisesCard from './ExercisesCard'
import { Pagination } from "@mui/material"
import { fetchApiData, options } from "../utils/fetchApiData"

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const exercisesperpage = 9
    const indexOfLastExerciseOfAnyPage = currentPage * exercisesperpage
    const indexOfFirstExerciseOfAnyPage = indexOfLastExerciseOfAnyPage - exercisesperpage
    const currentExercises = exercises.slice(indexOfFirstExerciseOfAnyPage, indexOfLastExerciseOfAnyPage)
    function paginate(e, value) {
        setCurrentPage(value)
        window.scrollTo({ top: "1800", left: "100", behavior: "smooth" })
    }

    useEffect(() => {
        async function fetching() {
            let exercisesData = []
            if (bodyPart === "all") {
                exercisesData = await fetchApiData('https://exercisedb.p.rapidapi.com/exercises', options)
            }
            else {
                exercisesData = await fetchApiData('https://exercisedb.p.rapidapi.com/exercises/bodyPart/' + bodyPart, options)
            }
            setExercises(exercisesData)
        }
        fetching()

    }, [bodyPart])

    const newarray = currentExercises.map((exercise) => {
        return (
            <ExercisesCard key={exercise.id} exercise={exercise} />
        )
    })
    return (
        <Box id="exercises"
            sx={{ mt: { lg: "110px" } }}
            mt="50px"
            p="20px"
        >
            <Typography variant='h3' mb="46px">Showing Results</Typography>
            <Stack direction="row" justifyContent="center" flexWrap="wrap" sx={{ gap: { lg: "110px", xs: "50px" } }}>
                {newarray}
            </Stack>
            <Stack mt="100px" alignItems="center">
                {exercises.length > 9 &&
                    <Pagination
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisesperpage)}
                        page={currentPage}
                        size="large"
                        onChange={paginate}
                    />
                }
            </Stack>
        </Box>
    )
}

export default Exercises  