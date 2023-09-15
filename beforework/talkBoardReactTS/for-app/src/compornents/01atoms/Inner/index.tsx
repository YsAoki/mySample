import React, { FC } from 'react'
import { StyleInner } from './style'

type Props = {
  children: React.ReactNode,
}

export type StyleProps = {
  width?: string;
}

const Inner:FC<Props & StyleProps> = ({children, ...prop}) => {
  return (
    <StyleInner {...prop}>{children}</StyleInner>
  )
}

export default Inner