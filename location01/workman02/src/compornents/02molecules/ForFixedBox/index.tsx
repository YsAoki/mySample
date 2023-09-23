import React, { FC } from 'react'
import { SForFixedBox } from './style'
import { ChildrenProps } from '../../../types/types'

const ForFixedBox:FC<ChildrenProps> = ({children, ...other}) => {
  return (
    <SForFixedBox tag='main' {...other}>
      {children}
    </SForFixedBox>
  )
}

export default ForFixedBox