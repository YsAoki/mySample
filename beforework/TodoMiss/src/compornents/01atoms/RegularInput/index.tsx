import React, { FC } from 'react'
import { SRegularInput } from './style';

type TypeRegularInput = React.ComponentPropsWithoutRef<"input">;

const RegularInput:FC<TypeRegularInput> = ({...other}) => {
  return (
    <SRegularInput {...other}/>
  )
}

export default RegularInput