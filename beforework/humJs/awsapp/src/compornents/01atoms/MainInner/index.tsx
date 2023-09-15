import React, { FC } from 'react'
import { SMainInner } from './style'
import { ChildrenProps } from '../../../types'

const MainInner:FC<ChildrenProps> = ({children, ...other}) => {
  return (
    <SMainInner{...other}>
      {children}
    </SMainInner>
  )
}

export default MainInner