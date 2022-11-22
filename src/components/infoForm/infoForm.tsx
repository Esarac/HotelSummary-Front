import React from 'react'
import { Hotel } from '../../models/models'
import Bubbles from '../bubbles/Bubbles'

interface Props {
    hotel: Hotel
}

function InfoForm(props: Props) {
    return (
        <div>
            <p>
                <Bubbles value={props.hotel['OVERALL_RATING']}/>
            </p>
            <p>
                <strong>Review: </strong>
                <br/>
                {props.hotel['REVIEW_SUMMARY']}
            </p>
            <div className='bg-light border rounded p-1'>
                <small><Bubbles value={props.hotel['VADER_RATING']}/> <small className="text-muted">VADER</small></small>
                <br/>
                <small><Bubbles value={props.hotel['HIV4_RATING']}/> <small className="text-muted">HIV4</small></small>
                <br/>
                <small><Bubbles value={props.hotel['LM_RATING']}/> <small className="text-muted">LM</small></small>
            </div>
        </div>
    )
}

export default InfoForm