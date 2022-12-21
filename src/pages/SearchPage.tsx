import React, { useState } from 'react'
import { Form, Row, Col, Container } from 'react-bootstrap'
import { Box, Button, Slider } from '@mui/material'
import './SearchPage.css'
import { searchHotel } from '../services/hotelService'
import CardView from '../components/card/CardView'

function SearchPage() {
    const [searchValue, setSearchValue] = useState<string>('')
    const [tempSearchValue, setTempSearchValue] = useState<string>('')
    const [year, setYear] = useState<number>(2022)
    const [hotels, setHotels] = useState<React.ReactNode>(null)

    const search = (value: string, year: number) => {

        if (value.length > 0) {
            searchHotel(value, year)
                .then((res) => {
                    let found = res.data
                    if (found.length > 0)
                        setHotels(
                            <>
                                <div className='message'>
                                    <small className='text-muted'>Searching "{value}" - {found.length} results ({year})</small>
                                </div>
                                {
                                    found.map((hotel) => {
                                        return (
                                            <CardView hotel={hotel}></CardView>
                                        )
                                    })
                                }
                            </>
                        )
                    else
                        setHotels(
                            <div className='message'>
                                <small className='text-muted'>Searching "{value}" - 0 results ({year})</small>
                            </div>
                        )
                })
                .catch((e) => {
                    setHotels(
                        <div className='message'>
                            <small className='text-muted'>Error - Try again</small>
                        </div>
                    )
                })
        }
        else {
            setHotels(
                <div className='message'>
                    <small className='text-muted'>Searching "" - 0 results ({year})</small>
                </div>
            )
        }
    }

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

    return (
        <Container className="pb-3">
            <h1>Search</h1>
            <Form>
                <Form.Group>
                    <Box width={500} className="ps-3">
                        <Slider
                            style={{ marginTop: 38 }}
                            value={year}
                            max={2022}
                            min={2003}
                            valueLabelDisplay="on"
                            onChange={(_, value) => {
                                setYear(value as number)
                                console.log(tempSearchValue)
                                if (searchValue != '')
                                    search(tempSearchValue, value as number)
                            }}
                            marks={marks}
                            track={false} />
                    </Box>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Hotel name</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control
                                type="text"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                placeholder='Please type the hotel name'
                            />
                        </Col>
                        <Col>
                            <Button variant='contained' onClick={() => {
                                setTempSearchValue(searchValue)
                                search(searchValue, year)
                            }}>Search</Button>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
            {hotels}
        </Container>
    )
}

export default SearchPage