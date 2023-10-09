import React, { FC } from 'react'
import { StyleBar } from './style'

type Props = {
  className?: string;
}

const Bar: FC<Props> = ({ className }) => {
  return (
    <StyleBar className={className}/>
  )
}

export default Bar