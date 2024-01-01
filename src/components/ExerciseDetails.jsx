import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchApiData, options, VideoOptions } from '../utils/fetchApiData'
import { Box } from '@mui/material'
import { Detail, ExerciseVideos, SimilarExercises } from "./"

const ExerciseDetails = () => {
    const { id } = useParams()
    const [exerciseDetails, setExerciseDetails] = useState(null)
    const [exerciseVideos, setExerciseVideos] = useState([])
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
    const [similarEqipmentExercises, setSimilarEquipmentExercises] = useState([])
    useEffect(() => {
        async function fetching() {
            const exerciseData = await fetchApiData('https://exercisedb.p.rapidapi.com/exercises/exercise/' + id, options)
            setExerciseDetails(exerciseData)

            const videoData = await fetchApiData('https://youtube-search-and-download.p.rapidapi.com/search?query=' + exerciseData.name, VideoOptions)
            setExerciseVideos(videoData.contents)
            console.log(videoData.contents)

            const exercisesByTargetMuscle = await fetchApiData('https://exercisedb.p.rapidapi.com/exercises/target/' + exerciseData.target, options)
            setTargetMuscleExercises(exercisesByTargetMuscle)

            const exerciseBySimilarEquipment = await fetchApiData('https://exercisedb.p.rapidapi.com/exercises/equipment/' + exerciseData.equipment, options)
            setSimilarEquipmentExercises(exerciseBySimilarEquipment)

        }

        fetching()
    }, [id])

    return (
        <Box>
            <Detail exerciseDetails={exerciseDetails} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetails?.name} />
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} similarEqipmentExercises={similarEqipmentExercises} />
        </Box>
    )
}

export default ExerciseDetails