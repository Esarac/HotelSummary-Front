import React from 'react'
import { Hotel } from '../../models/models'
import { BsCircleFill, BsCircle } from 'react-icons/bs'

interface Props {
    hotel: Hotel
}

function InfoForm(props: Props) {
    const bubbleIcons = (bubbles: number) => {
        const filled = Array(bubbles).fill('').map((value, index) => <BsCircleFill className='mx-1' key={`f-${index}`}/>)
        const outlined = Array(5 - bubbles).fill('').map((value, index) => <BsCircle className='mx-1'key={`o-${index}`}/>)
        return (
            <>{filled}{outlined} {bubbles} bubbles</>
        )
    }

    return (
        <div>
            <p>
                {bubbleIcons(props.hotel['OVERALL_RATING'])}
            </p>
            <p>
                <strong>Review: </strong>
                <br/>
                {props.hotel['REVIEW_SUMMARY']}
            </p>
            <div className='bg-light border rounded p-1'>
                <small>{bubbleIcons(props.hotel['VADER_RATING'])} <small className="text-muted">VADER</small></small>
                <br/>
                <small>{bubbleIcons(props.hotel['HIV4_RATING'])} <small className="text-muted">HIV4</small></small>
                <br/>
                <small>{bubbleIcons(props.hotel['LM_RATING'])} <small className="text-muted">LM</small></small>
            </div>
        </div>
    )
}

export default InfoForm