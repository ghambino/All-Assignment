import React from 'react'

function Part2(props) {
    const {part2} = props;
    return (
        <>
         <p>{part2.name}: {part2.exercises}</p>    
        </>
    )
}

export default Part2
