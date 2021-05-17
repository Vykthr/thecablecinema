import React from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt, } from 'react-icons/fa';

const Rating = ({rate}) => {
    const whole = parseInt(rate)
    const floatValue = parseFloat(rate).toFixed(2) - whole;
    const extra = floatValue ? 5 - (whole + 1) : 5 - whole;

    return (
        <>
            { [...new Array(whole)].map((num, key) => { return <FaStar key={key} color="orange" /> }) }
            { floatValue > 0 && <FaStarHalfAlt  color="orange" /> }
            { extra > 0 && [...new Array(extra)].map((num, key) => { return <FaRegStar key={key} /> }) }
        </>
    )
}

export default Rating
