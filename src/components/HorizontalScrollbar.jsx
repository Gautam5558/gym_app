import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { BodyPart } from "./"
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExercisesCard from './ExercisesCard'



const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className="left-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};





const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyPart }) => {

    const newdata = data.map((item) => {
        return (
            <Box
                key={item || item.id}
                itemID={item || item.id}
                title={item || item.id}
                m="0px 40px"
            >
                {isBodyPart ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> :
                    <ExercisesCard exercise={item} />
                }
            </Box>
        )
    })

    return (
        <div>
            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>{newdata}</ScrollMenu>
        </div>
    )
}

export default HorizontalScrollbar