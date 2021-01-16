import React from 'react'

function Part1(props) {
    console.log(props);
   const {part} = props;
    return (
        <>
          <p>{part.name}: {part.exercises}</p>    
        </>
    )
}

export default Part1
