import React from 'react'
import { Typography, Stack, Button } from '@mui/material'
import BodyPartImage from "../assets/icons/body-part.png"
import EquipmentImage from "../assets/icons/equipment.png"
import TargetImage from "../assets/icons/target.png"

const Detail = ({ exerciseDetails }) => {
    if (exerciseDetails === null) {
        return "loading"
    }
    const { bodyPart, equipment, gifUrl, name, target } = exerciseDetails

    //creating array of data

    const arrayofdata = [
        {
            image: BodyPartImage,
            name: bodyPart
        },
        {
            image: TargetImage,
            name: target
        },
        {
            image: EquipmentImage,
            name: equipment
        }
    ]


    const newarray = arrayofdata.map((item) => {
        return (<Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ backgroundColor: "#fff2db", borderRadius: "50%", width: "100px", height: "100px" }}><img src={item.image} alt={item.name} style={{ width: "50px", height: "50px" }} /></Button>
            <Typography variant='h5' textTransform="capitalize">{item.name}</Typography>
        </Stack>
        )
    })
    return (
        <Stack direction="row" gap="60px" sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}>
            <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
            <Stack sx={{ gap: { xs: "20px", lg: "35px" }, }}>
                <Typography variant='h3' textTransform="capitalize">{name}</Typography>
                <Typography variant='h6'>
                    Exercises keep you strong. {name} is one of the best exercises
                    to target your {target}. It will help you imporove your mood
                    and gain energy.
                </Typography>
                {newarray}
            </Stack>
        </Stack>
    )
}

export default Detail