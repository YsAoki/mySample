import React, { FC } from 'react'
import { StyleBlueBarWithTitle } from './style';

type Props = {
  children: React.ReactNode,
}

export type StyleProps = {
  margin?: string,
}

const BlueBarWithTitle:FC<Props & StyleProps> = ({ children, ...prop }) => {
  return (
    <StyleBlueBarWithTitle tag='h2' fontSize='24px' {...prop}>{children}</StyleBlueBarWithTitle>
  )
}

export default BlueBarWithTitle