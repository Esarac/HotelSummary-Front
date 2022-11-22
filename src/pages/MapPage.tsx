import React, { useState, useEffect } from 'react'
import Map from "../components/map/Map";
import { Hotel } from '../models/models';
import { getHotelsByYear } from '../services/hotelService';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './HotelsMap.css'
import { Container } from 'react-bootstrap';

function HotelsMap() {
    const [hotels, setHotels] = useState<Hotel[]>([])
    const [year, setYear] = useState<number>(2022)
    const [yearCommitted, setYearCommitted] = useState<number>(2022)

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
        getHotelsByYear(yearCommitted)
            .then((res) => {
                setHotels(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [yearCommitted])

    return (
        <div>
            <Container>
                <h1>Map</h1>
            </Container>
            <Map hotels={hotels}></Map>
            <div className='container d-flex justify-content-center'>
                <Box width={500}  display="flex" flexDirection="column">
                    <Slider style={{ marginTop: 38 }}value={year} max={2022} min={2003} valueLabelDisplay="on" onChange={(_, value) => setYear(value as number)} onChangeCommitted={(_, value) => setYearCommitted(value as number)} marks={marks} />
                </Box>
            </div>
        </div>
    )
}

export default HotelsMap