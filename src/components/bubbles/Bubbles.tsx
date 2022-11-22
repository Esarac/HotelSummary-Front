import React from 'react'
import { BsCircle, BsCircleFill } from 'react-icons/bs'

interface Props {
    value: number
}

export default function Bubbles(props: Props) {
    const filled = Array(props.value).fill('').map((value, index) => <BsCircleFill className='mx-1' key={`f-${index}`} style={{color: '#1976d2'}}/>)
    const outlined = Array(5 - props.value).fill('').map((value, index) => <BsCircle className='mx-1'key={`o-${index}`} />)
    
    return (
        <>{filled}{outlined} {props.value} bubbles</>
    )
}
