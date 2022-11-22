import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Hotel } from '../../models/models';
import Bubbles from '../bubbles/Bubbles'
import './CardView.css'

interface Props {
  hotel: Hotel
}

function CardView(props: Props) {

  const card = (
    <div className='Cardcontainer'>
      <p><strong>{props.hotel['HOTEL_NAME']} </strong></p>
      <p>
        <Bubbles value={props.hotel['OVERALL_RATING']} />
      </p>
      <p>
        <strong>Review: </strong>
        <br />
        {props.hotel['REVIEW_SUMMARY']}
      </p>
      <div className='bg-light border rounded p-1'>
        <small><Bubbles value={props.hotel['VADER_RATING']} /> <small className="text-muted">VADER</small></small>
        <br />
        <small><Bubbles value={props.hotel['HIV4_RATING']} /> <small className="text-muted">HIV4</small></small>
        <br />
        <small><Bubbles value={props.hotel['LM_RATING']} /> <small className="text-muted">LM</small></small>
      </div>
      <div className='Cardfooter'>
        <i>{props.hotel['ADDRESS']} ({props.hotel['REVIEW_DATE']})</i>
      </div>
    </div>
  )

  return (
    <Box sx={{ width: 1200 }} className='card'>
      <Card variant="outlined">{card}</Card>
    </Box>
  )
}

export default CardView