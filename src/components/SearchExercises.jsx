import React, { startTransition } from 'react'
import { Box, Stack, Typography, TextField, Button } from '@mui/material'
import { useState, useEffect } from 'react'
import { options, fetchApiData } from "../utils/fetchApiData"
import { HorizontalScrollbar } from './'

const SearchExercises = ({ bodyPart, setBodyPart, exercises, setExercises }) => {

    const [search, setSearch] = useState("")
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {

        async function fetchingBodyParts() {
            const bodyPartsData = await fetchApiData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options)
            setBodyParts(bodyPartsData)
        }
        fetchingBodyParts();
    }, [])

    async function handleClick() {
        if (search) {
            const exercisesData = await fetchApiData('https://exercisedb.p.rapidapi.com/exercises', options)
            const searchedExercises = exercisesData.filter((exercise) => {
                return exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
            })
            console.log(searchedExercises)
            setExercises(searchedExercises)
            setSearch("")
        }
    }

    return (
        <Stack alignItems="center" justifyContent="center" padding="20px">
            <Typography fontWeight={700} sx={{ fontSize: { xs: "30px", lg: "44px" }, mb: "50px", textAlign: "center" }}>
                Awesome exercises you <br /> should know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField sx={{ input: { fontWeight: 700, borderRadius: "4px", border: "none" }, width: { xs: "350px", lg: "800px" }, height: "76px", backgroundColor: "#fff", borderRadius: "40px" }}
                    placeholder='Search Exercises'
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value.toLowerCase());
                    }}
                    type='text'
                ></TextField>
                <Button className='search-btn' sx={{ backgroundColor: "#ff2625", color: "#fff", textTransform: "none", width: { xs: "80px", lg: "175px" }, fontSize: { xs: "14px", lg: "20px", height: "56px", position: "absolute", right: 0 } }}
                    onClick={(e) => {
                        handleClick(e)
                    }}
                >Search</Button>
            </Box>
            <Box sx={{ position: "relative", padding: "20px", width: "100%" }}>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart={1} />
            </Box>
        </Stack>
    )
}

export default SearchExercises