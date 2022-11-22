import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { Button } from '@mui/material'
import Bubbles from '../components/bubbles/Bubbles'
import { rateReview } from '../services/hotelService'
import { RatingData } from '../models/models'



function RatePage() {
    const [review, setReview] = useState<string>("")
    const [ratings, setRatings] = useState<RatingData>({
        OVERALL_RATING: 0,
        VADER_RATING: 0,
        HIV4_RATING: 0,
        LM_RATING: 0
    })

    const submitReview = () => {
        rateReview(review)
            .then((res) => {
                setRatings(res.data)
            })
    }

    return (
        <div>
            <Container className="pb-3">
                <h1>Rate</h1>
                <Form className="py-3">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            placeholder='Please enter the review'
                        />
                    </Form.Group>
                    <Button variant="contained" onClick={submitReview}>Rate</Button>
                </Form>
                <p>
                    <Bubbles value={ratings.OVERALL_RATING} />
                </p>
                <div className='bg-light border rounded p-1'>
                    <small><Bubbles value={ratings.VADER_RATING} /> <small className="text-muted">VADER</small></small>
                    <br />
                    <small><Bubbles value={ratings.HIV4_RATING} /> <small className="text-muted">HIV4</small></small>
                    <br />
                    <small><Bubbles value={ratings.LM_RATING} /> <small className="text-muted">LM</small></small>
                </div>
            </Container>
        </div>
    )
}

export default RatePage