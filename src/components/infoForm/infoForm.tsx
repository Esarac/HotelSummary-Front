import React from 'react'
import { Hotel } from '../../models/models'

interface Props {
    hotel: Hotel
}

function InfoForm(props: Props) {
    return (
        <div>
            <p><strong>Name: </strong> {props.hotel['HOTEL_NAME']}</p>
            <p><strong>Address: </strong> {props.hotel['ADDRESS']}</p>
            <p><strong>Lat and long: </strong> {props.hotel['LATITUDE'] + ', ' + props.hotel['LONGITUDE']}</p>
            <p><strong>Rating - Tripadvisor: </strong> {props.hotel['HOTEL_RATING']}</p>
            <p><strong>Rating - LM dictionary: </strong> {props.hotel['LM_RATING']}</p>
            <p><strong>Rating - HIV4 dictionary: </strong> {props.hotel['HIV4_RATING']}</p>
            <p><strong>Rating - VADER dictionary: </strong> {props.hotel['VADER_RATING']}</p>
            <p><strong>Rating - Overall: </strong> {props.hotel['OVERALL_RATING']}</p>
            <p><strong>Reviews date: </strong> {props.hotel['REVIEW_DATE']}</p>
            <p><strong>Reviews summary: </strong> {props.hotel['REVIEW_SUMMARY']}</p>
        </div>
    )
}

export default InfoForm