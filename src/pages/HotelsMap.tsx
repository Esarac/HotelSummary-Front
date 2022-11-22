import React, { useState, useEffect } from 'react'
import Map from "../components/map/Map";
import { Hotel } from '../models/models';
import { getHotelsByYear } from '../services/hotelService';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { getValue } from '@mui/system';
import './HotelsMap.css'

function HotelsMap() {
    const [hotels, setHotels] = useState<Hotel[]>([])
    const [year, setYear] = useState<number>(2022)

    const marks = [
        {
          value: 2003,
          label: '2003',
        },
        {
          value: 2022,
          label: '2022',
        }
      ];

    useEffect(() => {
        console.log('ENTERED')
        getHotelsByYear(year.toString())
            .then((res) => {
                console.log('SUCESSFUL')
                setHotels(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [hotels, year])

    return (
        <div>
            <h2>Hotel rating map</h2>
            <Map hotels={hotels}></Map>
            <div className='container' >
                <Box width={500}  display="flex" flexDirection="column">
                    <Slider style={{ marginTop: 38 }}value={year} max={2022} min={2003} valueLabelDisplay="on" onChange={(_, value) => setYear(value as number)} marks={marks} />
                </Box>
            </div>
        </div>
    )
}

export default HotelsMap