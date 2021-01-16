import React from 'react'

function Part3(props) {
    const {part} = props;
    return (
        <>
          <p>{part.name}: {part.exercises}</p>  
        </>
    )
}

export default Part3


