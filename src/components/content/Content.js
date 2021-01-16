import React from 'react'
import Part1 from './Part1'
import Part2 from './Part2'
import Part3 from './Part3'

function Content(props) {
  console.log(props);
  const {parts} = props;

    return (
        <div>
          <Part1 part={parts[0]}/>  
          <Part2 part={parts[1]}/>
          <Part3 part={parts[2]}/>
        </div>
    )
}

export default Content
