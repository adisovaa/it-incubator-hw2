import React from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                color: '#00CC22',
                height: 8,
                '& .MuiSlider-rail': {
                    backgroundColor: '#d3d3d3',
                    opacity: 0.5,
                },
                '& .MuiSlider-thumb': {
                    backgroundColor: '#00CC22',
                    width: 20,
                    height: 20,
                },
            }}
            {...props} // передаем все пропсы, включая value и onChange
        />
    )
}

export default SuperRange
