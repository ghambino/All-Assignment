import React from 'react'

function Part1(props) {
    console.log(props);
   const {part1} = props;
    return (
        <>
          <p>{part1.name}: {part1.exercises}</p>    
        </>
    )
}

export default Part1
