import React, { useState } from 'react'
import { Form, Row, Col, Container } from 'react-bootstrap'
import { Button } from '@mui/material'
import './SearchPage.css'
import { searchHotel } from '../services/hotelService'
import CardView from '../components/card/CardView'

function SearchPage() {
    const [searchValue, setSearchValue] = useState<string>('')
    const [hotels, setHotels] = useState<React.ReactNode>(null)


    const search = (value: string) => {
        if (value.length > 0) {
            searchHotel(value)
            .then((res) => {
                let found = res.data
                if (found.length > 0)
                    setHotels(found.map((hotel) => {
                        return (
                            <CardView hotel={hotel}></CardView>
                        )
                    }))
                else
                    setHotels(
                        <div className='message'>
                            <h5>Not found</h5>
                        </div>
                    )
            })
            .catch((e) => {
                console.log(e)
            })
        }
    }

    return (
        <Container className="pb-3">
            <h1>Search</h1>
            <Form>
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
                            <Button variant='contained' onClick={() => search(searchValue)}>Search</Button>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
            {hotels}
        </Container>
    )
}

export default SearchPage