import React from 'react'

function Total(props) {
 const {part1, part2, part3} = props;
    const total = part1.exercises + part2.exercises + part3.exercises;
    return (
        <>
            <p>The number of excercises is {total}</p> 
        </>
    )
}

export default Total
