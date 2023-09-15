import React from 'react'

const Bar = ({...other}) => {
  return (
    <div {...other}></div>
  )
}

export default Bar