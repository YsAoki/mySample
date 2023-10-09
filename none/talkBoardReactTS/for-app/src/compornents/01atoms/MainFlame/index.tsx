import React, { FC } from 'react'
import { StyleMainFlame } from './style'

type Props = {
  children: React.ReactNode,
}

export type StyleProps = {
  backgroundColor?: string,
  padding?: string,
}

const MainFlame:FC<Props & StyleProps> = ({ children, ...prop}) => {
  return (
    <StyleMainFlame{...prop}>{children}</StyleMainFlame>
  )
}

export default MainFlame