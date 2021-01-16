import React from 'react'

function Total(props) {
 const {parts} = props;
    const total = parts[0].exercises + parts[1].exercises + parts[2].exercises;
    return (
        <>
            <p>The number of excercises is {total}</p> 
        </>
    )
}

export default Total
